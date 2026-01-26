import { Section } from "./Section";
import Image from "next/image";

const communityImages = [
  {
    src: "/community/hackathon.jpg",
    alt: "Hackathon 2025 - Баг бүрдүүлж төсөл хийж байгаа нь",
    label: "Hackathon 2025",
    aspectRatio: "aspect-square",
  },
  {
    src: "/community/workshop.jpg",
    alt: "Workshop - React сургалт",
    label: "Workshop",
    aspectRatio: "aspect-[4/5]",
  },
  {
    src: "/community/awards.jpg",
    alt: "Шагнал гардуулалт - Хөгжүүлэгчдийн уралдаан",
    label: "Шагнал",
    aspectRatio: "aspect-square",
  },
  {
    src: "/community/team.jpg",
    alt: "Team Building - Нийгэмлэгийн арга хэмжээ",
    label: "Team Building",
    aspectRatio: "aspect-[4/5]",
  },
  {
    src: "/community/project.jpg",
    alt: "Төсөл хамгаалалт",
    label: "Төсөл хамгаалалт",
    aspectRatio: "aspect-square",
  },
  {
    src: "/community/techtalk.jpg",
    alt: "Tech Talk - Мэргэжилтний илтгэл",
    label: "Tech Talk",
    aspectRatio: "aspect-square",
  },
  {
    src: "/community/celebration.jpg",
    alt: "Celebration - Жилийн эцсийн баяр",
    label: "Celebration",
    aspectRatio: "aspect-[4/5]",
  },
  {
    src: "/community/demo.jpg",
    alt: "Demo Day - Төслүүдээ танилцуулж байна",
    label: "Demo Day",
    aspectRatio: "aspect-square",
  },
];

export function Community() {
  return (
    <Section id="community">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">Манай нийгэмлэг</h2>
        <p className="text-xl text-muted max-w-2xl mx-auto">
          Сар бүр workshop, hackathon, tech talk зохион байгуулж, туршлага
          солилцож, хамтдаа бүтээж байна
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {communityImages.map((item, index) => (
          <div
            key={index}
            className={`frame ${item.aspectRatio} relative overflow-hidden hover:scale-[1.02] transition-all duration-300 cursor-pointer group`}
          >
            <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white font-medium z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              {item.label}
            </div>

            {/* Placeholder until images are added */}
            <div className="absolute inset-0 surface flex items-center justify-center text-6xl">
              {index === 0 && "💻"}
              {index === 1 && "🎓"}
              {index === 2 && "🏆"}
              {index === 3 && "👥"}
              {index === 4 && "🚀"}
              {index === 5 && "📸"}
              {index === 6 && "🎉"}
              {index === 7 && "🌟"}
            </div>

            {/* Uncomment when images are added - Delete the emoji div above
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            */}
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm text-muted italic">
          💡 Бодит зураг нэмэхийн тулд: /public/community/ дотор зургуудаа
          хийгээд
          <br />
          Community.tsx дээрх Image component-ийг идэвхжүүлж, emoji div-ийг
          устгана уу
        </p>
      </div>
    </Section>
  );
}
