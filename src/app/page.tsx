"use client";

import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  CheckCircle,
  ChefHat,
  Facebook,
  Gift,
  Heart,
  Instagram,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  UserCheck,
  Wheat,
  XCircle,
  Youtube,
} from 'lucide-react';
import { GlutenFreeIcon } from '@/components/icons';
import { Separator } from '@/components/ui/separator';
import { useState, useEffect } from 'react';
import { SalesPopup } from '@/components/sales-popup';

export default function Home() {
  const [popup, setPopup] = useState<{ name: string; location: string; key: number } | null>(null);

  const names = ["Ana Clara", "Maria Eduarda", "Juliana", "Camila", "Fernanda", "Beatriz", "Luana", "Mariana", "Ricardo", "Larissa", "Paula", "Carlos", "Isabela", "Sofia", "Laura"];
  const locations = ["São Paulo, SP", "Rio de Janeiro, RJ", "Belo Horizonte, MG", "Curitiba, PR", "Porto Alegre, RS", "Salvador, BA", "Fortaleza, CE", "Recife, PE", "Brasília, DF", "Manaus, AM"];

  useEffect(() => {
    let timeouts: NodeJS.Timeout[] = [];
  
    const loop = () => {
      const delay = Math.random() * (15000 - 8000) + 8000; // 8-15 seconds
      const timeoutId = setTimeout(() => {
        const name = names[Math.floor(Math.random() * names.length)];
        const location = locations[Math.floor(Math.random() * locations.length)];
        setPopup({ name, location, key: Date.now() });
  
        const hideTimeoutId = setTimeout(() => {
          setPopup(null);
        }, 7000); // Show for 7 seconds
        timeouts.push(hideTimeoutId);
  
        loop();
      }, delay);
      timeouts.push(timeoutId);
    }
  
    const initialTimeout = setTimeout(loop, 6000);
    timeouts.push(initialTimeout);
    
    return () => {
      timeouts.forEach(clearTimeout);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#" className="flex items-center gap-2" aria-label="Página Inicial do Gluten-Free Bread Bliss">
            <Wheat className="h-6 w-6 text-primary" />
            <span className="text-lg sm:text-xl font-bold font-headline text-primary">
            Descomplicando Pães Sem Glúten
            </span>
          </a>
          <Button asChild size="sm" className="hidden sm:inline-flex font-headline">
            <a href="https://pay.kirvano.com/ad163a58-1717-4997-b831-b329ad1ec3f5">Garantir Minha Vaga</a>
          </Button>
        </div>
      </header>

      <main className="flex-grow">
        {/* Block 01: Hero Section */}
        <section className="relative py-20 sm:py-32 bg-secondary/50">
          <div className="absolute inset-0">
            <Image
              src="https://placehold.co/1200x800.png"
              alt="Delicious gluten-free bread"
              data-ai-hint="artisan bread"
              layout="fill"
              objectFit="cover"
              className="opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <Badge variant="secondary" className="text-base sm:text-lg font-medium bg-primary/10 text-primary border-primary/20">
                Curso 100% Online e Prático
            </Badge>
            <h2 className="mt-4 text-4xl font-bold tracking-tight font-headline sm:text-5xl lg:text-6xl max-w-4xl mx-auto">
                A Arte de Fazer <span className="text-primary">Pão Sem Glúten</span>
            </h2>
            <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-foreground/80 font-body sm:text-xl">
                Sabor, maciez e praticidade na sua cozinha. Descubra o método passo a passo para criar pães deliciosos, do zero, mesmo que você nunca tenha cozinhado antes.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" className="text-lg font-headline">
                <a href="https://pay.kirvano.com/ad163a58-1717-4997-b831-b329ad1ec3f5">QUERO COMEÇAR AGORA</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Block 03: Pain & Identification */}
        <section className="bg-background py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight font-headline sm:text-4xl">
                  Você já tentou seguir receitas sem glúten da internet e só teve frustração?
                </h2>
                <ul className="mt-8 space-y-4 font-body text-lg">
                  <li className="flex items-start gap-3">
                    <XCircle className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                    <span>Pão solado que mais parece um tijolo?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                    <span>Massa seca, dura e que esfarela só de olhar?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                    <span>Ingredientes caros e difíceis de encontrar?</span>
                  </li>
                </ul>
                <p className="mt-8 font-body text-lg">
                  Você não está sozinho. A maioria das receitas que circulam por aí não funcionam porque ignoram a estrutura real do glúten.
                </p>
                <p className="mt-4 font-body font-bold text-lg text-primary">
                  Mas a boa notícia: você <span className="underline">não precisa ser chef, nutricionista ou investir em equipamentos caros</span> pra ter resultado.
                </p>
              </div>
              <div className="flex justify-center">
                <Image
                  src="https://images.unsplash.com/photo-1532635224-cf024e66d122?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxiYWtlcnxlbnwwfHx8fDE3NTE0NzgyODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Frustrated baker with failed bread"
                  data-ai-hint="failed baking"
                  width={500}
                  height={350}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Block 04: The Promise */}
        <section className="py-16 sm:py-24">
           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight font-headline sm:text-4xl">
                  O que você vai conquistar com o Descomplicando Pães Sem Glúten:
                </h2>
              </div>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div className="flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <Heart className="h-8 w-8" />
                  </div>
                  <h3 className="mt-4 font-headline text-lg font-semibold">Pães Macios e Saborosos</h3>
                  <p className="mt-2 font-body text-foreground/80">Prepare pães fofinhos e deliciosos com farinhas sem glúten.</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <GlutenFreeIcon className="h-8 w-8" />
                  </div>
                  <h3 className="mt-4 font-headline text-lg font-semibold">Receitas Adaptáveis</h3>
                  <p className="mt-2 font-body text-foreground/80">Use ingredientes simples que você encontra em qualquer mercado.</p>
                </div>
                <div className="flex flex-col items-center">
                   <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <ChefHat className="h-8 w-8" />
                  </div>
                  <h3 className="mt-4 font-headline text-lg font-semibold">Técnicas que Funcionam</h3>
                  <p className="mt-2 font-body text-foreground/80">Aprenda segredos que funcionam até em fornos convencionais.</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <Sparkles className="h-8 w-8" />
                  </div>
                  <h3 className="mt-4 font-headline text-lg font-semibold">Liberdade Alimentar</h3>
                  <p className="mt-2 font-body text-foreground/80">Conquiste segurança e autonomia na sua cozinha.</p>
                </div>
              </div>
              <div className="mt-16 text-center">
                <Badge variant="secondary" className="text-lg font-semibold p-3 font-body bg-accent/80">
                  📘 Inclui: Apostila em PDF + Receituário completo + Bônus exclusivos.
                </Badge>
              </div>
           </div>
        </section>

        {/* Block 08: Pricing & Final CTA */}
        <section id="comprar" className="bg-secondary/50 py-20 sm:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
                <Card className="max-w-lg mx-auto p-6 sm:p-8 shadow-2xl bg-card">
                <CardHeader className="p-0 text-center">
                    <Badge variant="secondary" className="text-sm font-medium bg-primary/10 text-primary border-primary/20 w-fit mx-auto">
                    OFERTA ESPECIAL DE LANÇAMENTO
                    </Badge>
                    <CardTitle className="font-headline text-3xl sm:text-4xl mt-2">
                    Acesso Completo e Vitalício
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-6">
                    <div className="text-center my-4">
                        <p className="text-xl font-body text-foreground/70">De <span className="line-through">R$30,97</span> por apenas</p>
                        <p className="text-5xl sm:text-6xl font-bold font-headline text-primary my-2">R$19,90</p>
                        <p className="font-body text-foreground/80">Pagamento único, sem mensalidades</p>
                    </div>

                    <Separator className="my-6 bg-border/50" />

                    <div className="space-y-4 text-left">
                    <h3 className="text-lg font-headline font-semibold text-center mb-4">O que você recebe:</h3>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <p className="font-body text-foreground/90">Acesso <span className="font-bold">vitalício</span> a todas as aulas do curso.</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <p className="font-body text-foreground/90">Apostila completa e <span className="font-bold">receituário em PDF</span> para download.</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <p className="font-body text-foreground/90">Todos os <span className="font-bold">bônus exclusivos</span> já inclusos.</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <p className="font-body text-foreground/90">Acesso a <span className="font-bold">todas as futuras atualizações</span> do curso, sem custo adicional.</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <p className="font-body text-foreground/90">Suporte para tirar dúvidas diretamente na plataforma.</p>
                    </div>
                    </div>
                    
                    <Button asChild size="lg" className="w-full text-lg mt-8 font-headline animate-pulse">
                      <a href="https://pay.kirvano.com/ad163a58-1717-4997-b831-b329ad1ec3f5">QUERO GARANTIR MINHA VAGA</a>
                    </Button>
                    <p className="text-xs text-muted-foreground mt-2">Compra segura e acesso imediato.</p>
                </CardContent>
                </Card>
                
                <div className="mt-16">
                    <h2 className="text-3xl font-bold tracking-tight font-headline sm:text-4xl">
                        Tudo pronto para transformar sua cozinha?
                    </h2>
                    <p className="mt-4 font-body text-lg text-foreground/80 max-w-2xl mx-auto">
                        Clique no botão acima e comece hoje mesmo a fazer pães sem glúten que vão surpreender a todos. Sua jornada para uma vida mais saborosa e saudável começa agora!
                    </p>
                </div>
            </div>
        </section>
        
        {/* Block 02: Social Proof */}
        <section id="depoimentos" className="py-16 sm:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight font-headline sm:text-4xl">
                Já são mais de 17.000 alunos que mudaram sua alimentação!
              </h2>
              <p className="mt-4 text-lg text-foreground/70 font-body">
                Veja o que eles estão dizendo sobre o curso.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              <Card className="transform hover:scale-105 transition-transform duration-300">
                <CardContent className="pt-6 relative">
                  <Quote className="absolute top-6 right-6 h-12 w-12 text-primary/10" />
                  <div className="flex items-center mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxXb21hbnxlbnwwfHx8fDE3NTE0Nzk0NTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Juliana R."
                      data-ai-hint="happy person"
                      width={64}
                      height={64}
                      className="rounded-full"
                    />
                    <div className="ml-4">
                      <p className="font-headline text-xl font-semibold">Juliana R.</p>
                      <div className="flex mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="italic text-foreground/80 font-body text-left">“Finalmente fiz um pão que minha filha amou! A textura ficou incrível e ela nem percebeu que era sem glúten. Esse curso salvou nossos cafés da manhã.”</p>
                </CardContent>
              </Card>
              <Card className="transform hover:scale-105 transition-transform duration-300">
                <CardContent className="pt-6 relative">
                  <Quote className="absolute top-6 right-6 h-12 w-12 text-primary/10" />
                  <div className="flex items-center mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1628619487925-e9b8fc4c6b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMnx8WW91bmclMjBNZW58ZW58MHx8fHwxNzUxNDc5NjM0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Fernando S."
                      data-ai-hint="happy person"
                      width={64}
                      height={64}
                      className="rounded-full"
                    />
                    <div className="ml-4">
                      <p className="font-headline text-xl font-semibold">Fernando S.</p>
                      <div className="flex mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="italic text-foreground/80 font-body text-left">“Sou celíaco há anos e sempre sofri com pães caros e ruins. As receitas do curso são fáceis e o resultado é impressionante. Hoje faço meus próprios pães toda semana.”</p>
                </CardContent>
              </Card>
              <Card className="transform hover:scale-105 transition-transform duration-300">
                <CardContent className="pt-6 relative">
                  <Quote className="absolute top-6 right-6 h-12 w-12 text-primary/10" />
                  <div className="flex items-center mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxZb3VuZyUyMFdvbWFufGVufDB8fHx8MTc1MTQ3OTc2OXww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Ana M."
                      data-ai-hint="happy person"
                      width={64}
                      height={64}
                      className="rounded-full"
                    />
                    <div className="ml-4">
                      <p className="font-headline text-xl font-semibold">Ana M.</p>
                      <div className="flex mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="italic text-foreground/80 font-body text-left">“O curso é muito didático! Além de economizar horrores, descobri um novo hobby. A qualidade do que a gente come não tem preço. Recomendo demais!”</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Block 05: Course Content */}
        <section id="curso" className="bg-secondary/50 py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight font-headline sm:text-4xl">
                Conteúdo do Curso
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="font-headline text-2xl font-bold mb-4">Módulos do Curso:</h3>
                 <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="font-body text-lg">1. Fundamentos das Farinhas Sem Glúten</AccordionTrigger>
                    <AccordionContent className="font-body">Aprenda a base para nunca mais errar, entendendo como cada farinha funciona.</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="font-body text-lg">2. Técnicas de Preparação e Fermentação</AccordionTrigger>
                    <AccordionContent className="font-body">Domine as técnicas de mistura, sova e fermentação para pães perfeitos.</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="font-body text-lg">3. Receitas Base e Variações</AccordionTrigger>
                    <AccordionContent className="font-body">Do pãozinho de cada dia ao pão de forma, com muitas variações criativas.</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="font-body text-lg">4. Armazenamento e Conservação</AccordionTrigger>
                    <AccordionContent className="font-body">Dicas para manter seus pães frescos e saborosos por mais tempo.</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger className="font-body text-lg">5. Bônus: Pães Funcionais, Doces e Biscoitos</AccordionTrigger>
                    <AccordionContent className="font-body">Receitas extras para enriquecer ainda mais sua alimentação.</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div>
                <h3 className="font-headline text-2xl font-bold mb-4">🎁 Bônus Extra:</h3>
                <Card className="bg-accent/50 border-accent-foreground/20">
                    <CardContent className="pt-6">
                        <ul className="space-y-4 font-body text-lg">
                            <li className="flex items-start gap-3">
                                <Gift className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                <span>Guia prático de substituições e combinações de farinhas.</span>
                            </li>
                             <li className="flex items-start gap-3">
                                <Gift className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                <span>Lista de compras e fornecedores confiáveis.</span>
                            </li>
                        </ul>
                    </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Block 06: For Whom */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                 <Image
                  src="https://images.unsplash.com/photo-1612884610549-ce221d92514a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxiYWtlcnxlbnwwfHx8fDE3NTE0NzgyODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Happy person baking"
                  data-ai-hint="happy baker"
                  width={400}
                  height={400}
                  className="rounded-lg shadow-xl object-cover"
                />
              </div>
              <div>
                 <h2 className="text-3xl font-bold tracking-tight font-headline sm:text-4xl">
                    Esse curso é pra você que:
                  </h2>
                  <ul className="mt-8 space-y-4 font-body text-lg">
                    <li className="flex items-start gap-3">
                      <UserCheck className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                      <span>Tem intolerância ao glúten ou cuida de alguém que tem.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <UserCheck className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                      <span>Busca uma alimentação mais leve, saudável e consciente.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <UserCheck className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                      <span>Já tentou outras receitas sem sucesso e quer um método que realmente funciona.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <UserCheck className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                      <span>Quer ter a liberdade de comer um pão quentinho sem abrir mão da saúde e do sabor.</span>
                    </li>
                  </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Block 07: Guarantee */}
        <section id="garantia" className="bg-secondary/50 py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <ShieldCheck className="h-16 w-16 text-primary mx-auto" />
              <h2 className="mt-4 text-3xl font-bold tracking-tight font-headline sm:text-4xl">
                Garantia de 7 Dias Incondicional
              </h2>
              <p className="mt-6 font-body text-lg">
                Você tem 7 dias para testar o curso. Se por qualquer motivo não gostar, basta enviar um e-mail e nós devolvemos 100% do valor investido. Sem burocracia, sem perguntas. O risco é todo nosso!
              </p>
              <p className="mt-6 font-body text-sm text-foreground/70">
                💳 Pagamento 100% seguro via Kirvano.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-background border-t border-border/50">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-4">
                {/* Column 1: Brand & Social */}
                <div className="flex flex-col items-center sm:items-start">
                    <a href="#" className="flex items-center gap-2 mb-4" aria-label="Página Inicial do Gluten-Free Bread Bliss">
                        <Wheat className="h-8 w-8 text-primary" />
                        <span className="text-xl font-bold font-headline text-primary">
                        Descomplicando Pães Sem Glúten
                        </span>
                    </a>
                    <p className="text-foreground/80 font-body max-w-xs">
                        Receitas deliciosas e práticas para você dominar a arte da panificação sem glúten.
                    </p>
                    <div className="mt-6 flex space-x-4">
                        <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                            <span className="sr-only">Instagram</span>
                            <Instagram className="h-6 w-6" />
                        </a>
                        <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                            <span className="sr-only">Facebook</span>
                            <Facebook className="h-6 w-6" />
                        </a>
                        <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                            <span className="sr-only">Youtube</span>
                            <Youtube className="h-6 w-6" />
                        </a>
                    </div>
                </div>

                {/* Column 2: Navigation */}
                <div className="flex flex-col items-center sm:items-start">
                    <h3 className="font-headline font-semibold text-foreground">Navegação</h3>
                    <ul className="mt-4 space-y-2 font-body">
                        <li><a href="#" className="text-foreground/80 hover:text-primary transition-colors">Início</a></li>
                        <li><a href="#curso" className="text-foreground/80 hover:text-primary transition-colors">O Curso</a></li>
                        <li><a href="#depoimentos" className="text-foreground/80 hover:text-primary transition-colors">Depoimentos</a></li>
                        <li><a href="https://pay.kirvano.com/ad163a58-1717-4997-b831-b329ad1ec3f5" className="text-foreground/80 hover:text-primary transition-colors">Comprar Agora</a></li>
                    </ul>
                </div>

                {/* Column 3: Legal */}
                <div className="flex flex-col items-center sm:items-start">
                    <h3 className="font-headline font-semibold text-foreground">Legal</h3>
                    <ul className="mt-4 space-y-2 font-body">
                        <li><a href="#" className="text-foreground/80 hover:text-primary transition-colors">Política de Privacidade</a></li>
                        <li><a href="#" className="text-foreground/80 hover:text-primary transition-colors">Termos de Serviço</a></li>
                        <li><a href="#garantia" className="text-foreground/80 hover:text-primary transition-colors">Nossa Garantia</a></li>
                    </ul>
                </div>
                
                {/* Column 4: Contact */}
                <div className="flex flex-col items-center sm:items-start">
                    <h3 className="font-headline font-semibold text-foreground">Fale Conosco</h3>
                    <p className="mt-4 text-foreground/80 font-body">Precisa de ajuda? Envie um e-mail para:</p>
                    <a href="mailto:contato@glutenfreebliss.com" className="font-body text-primary hover:underline">contato@glutenfreebliss.com</a>
                </div>
            </div>

            <Separator className="my-8 bg-border/50" />

            <div className="flex flex-col-reverse items-center gap-4 text-center sm:flex-row sm:justify-between">
                <p className="text-sm text-foreground/60 font-body">
                    &copy; {new Date().getFullYear()} Descomplicando Pães Sem Glúten. Todos os direitos reservados.
                </p>
                <div className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-green-600"/>
                    <p className="text-sm text-foreground/60 font-body">Pagamento 100% Seguro</p>
                </div>
            </div>

            <div className="mt-8 border-t border-border/50 pt-8 text-center text-xs text-foreground/50 font-body">
                <p>Descomplicando Pães Sem Glúten | CNPJ: 50.195.991/0001-83 | Todos os direitos reservados.</p>
                <p className="mt-2">Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site. Fazemos todos os esforços para indicar claramente e mostrar todas as provas do produto e usamos resultados reais. Não vendemos o seu e-mail ou qualquer informação para terceiros. Jamais fazemos qualquer tipo de spam. Se você tiver alguma dúvida, sinta-se à vontade para usar o link de contato e falar conosco em horário comercial de Segunda a Sextas das 09h00 às 18h00. Lemos e respondemos todas as mensagens por ordem de chegada.</p>
            </div>
        </div>
      </footer>
      {popup && (
        <SalesPopup
          key={popup.key}
          name={popup.name}
          location={popup.location}
          onClose={() => setPopup(null)}
        />
      )}
    </div>
  );
}
