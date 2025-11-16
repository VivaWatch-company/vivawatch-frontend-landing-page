"use client";

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
import { useQuery } from "@tanstack/react-query";
import { TPlan } from "@/commons/types/TPlan";
import { PlanService } from "@/services/plan.service";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import { UserService } from "@/services/user.service";

export default function SubscriptionPage() {
  const { planId } = useParams<{ planId: string }>();
  const router = useRouter();
  const [seePassword, setSeePassword] = useState<boolean>(false);

  const { isPending, error, data } = useQuery<TPlan>({
    queryKey: ["fetPlan"],
    queryFn: async () => {
      const planService = new PlanService();
      return await planService.getOne(planId);
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInput>();

  const onSubmit = async (data: RegisterInput) => {
    try {
      const userService = new UserService();
      // cria o usuário
      const res = await userService.create(data);

      if (!res.success) {
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
          {isPending ? (
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
                {data
                  ? `Você está assinando o plano: ${data.name}`
                  : "Plano não encontrado"}
              </CardDescription>
            </>
          )}
        </CardHeader>

        <CardContent>
          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Label>Nome completo</Label>
              <Input placeholder="seu nome" {...register("name")} />
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
              <InputGroup id="password">
                <InputGroupInput
                  placeholder="••••••••"
                  type={seePassword ? "text" : "password"}
                  {...register("password", { required: true })}
                  required
                />
                <InputGroupAddon align="inline-end">
                  {!seePassword ? (
                    <Eye onClick={() => setSeePassword(true)} />
                  ) : (
                    <EyeClosed onClick={() => setSeePassword(false)} />
                  )}
                </InputGroupAddon>
              </InputGroup>
              {errors.password && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div>
              <Label>Cpf</Label>
              <Input
                placeholder="XXX.XXX.XXX-XX"
                {...register("document", { required: true })}
                required
              />
              {errors.document && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.document.message}
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
