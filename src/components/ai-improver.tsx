"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getPersonalizedContent } from "@/app/actions";
import { type PersonalizeSalesContentOutput } from "@/ai/flows/personalize-sales-content";
import { Loader2, Wand2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

const formSchema = z.object({
  productDescription: z.string().min(20, "Por favor, forneça uma descrição mais detalhada do produto."),
  testimonials: z.string().min(20, "Por favor, forneça pelo menos um depoimento."),
});

export function AIImprover() {
  const [result, setResult] = useState<PersonalizeSalesContentOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productDescription: "",
      testimonials: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setResult(null);
    const testimonialsArray = values.testimonials.split('\n').filter(t => t.trim() !== '');

    const response = await getPersonalizedContent({
      productDescription: values.productDescription,
      testimonials: testimonialsArray,
    });
    
    setIsLoading(false);

    if (response.success && response.data) {
      setResult(response.data);
    } else {
      toast({
        variant: "destructive",
        title: "Erro",
        description: response.error || "Ocorreu um erro desconhecido.",
      });
    }
  }

  return (
    <Card className="w-full bg-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-headline text-lg">
          <Wand2 className="text-primary" />
          <span>Melhore sua Página com IA</span>
        </CardTitle>
        <p className="text-muted-foreground font-body text-sm">
          Insira a descrição do seu produto e depoimentos para receber sugestões de conteúdo otimizado para conversão.
        </p>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="productDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descrição do Produto</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Ex: Meu curso ensina a fazer pães sem glúten de forma simples..."
                      className="resize-y font-body"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="testimonials"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Depoimentos de Clientes (um por linha)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Ex: Adorei o curso, finalmente acertei o pão!"
                      className="resize-y font-body"
                      rows={5}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} className="w-full sm:w-auto">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Analisando...
                </>
              ) : (
                "Gerar Sugestões"
              )}
            </Button>
          </form>
        </Form>

        {isLoading && (
          <div className="mt-8 text-center">
            <Loader2 className="mx-auto h-8 w-8 animate-spin text-primary" />
            <p className="mt-2 font-body text-muted-foreground">Aguarde, nossa IA está preparando as sugestões...</p>
          </div>
        )}

        {result && (
          <div className="mt-8 space-y-6">
            <Alert>
              <Wand2 className="h-4 w-4" />
              <AlertTitle className="font-headline">Sugestões Geradas!</AlertTitle>
              <AlertDescription className="font-body">
                Aqui estão algumas ideias para melhorar sua página de vendas.
              </AlertDescription>
            </Alert>

            <div>
              <h3 className="text-xl font-bold font-headline mb-2">Depoimentos Refinados</h3>
              <ul className="space-y-2 list-disc list-inside font-body">
                {result.refinedTestimonials.map((testimonial, index) => (
                  <li key={index} className="pl-2">{testimonial}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold font-headline mb-2">Seções de Conteúdo Sugeridas</h3>
              <ul className="space-y-2 list-disc list-inside font-body">
                {result.suggestedContentSections.map((section, index) => (
                  <li key={index} className="pl-2">{section}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
