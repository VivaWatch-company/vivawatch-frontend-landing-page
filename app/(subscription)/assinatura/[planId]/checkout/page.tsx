"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Ícones opcionais
import { CreditCard, QrCode } from "lucide-react";
import Image from "next/image";

export default function CheckoutPage() {
  const { planId } = useParams();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [plan, setPlan] = useState<any>(null);

  const [paymentMethod, setPaymentMethod] = useState("pix");

  // Buscar o plano
  useEffect(() => {
    async function fetchPlan() {
      const res = await fetch(`/api/plans/${planId}`);
      const data = await res.json();
      setPlan(data);
    }

    fetchPlan();
  }, [planId]);

  return (
    <div className="min-h-screen w-full flex items-start justify-center bg-gradient-to-br from-purple-100 to-purple-200 p-10">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Lado esquerdo: Informações do plano */}
        <div>
          <h1 className="text-3xl font-bold">
            Finalize sua assinatura
          </h1>
          <p className="text-muted-foreground mt-1">
            Você está quase garantindo acesso ao seu plano.
          </p>

          <Card className="p-4 mt-6 flex items-center gap-4 shadow-md bg-white/70 backdrop-blur">
            {/* <Image
              src="https://via.placeholder.com/80"
              className="w-20 h-20 rounded-xl object-cover"
              alt="Plano"
            /> */}
            <div>
              <h2 className="font-semibold text-lg">
                {plan?.name || "Plano selecionado"}
              </h2>
              <p className="text-purple-600 font-bold text-xl">
                {plan?.price ? `R$ ${plan.price}` : "R$ 0,00"}
              </p>
            </div>
          </Card>
        </div>

        {/* Lado direito: Pagamento */}
        <Card className="p-6 shadow-md bg-white/80 backdrop-blur-md">
          <h2 className="font-semibold text-xl mb-4">Forma de Pagamento</h2>

          <RadioGroup
            defaultValue="pix"
            onValueChange={setPaymentMethod}
            className="space-y-4"
          >
            {/* PIX */}
            <div className="border rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="pix" id="pix" />
                  <Label htmlFor="pix" className="cursor-pointer font-semibold flex items-center gap-2">
                    <QrCode className="h-5 w-5" /> Pagar com PIX
                  </Label>
                </div>
                <span className="text-purple-600 font-bold">
                  {plan?.price ? `R$ ${plan.price}` : "R$ 0,00"}
                </span>
              </div>

              <p className="text-sm text-muted-foreground ml-7">
                Você receberá o código PIX para confirmar o pagamento.
              </p>
            </div>

            {/* Cartão */}
            <div className="border rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="card" id="card" />
                  <Label htmlFor="card" className="cursor-pointer font-semibold flex items-center gap-2">
                    <CreditCard className="h-5 w-5" /> Cartão de Crédito
                  </Label>
                </div>
                <span className="text-purple-600 font-bold">
                  {plan?.price ? `R$ ${plan.price}` : "R$ 0,00"}
                </span>
              </div>

              {/* Form do cartão */}
              {paymentMethod === "card" && (
                <div className="space-y-4 mt-3">
                  <div>
                    <Label>Número do cartão</Label>
                    <Input placeholder="0000 0000 0000 0000" />
                  </div>

                  <div>
                    <Label>Nome do titular</Label>
                    <Input placeholder="Nome impresso no cartão" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Vencimento</Label>
                      <Input placeholder="MM/AA" />
                    </div>
                    <div>
                      <Label>CVV</Label>
                      <Input placeholder="123" />
                    </div>
                  </div>

                  <div>
                    <Label>CPF</Label>
                    <Input placeholder="000.000.000-00" />
                  </div>
                </div>
              )}
            </div>
          </RadioGroup>

          <Button
            className="w-full mt-6 py-6 text-lg font-semibold bg-gradient-to-r from-purple-500 to-pink-500"
          >
            Confirmar Assinatura
          </Button>

          <p className="text-center text-xs mt-3 text-muted-foreground">
            Ao continuar, você concorda com nossos termos de uso.
          </p>
        </Card>
      </div>
    </div>
  );
}
