import { PlanIntervalEnum } from "../enums/plan-interval.enum";

export const PlanIntervalMapper = {
  [PlanIntervalEnum.DAILY]: "Diário",
  [PlanIntervalEnum.MONTHLY]: "Mensal",
  [PlanIntervalEnum.WEEKLY]: "Semanal",
  [PlanIntervalEnum.YEARLY]: "Anual",
};
