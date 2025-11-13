import { Zap, Heart, Bell, TrendingUp, LayoutDashboard, Puzzle } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Detecção de quedas",
      description: "Alerta automático em caso de movimentos bruscos.",
    },
    {
      icon: Heart,
      title: "Monitoramento cardíaco",
      description: "Acompanhe batimentos e oxigenação em tempo real.",
    },
    {
      icon: Bell,
      title: "Alertas inteligentes",
      description: "Receba notificações no celular e no dashboard.",
    },
    {
      icon: TrendingUp,
      title: "Histórico de saúde",
      description: "Veja as últimas medições e eventos.",
    },
    {
      icon: LayoutDashboard,
      title: "Dashboard intuitivo",
      description: "Interface clara para cuidadores e familiares.",
    },
    {
      icon: Puzzle,
      title: "Integração IoT",
      description: "Dados coletados direto do dispositivo ESP32.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Tudo que você precisa para cuidar à distância
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Recursos desenvolvidos pensando na segurança e no bem-estar de quem você ama
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl shadow-soft hover:shadow-medium transition-all border border-border hover:scale-105 duration-300"
            >
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
