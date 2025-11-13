import { Settings, Brain, Heart } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Settings,
      title: "IoT",
      description: "Dispositivo conectado que coleta dados em tempo real",
    },
    {
      icon: Brain,
      title: "Inteligência",
      description: "Algoritmos que detectam padrões e situações de risco",
    },
    {
      icon: Heart,
      title: "Segurança",
      description: "Alertas instantâneos para cuidadores e familiares",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Tecnologia a serviço da vida
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            O VivaWatch é um sistema completo que une um relógio inteligente IoT
            com uma plataforma web avançada. Monitore sinais vitais, detecte
            quedas automaticamente e receba alertas em tempo real, tudo em um só
            lugar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl shadow-medium hover:shadow-large transition-shadow border border-border"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
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

export default AboutSection;
