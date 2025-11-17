import { instance } from "@/commons/axios/axios.boot";
import { TPlan } from "@/commons/types/TPlan";

export class PlanService {
  private readonly defaultRoute: string = "/plan-client";
  private readonly axios = instance;
  async getPlans(): Promise<TPlan[]> {
    try {
      const response = await this.axios.get<TPlan[]>(this.defaultRoute);
      if (response.status !== 200) {
        // TODO: error dialog state
        throw new Error();
      }
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getOne(id: string): Promise<TPlan> {
    try {
      const response = await this.axios.get<TPlan>(`${this.defaultRoute}/${id}`);
      if (response.status !== 200) {
        // TODO:  error dialog state
        throw new Error();
      }
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
