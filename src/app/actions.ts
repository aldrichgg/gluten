'use server';

import { personalizeSalesContent, type PersonalizeSalesContentInput } from "@/ai/flows/personalize-sales-content";

export async function getPersonalizedContent(input: PersonalizeSalesContentInput) {
  try {
    const result = await personalizeSalesContent(input);
    return { success: true, data: result };
  } catch (error) {
    console.error("Error in getPersonalizedContent action:", error);
    return { success: false, error: "Falha ao obter conteúdo personalizado. Por favor, tente novamente." };
  }
}
