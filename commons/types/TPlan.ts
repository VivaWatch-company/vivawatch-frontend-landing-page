import { PlanIntervalEnum } from "../enums/plan-interval.enum";
import { PlanBenefits } from "./TPlanBenefits";

export type TPlan = {
  id: string;
  name: string;
  price: number;
  period: PlanIntervalEnum;
  isMain: boolean;
  isActive: boolean;
  planBenefits: PlanBenefits[];
};
