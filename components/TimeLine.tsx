import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Timeline = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const events = [
    {
      id: 1,
      date: "INÍCIO",
      description:
        "Identificação do problema das quedas entre idosos e da necessidade de soluções tecnológicas acessíveis.",
    },
    {
      id: 2,
      date: "APRIMORAMENTO",
      description:
        "Integração de sensores como acelerômetro e giroscópio para detectar quedas e enviar alertas imediatos.",
    },
    {
      id: 3,
      date: "CONSOLIDAÇÃO",
      description:
        "Desenvolvimento da plataforma web com dashboard para monitoramento de sinais vitais, localização e alertas.",
    },
    {
      id: 4,
      date: "ATUALMENTE",
      description:
        "Resultados iniciais mostram redução no tempo de resposta a quedas e feedback positivo sobre usabilidade e acessibilidade",
    },
  ];

  return (
    <section className="py-20 bg-gray-100 font-sans">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2" data-aos="fade-up" data-aos-delay="100">
            Nossa História
          </h1>
          <p className="text-sm text-gray-600 leading-relaxed max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="150">
            Aqui contamos a jornada da nossa empresa desde os primeiros passos.
            <br />
            Cada marco representa um esforço coletivo para inovar e crescer.
            <br />
            Venha descobrir como chegamos até aqui!
          </p>
        </div>
        <div className="relative max-w-[600px] mx-auto">
          <div className="absolute w-[2px] bg-gray-800 top-0 bottom-0 left-1/2 transform -translate-x-1/2"></div>
          {events.map((event, index) => (
            <div key={event.id} className="flex items-center mb-5 relative">
              <div className="absolute w-2.5 h-2.5 bg-gray-800 rounded-full left-1/2 transform -translate-x-1/2 z-10"></div>
              <div
                className={`w-[45%] p-2.5 ${index % 2 === 0 ? "ml-[55%]" : "mr-[55%]"}`}>
                <span className="block font-bold text-gray-800" data-aos="fade-up" data-aos-delay={200 + index * 100}>
                  {event.date}
                </span>
                <p className="text-gray-800 mt-1" data-aos="fade-up" data-aos-delay={250 + index * 100}>
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
