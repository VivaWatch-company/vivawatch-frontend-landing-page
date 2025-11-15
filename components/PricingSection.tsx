import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Essencial",
      price: "R$ 8,98",
      period: "Beta",
      planBenefits: [
        "Dashboard básico",
        "Notificações básicas",
        "1 dispositivo",
        "Histórico de 7 dias",
      ],
      highlighted: false,
    },
    {
      name: "Avançado",
      price: "R$ 28,79",
      period: "por mês",
      planBenefits: [
        "Dashboard completo",
        "Dados em tempo real",
        "Até 3 dispositivos",
        "Histórico ilimitado",
        "Suporte prioritário",
      ],
      highlighted: true,
    },
    {
      name: "Profissional",
      price: "R$ 58,97",
      period: "por mês",
      planBenefits: [
        "Multi-usuário",
        "Dispositivos ilimitados",
        "Relatórios avançados",
        "Alertas por WhatsApp",
        "API de integração",
        "Suporte 24/7",
      ],
      highlighted: false,
    },
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
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-card rounded-2xl p-8 shadow-medium hover:shadow-large transition-all border-2 ${
                plan.highlighted
                  ? "border-primary scale-105"
                  : "border-border"
              }`}
            >
              {plan.highlighted && (
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
                <span className="text-muted-foreground ml-2">/{plan.period}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.planBenefits.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full cursor-pointer ${
                  plan.highlighted
                    ? "bg-primary hover:bg-primary/95"
                    : "bg-secondary hover:bg-secondary/90 text-foreground"
                }`}
                size="lg"
              >
                Começar agora
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;