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
  Gift,
  Heart,
  ShieldCheck,
  Sparkles,
  Star,
  UserCheck,
  XCircle,
} from 'lucide-react';
import { GlutenFreeIcon } from '@/components/icons';
import { AIImprover } from '@/components/ai-improver';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-xl font-bold font-headline text-primary">
            Gluten-Free Bread Bliss
          </h1>
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
            <h2 className="text-4xl font-bold tracking-tight font-headline sm:text-5xl lg:text-6xl">
              Aprenda a Fazer Pães Sem Glúten Deliciosos, Macios e Fáceis
            </h2>
            <h3 className="mt-4 text-5xl font-bold tracking-tight font-headline sm:text-6xl lg:text-7xl text-primary">
              Mesmo Que Você Nunca Tenha Cozinhado Antes!
            </h3>
            <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-foreground/80 font-body">
              Receitas simples, ingredientes acessíveis e zero complicação —
              descubra como transformar sua cozinha com pães que respeitam sua
              saúde e seu paladar.
            </p>
            <div className="mt-10">
              <Button size="lg" className="text-lg">
                QUERO COMEÇAR AGORA
              </Button>
            </div>
          </div>
        </section>

        {/* Block 02: Social Proof */}
        <section className="py-16 sm:py-24">
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
              <Card>
                <CardHeader className="items-center text-center">
                  <Image
                    src="https://placehold.co/100x100.png"
                    alt="Juliana R."
                    data-ai-hint="happy person"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <CardTitle className="font-headline text-xl">Juliana R.</CardTitle>
                </CardHeader>
                <CardContent className="text-center font-body">
                  <p className="italic">“Finalmente fiz um pão que minha filha amou!”</p>
                  <div className="flex justify-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="items-center text-center">
                  <Image
                    src="https://placehold.co/100x100.png"
                    alt="Fernando S."
                    data-ai-hint="happy person"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <CardTitle className="font-headline text-xl">Fernando S.</CardTitle>
                </CardHeader>
                <CardContent className="text-center font-body">
                  <p className="italic">“Sou celíaco e hoje faço meus próprios pães toda semana.”</p>
                  <div className="flex justify-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="items-center text-center">
                  <Image
                    src="https://placehold.co/100x100.png"
                    alt="Ana M."
                    data-ai-hint="happy person"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <CardTitle className="font-headline text-xl">Ana M.</CardTitle>
                </CardHeader>
                <CardContent className="text-center font-body">
                  <p className="italic">“Economizei horrores parando de comprar pão industrializado sem glúten.”</p>
                   <div className="flex justify-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Block 03: Pain & Identification */}
        <section className="bg-secondary/50 py-16 sm:py-24">
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
                  src="https://placehold.co/500x350.png"
                  alt="Frustrated baker"
                  data-ai-hint="kitchen mess"
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

        {/* Block 05: Course Content */}
        <section className="bg-secondary/50 py-16 sm:py-24">
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
                  src="https://placehold.co/500x500.png"
                  alt="Happy person baking"
                  data-ai-hint="baking ingredients"
                  width={400}
                  height={400}
                  className="rounded-full shadow-xl"
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
        <section className="bg-secondary/50 py-16 sm:py-24">
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
                💳 Pagamento 100% seguro via For4Payments.
              </p>
            </div>
          </div>
        </section>

        {/* Block 08 & 09: Pricing & Final CTA */}
        <section className="relative py-20 sm:py-32">
          <div className="absolute inset-0">
             <Image
              src="https://placehold.co/1200x800.png"
              alt="Loaf of bread"
              data-ai-hint="loaf bread"
              layout="fill"
              objectFit="cover"
              className="opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <Card className="max-w-md mx-auto p-8 shadow-2xl">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Valor Promocional</CardTitle>
                <p className="font-body text-foreground/70">Acesso vitalício + Todas as atualizações futuras incluídas</p>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-body">De <span className="line-through">R$14,97</span> por apenas</p>
                <p className="text-7xl font-bold font-headline text-primary my-2">R$9,90</p>
                 <Button size="lg" className="w-full text-lg mt-6">
                   QUERO APRENDER AGORA
                  </Button>
              </CardContent>
            </Card>
            
            <div className="mt-16">
              <h2 className="text-3xl font-bold tracking-tight font-headline sm:text-4xl">
                Transforme sua alimentação e descubra o prazer de fazer pães incríveis!
              </h2>
              <p className="mt-4 font-body text-lg text-foreground/80">
                🚀 Comece agora sua jornada!
              </p>
            </div>
          </div>
        </section>

        {/* AI Improver Section */}
        <section className="py-16 sm:py-24 bg-secondary/50">
           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
             <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
                <AccordionItem value="ai-improver">
                  <AccordionTrigger className="font-headline text-2xl text-center block hover:no-underline">
                    <div className="flex items-center justify-center gap-2">
                       <Sparkles className="text-primary" />
                      <span>Área do Administrador: Otimizar Página com IA</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <AIImprover />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
           </div>
        </section>

      </main>
      <footer className="bg-background border-t">
        <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-sm text-foreground/60 font-body">
          <p>&copy; {new Date().getFullYear()} Gluten-Free Bread Bliss. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
