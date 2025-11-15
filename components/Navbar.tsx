"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Watch } from "lucide-react";
import { useAuthModalStore } from "@/app/(public)/stores/AuthModal.store";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAuthModalOpen, setIsAuthModalOpen } = useAuthModalStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenModal = () => {
    setIsAuthModalOpen(!isAuthModalOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-medium"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 text-xl font-bold text-foreground hover:text-primary transition-colors"
          >
            <Watch className="w-6 h-6 text-primary" />
            VivaWatch
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Funcionalidades
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Planos
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Contato
            </button>
          </div>

          <div className="flex items-center gap-3">
            <Button
              size="sm"
              className="bg-primary hover:bg-primary/90"
              onClick={handleOpenModal}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
