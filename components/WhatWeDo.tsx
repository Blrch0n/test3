import { Card } from "./Card";
import { Section } from "./Section";
import { BookOpen, Palette, Cog, Users, Trophy, Sprout } from "lucide-react";

const missions = [
  {
    icon: BookOpen,
    title: "Суралцах",
    description:
      "Web, mobile, AI зэрэг орчин үеийн технологийг workshop, hackathon-оор дамжуулан эзэмшинэ",
  },
  {
    icon: Palette,
    title: "Дизайн",
    description:
      "Figma, UI/UX дизайнаар бодит төсөлд ажиллаж портфолио бүтээнэ",
  },
  {
    icon: Cog,
    title: "Инженерчлэл",
    description:
      "Систем зохион бүтээж, өөрийн болон баг дүүргийн төслийг хөгжүүлнэ",
  },
  {
    icon: Users,
    title: "Хамтын ажиллагаа",
    description:
      "Агуу их сургуулийн оюутнууд, IT компаний мэргэжилтнүүдтэй хамтран ажиллана",
  },
  {
    icon: Trophy,
    title: "Уралдаан",
    description:
      "Монгол болон олон улсын hackathon, олимпиадад оролцож шагнал хүртдэг",
  },
  {
    icon: Sprout,
    title: "Хөгжил",
    description:
      "Ур чадвар, мэдлэг, туршлага хуримтлуулж, CV/портфолиогоо бэхжүүлнэ",
  },
];

export function WhatWeDo() {
  return (
    <Section id="about" className="surface">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">
          Бид юу хийдэг вэ?
        </h2>
        <p className="text-xl text-muted max-w-2xl mx-auto">
          Долоо хоног бүр уулзаж, сургалт зохион байгуулж, төсөл хэрэгжүүлж,
          олон улсын тэмцээнд амжилттай оролцдог
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {missions.map((mission, index) => {
          const Icon = mission.icon;
          return (
            <Card key={index} hover>
              <div className="w-12 h-12 accent-bg/10 rounded-xl flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-(--accent)" />
              </div>
              <h3 className="text-xl font-bold mb-2">{mission.title}</h3>
              <p className="text-muted">{mission.description}</p>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
