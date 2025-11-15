"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useAuthModalStore } from "@/app/(public)/stores/AuthModal.store";
import { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

type LoginFormInput = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const { isAuthModalOpen, setIsAuthModalOpen } = useAuthModalStore();
  const [seePassword, setSeePassword] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInput>();

  const onSubmit: SubmitHandler<LoginFormInput> = (data) => console.log(data);

  return (
    <Dialog open={isAuthModalOpen} onOpenChange={setIsAuthModalOpen}>
      <DialogContent className="sm:max-w-[420px]">
        <DialogHeader>
          <DialogTitle>Login</DialogTitle>
        </DialogHeader>

        <form
          className="space-y-6 mt-2 p-4 w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="seuemail@gmail.com"
            required
            {...register("email")}
          />
          {errors.email && (
            <span className="text-sm text-red-500">
              O email não pode estar vazio
            </span>
          )}

          <Label htmlFor="password">Senha</Label>
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
            <span className="text-sm text-red-500">
              É necessário enviar a senha
            </span>
          )}

          <Button type="submit" className="w-full">
            Entrar
          </Button>

          <div className="text-sm">
            <Link href="/assinatura" className="underline hover:text-primary">
              Não tenho assinatura
            </Link>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
