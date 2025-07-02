'use server';
/**
 * @fileOverview A Genkit flow that personalizes sales content by identifying pain points
 * and suggesting personalized content sections based on customer testimonials.
 *
 * - personalizeSalesContent - A function that personalizes sales content.
 * - PersonalizeSalesContentInput - The input type for the personalizeSalesContent function.
 * - PersonalizeSalesContentOutput - The return type for the personalizeSalesContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizeSalesContentInputSchema = z.object({
  testimonials: z
    .array(z.string())
    .describe('An array of customer testimonials about the product.'),
  productDescription: z.string().describe('A description of the product.'),
});
export type PersonalizeSalesContentInput = z.infer<typeof PersonalizeSalesContentInputSchema>;

const PersonalizeSalesContentOutputSchema = z.object({
  refinedTestimonials: z
    .array(z.string())
    .describe('Refined testimonials highlighting key pain points.'),
  suggestedContentSections: z
    .array(z.string())
    .describe('Suggested content sections to address customer needs.'),
});
export type PersonalizeSalesContentOutput = z.infer<typeof PersonalizeSalesContentOutputSchema>;

export async function personalizeSalesContent(
  input: PersonalizeSalesContentInput
): Promise<PersonalizeSalesContentOutput> {
  return personalizeSalesContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizeSalesContentPrompt',
  input: {schema: PersonalizeSalesContentInputSchema},
  output: {schema: PersonalizeSalesContentOutputSchema},
  prompt: `You are an AI assistant specializing in creating high converting landing pages.

  Given the following product description:
  {{productDescription}}

  And the following customer testimonials:
  {{#each testimonials}}- {{{this}}}\n{{/each}}

  1.  Identify the main pain points expressed in the testimonials.
  2.  Refine the testimonials to more strongly emphasize these pain points.
  3.  Suggest content sections for the landing page that directly address these pain points and highlight how the product resolves them.

  Return the refined testimonials and suggested content sections in the specified JSON format.
  Make sure that the content sections are tailored to increase the conversion rate of the landing page, and target common objections or concerns.
  `,
});

const personalizeSalesContentFlow = ai.defineFlow(
  {
    name: 'personalizeSalesContentFlow',
    inputSchema: PersonalizeSalesContentInputSchema,
    outputSchema: PersonalizeSalesContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
