import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { ReviewOne,ReviewTwo,ReviewThree  } from "@/app/(common)/assets/images";

const CustomerReviews = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const reviews = [
    {
      id: 1,
      name: "Maria Silva, 62 anos",
      text: "O Viva Watch me deu paz de espírito. Saber que minha mãe está segura com a detecção de quedas é tudo que eu precisava!",
      image: ReviewOne,
    },
    {
      id: 2,
      name: "João Pereira, 45 anos",
      text: "A facilidade de usar o aplicativo e os alertas rápidos salvaram meu pai de uma situação perigosa. Recomendo!",
      image: ReviewTwo,
    },
    {
      id: 3,
      name: "Ana Costa, 58 anos",
      text: "O suporte foi incrível, e o relógio é confortável. Minha família agora dorme tranquila.",
      image: ReviewThree,
    },
  ];

  return (
    <section className="py-16 bg-[#f0f4f8] text-[#0a0f2d]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#0a0f2d] mb-10" data-aos="fade-up">
          O Que Nossos Usuários Dizem
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5" data-aos="fade-up" data-aos-delay="200">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-5 rounded-lg shadow-lg text-center"
              data-aos="fade-up"
              data-aos-delay={review.id * 200}
            >
              <div className="mb-4">
                <Image
                    src={review.image}
                    alt={review.name}
                    width={48}
                    height={48}
                    className="w-24 h-24 rounded-full object-cover mx-auto"
                />
              </div>
              <div className="text-base">
                <p className="text-gray-700 mb-2 leading-relaxed">
                  "{review.text}"
                </p>
                <p className="font-bold text-gray-700">— {review.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
