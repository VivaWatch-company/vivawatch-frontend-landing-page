import { Watch, Cloud, UserCheck } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Watch,
      title: "O idoso usa o VivaWatch",
      description: "O relógio coleta dados vitais e movimentos.",
    },
    {
      icon: Cloud,
      title: "O dispositivo envia as informações",
      description: "Tudo vai para a nuvem de forma segura.",
    },
    {
      icon: UserCheck,
      title: "O cuidador monitora em tempo real",
      description: "Alertas e medições aparecem no dashboard.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-hero-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Em 3 passos simples
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Um sistema pensado para ser fácil de usar e eficiente
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center gap-4 flex-1">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="bg-primary w-20 h-20 rounded-full flex items-center justify-center shadow-large">
                  <step.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm max-w-xs">
                    {step.description}
                  </p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block w-16 h-0.5 bg-primary/30 shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
