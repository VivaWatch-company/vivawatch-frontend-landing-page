import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "O VivaWatch precisa de internet para funcionar?",
      answer:
        "Sim, o VivaWatch precisa de conexão WiFi para enviar os dados para a nuvem. No entanto, o dispositivo armazena informações localmente e sincroniza assim que a conexão for restabelecida.",
    },
    {
      question: "O que acontece quando o relógio detecta uma queda?",
      answer:
        "Ao detectar uma queda, o sistema envia automaticamente um alerta para todos os cuidadores cadastrados através do dashboard e notificações push. O alerta inclui o horário exato do evento e os dados vitais no momento da queda.",
    },
    {
      question: "Posso monitorar mais de um idoso?",
      answer:
        "Sim! Nos planos Avançado e Profissional você pode conectar múltiplos dispositivos e monitorar vários idosos simultaneamente através do mesmo dashboard.",
    },
    {
      question: "O sistema é gratuito?",
      answer:
        "Oferecemos um plano Essencial gratuito durante a fase beta, com recursos básicos. Para funcionalidades avançadas, temos os planos Avançado (R$ 29/mês) e Profissional (R$ 59/mês).",
    },
    {
      question: "O VivaWatch funciona em qualquer celular?",
      answer:
        "Sim! O dashboard web funciona em qualquer navegador moderno, seja no celular, tablet ou computador. Você também pode receber notificações push diretamente no seu celular.",
    },
  ];

  return (
    <section className="py-20 bg-muted mb-6">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre o VivaWatch
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
