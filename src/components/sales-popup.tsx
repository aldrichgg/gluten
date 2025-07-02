"use client";

import { X, ShoppingCart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface SalesPopupProps {
  name: string;
  location: string;
  onClose: () => void;
}

export function SalesPopup({ name, location, onClose }: SalesPopupProps) {
  return (
    <div className="fixed bottom-4 left-4 z-50 animate-fade-in w-full max-w-sm">
      <Card className="shadow-2xl border-primary/20 bg-card">
        <button onClick={onClose} className="absolute top-2 right-2 text-muted-foreground hover:text-foreground z-10">
          <span className="sr-only">Fechar</span>
          <X className="h-4 w-4" />
        </button>
        <CardContent className="p-4 flex items-start gap-4">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
             <ShoppingCart className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="font-bold text-sm text-foreground pr-4">{name} de {location}</p>
            <p className="text-sm text-muted-foreground">Acabou de garantir sua vaga no curso!</p>
            <p className="text-xs text-primary font-semibold mt-1">Vagas com desconto se esgotando!</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
