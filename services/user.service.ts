import { RegisterInput } from "@/app/(subscription)/assinatura/(components)/serializers/register-schema";
import { instance } from "@/commons/axios/axios.boot";
import { TUser } from "@/commons/types/TUser";

export class UserService {
  private readonly defaultRoute: string = "/user-client";
  private readonly axios = instance;

  async create(data: RegisterInput): Promise<{
    success: boolean;
    data?: TUser;
    error?: string;
  }> {
    try {
      const response = await this.axios.post<TUser>(this.defaultRoute, data);

      if (response.status !== 201 && response.status !== 200) {
        return {
          success: false,
          error: "Algo inesperado aconteceu ao criar o usuário.",
        };
      }

      return {
        success: true,
        data: response.data,
      };
    } catch (err: any) {
      const message =
        err?.response?.data?.message ||
        err?.message ||
        "Erro desconhecido ao criar usuário.";

      return {
        success: false,
        error: message,
      };
    }
  }
}
