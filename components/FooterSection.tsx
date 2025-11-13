import { Watch, Mail } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Watch className="w-6 h-6" />
              <span className="text-xl font-bold">VivaWatch</span>
            </div>
            <p className="text-background/80 text-sm">
              Monitoramento inteligente de idosos com segurança em tempo real.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-background transition-colors"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("features")}
                  className="hover:text-background transition-colors"
                >
                  Funcionalidades
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="hover:text-background transition-colors"
                >
                  Planos
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Suporte</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Central de Ajuda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Políticas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contato</h3>
            <div className="flex items-center gap-2 text-sm text-background/80">
              <Mail className="w-4 h-4" />
              <a
                href="mailto:contato@vivawatch.com"
                className="hover:text-background transition-colors"
              >
                contato@vivawatch.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/60">
          <p>© {new Date().getFullYear()} VivaWatch. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
