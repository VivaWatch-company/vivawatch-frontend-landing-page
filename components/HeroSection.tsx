import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";
import Image from "next/image";
import { HeroImage } from "@/app/(common)/assets/images";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-hero-gradient pt-20"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Segurança e tranquilidade para quem você ama,{" "}
              <span className="text-primary">24 horas por dia</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              O VivaWatch detecta quedas e monitora sinais vitais em tempo real,
              conectando você ao bem-estar dos seus familiares.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
              >
                Começar agora
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("how-it-works")}
                className="gap-2"
              >
                <PlayCircle className="w-5 h-5" />
                Ver como funciona
              </Button>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <Image
              src={HeroImage}
              alt="Idoso usando VivaWatch com cuidador monitorando"
              className="rounded-2xl shadow-large w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
