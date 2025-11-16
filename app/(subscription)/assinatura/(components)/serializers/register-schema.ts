import z from "zod";
import { cpf } from "cpf-cnpj-validator";

export const registerSchema = z.object({
  name: z.string().min(2, "Informe seu nome completo"),
  email: z.email("Email inválido"),
  password: z.string().min(6, "A senha deve ter ao menos 6 caracteres"),
  document: z.coerce
    .string({ error: "É necessário informar o CPF!" })
    .trim()
    .min(1, { message: "É necessário informar o CPF!" })
    .length(14, "Cpf com quantidade de dígitos inválida")
    .refine((value) => cpf.isValid(value), {
      message: "O CPF deve ser válido (XXX.XXX.XXX-XX)",
    })
    .transform((val) => val.replace(/\D/g, "")),
});

export type RegisterInput = z.infer<typeof registerSchema>;
