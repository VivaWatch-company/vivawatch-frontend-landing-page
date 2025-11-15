"use client";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { RegisterInput } from "../(components)/serializers/register-schema";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";


export default function SubscriptionPage() {
  const { planId } = useParams();
  const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [plan, setPlan] = useState<any>(null);
  const [loadingPlan, setLoadingPlan] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInput>();

  const onSubmit = async (data: RegisterInput) => {
    try {
      // cria o usuário
      const res = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        console.error("Erro ao criar usuário");
        return;
      }

      router.push(`/assinatura/${planId}/checkout`);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6 bg-muted/30">
      <Card className="w-full max-w-md shadow-md rounded-2xl">
        <CardHeader>
          {loadingPlan ? (
            <>
              <Skeleton className="h-6 w-40" />
              <Skeleton className="h-4 w-60 mt-2" />
            </>
          ) : (
            <>
              <CardTitle className="text-xl font-semibold">
                Criar conta para assinar o plano
              </CardTitle>
              <CardDescription>
                {plan
                  ? `Você está assinando o plano: ${plan.name}`
                  : "Plano não encontrado"}
              </CardDescription>
            </>
          )}
        </CardHeader>

        <CardContent>
          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Label>Nome completo</Label>
              <Input placeholder="Gabriel Godoi" {...register("name")} />
              {errors.name && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <Label>Email</Label>
              <Input
                type="email"
                placeholder="seuemail@gmail.com"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <Label>Senha</Label>
              <Input
                type="password"
                placeholder="••••••••"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <Button type="submit" className="w-full">
              Criar conta e continuar
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
