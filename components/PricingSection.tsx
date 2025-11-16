import { PlanIntervalMapper } from "@/commons/mappers/plan-interval.mapper";
import { TPlan } from "@/commons/types/TPlan";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

type PricingSectionProps = {
  plans: TPlan[];
};

const PricingSection = (props: PricingSectionProps) => {
  const { plans } = props;

  const main = plans.find((p) => p.isMain);
  const others = plans.filter((p) => !p.isMain);

  if (!main) {
    return null;
  }

  const orderedPlans: TPlan[] = [
    ...others.slice(0, Math.floor(others.length / 2)),
    main,
    ...others.slice(Math.floor(others.length / 2)),
  ];

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Escolha o plano ideal para você
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comece gratuitamente e escale conforme suas necessidades
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {orderedPlans.map((plan, index) => (
            <div
              key={index}
              className={`bg-card rounded-2xl p-8 shadow-medium hover:shadow-large transition-all border-2 ${
                plan.isMain ? "border-primary scale-105" : "border-border"
              }`}
            >
              {plan.isMain && (
                <div className="bg-primary text-primary-foreground text-sm font-bold py-1 px-4 rounded-full inline-block mb-4">
                  Mais Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {plan.name}
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">
                  {plan.price}
                </span>
                <span className="text-muted-foreground ml-2">
                  /{PlanIntervalMapper[plan.period]}
                </span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.planBenefits.map((benefit) => (
                  <li key={benefit.id} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      {benefit.title}
                    </span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full cursor-pointer ${
                  plan.isMain
                    ? "bg-primary hover:bg-primary/95"
                    : "bg-secondary hover:bg-secondary/90 text-foreground"
                }`}
                size="lg"
              >
                <Link href={`/assinatura/${plan.id}`}>Começar agora</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
