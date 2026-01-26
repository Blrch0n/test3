import { Button } from "./Button";
import { Section } from "./Section";
import { Laptop, Rocket } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <Section className="pt-32 lg:pt-40" id="main-content">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left - Content */}
        <div className="space-y-6">
          <div className="inline-block">
            <span className="surface px-4 py-2 rounded-full text-sm font-medium border border-custom">
              🎓 2009 оноос хойш үйл ажиллагаа явуулж байна
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            Технологийн
            <span className="accent block">Хүчирхэг</span>
            Нийгэмлэг
          </h1>

          <p className="text-xl text-muted max-w-xl">
            Sys&CoTech нь бодит төсөл дээр ажиллаж, hackathon-д оролцож,
            мэргэжлийн багш нарын удирдлага дор туршлага хуримтлуулдаг оюутны
            клуб юм.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button variant="primary" className="text-lg px-8 py-4">
              Элсэх
            </Button>
            <Button variant="secondary" className="text-lg px-8 py-4">
              Холбогдох
            </Button>
          </div>

          {/* Mini proof */}
          <div className="flex flex-wrap gap-6 pt-4">
            <div>
              <div className="font-bold text-2xl accent">90+</div>
              <div className="text-sm text-muted">Идэвхтэй гишүүд</div>
            </div>
            <div>
              <div className="font-bold text-2xl accent">15+</div>
              <div className="text-sm text-muted">Жил туршлага</div>
            </div>
            <div>
              <div className="font-bold text-2xl accent">50+</div>
              <div className="text-sm text-muted">Амжилттай төсөл</div>
            </div>
          </div>
        </div>

        {/* Right - Hero Visual */}
        <div className="relative">
          <div className="frame overflow-hidden aspect-square relative group">
            <div className="absolute inset-0 accent-bg opacity-10 group-hover:opacity-20 transition-opacity" />

            {/* Placeholder - Replace with real hero image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4 p-8">
                <div className="w-32 h-32 mx-auto accent-bg/20 rounded-3xl flex items-center justify-center">
                  <Laptop className="w-16 h-16 text-(--accent)" />
                </div>
                <p className="text-sm text-muted italic">
                  💡 Зураг нэмэхийн тулд: /public/hero.jpg хийж,
                  <br />
                  Hero.tsx дээрх Image component идэвхжүүлнэ үү
                </p>
              </div>
            </div>

            {/* Uncomment when image is added
            <Image
              src="/hero.jpg"
              alt="Sys&CoTech community"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            */}
          </div>

          {/* Floating icon badges with subtle float animation */}
          <div className="absolute -top-4 -right-4 frame p-4 motion-safe:animate-[float_3s_ease-in-out_infinite]">
            <Laptop className="w-6 h-6 text-(--accent)" />
          </div>
          <div className="absolute -bottom-4 -left-4 frame p-4 motion-safe:animate-[float_3s_ease-in-out_infinite_1.5s]">
            <Rocket className="w-6 h-6 text-(--accent)" />
          </div>
        </div>
      </div>
    </Section>
  );
}
