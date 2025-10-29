"use client";

import { ImageCarousel } from "@/components/ImageCarousel";
import { Card } from "@/components/ui/card";
import { gameplayImages } from "@/hard-data";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Building, Hammer } from "lucide-react";

function HeroSection() {
  const [fullscreenModal, setFullscreenModal] = useState<{
    isOpen: boolean;
    images: typeof gameplayImages;
    currentIndex: number;
  }>({
    isOpen: false,
    images: [],
    currentIndex: 0,
  });

  const openFullscreen = (images: typeof gameplayImages, index: number) => {
    setFullscreenModal({
      isOpen: true,
      images,
      currentIndex: index,
    });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary/20 via-background to-primary/10">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-16 h-16 bg-primary rounded-lg pixel-float"></div>
        <div className="absolute top-40 right-32 w-12 h-12 bg-accent rounded-lg pixel-pulse"></div>
        <div
          className="absolute bottom-32 left-40 w-20 h-20 bg-secondary rounded-lg pixel-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 right-20 w-14 h-14 bg-primary rounded-lg pixel-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10 w-9/12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Logo and main content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="flex justify-center lg:justify-start mb-8">
              <Image
                src="/assets/logo.png"
                alt="NeoCivita Logo"
                width={300}
                height={120}
                className="pixel-pulse"
                priority
              />
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-balance leading-tight">
                Tu ciudad, tu futuro:{" "}
                <span className="text-primary">
                  ¿podrás mantener el equilibrio?
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground text-pretty max-w-2xl">
                Construí una ciudad sustentable y descubrí el impacto de tus
                decisiones.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-lg px-8 py-6 pixel-pulse">
                <Hammer className={"w-8 h-8"} /> En desarrollo
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 bg-transparent"
              >
                <a
                  href="https://www.instagram.com/neo.civita/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📖 Conocer Más
                </a>{" "}
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span>Educativo</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-secondary rounded-full"></div>
                <span>Divertido</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span>Sustentable</span>
              </div>
            </div>
          </div>

          {/* Right side - Game preview */}
          <div className="relative w-full max-w-sm mx-auto">
            <Card className="p-4 bg-gradient-to-br from-card to-muted/50 border-2 border-primary/20 pixel-float">
              {/* Contenedor cuadrado */}
              <div className="aspect-square rounded-lg flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-secondary/30 to-primary/30">
                {/* Fondo del juego */}
                <div className="absolute inset-0 bg-[url('/pixel-art-city-building-game-screenshot-with-green.jpg')] bg-cover bg-center opacity-80"></div>

                {/* Imagen encima del fondo */}
                <div className="relative z-10 flex items-end justify-center w-full h-full">
                  <Image
                    src="/assets/wireframes/vita-desafio.png"
                    alt="Imagen del menú de inicio"
                    width={500}
                    height={500}
                    className="object-contain object-bottom w-full h-full"
                  />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/*<div className="container mx-auto px-4 py-2 w-10/12">*/}
      {/*    <div className="grid lg:grid-cols-2 gap-12 items-center">*/}
      {/*        <div className="space-y-8">*/}
      {/*            <div className="space-y-4">*/}
      {/*                <h1 className="text-5xl lg:text-6xl font-bold text-balance leading-tight">*/}
      {/*                    Construye el*/}
      {/*                    <span className="text-primary"> Futuro </span>*/}
      {/*                    Sustentable*/}
      {/*                </h1>*/}
      {/*                <p className="text-xl text-muted-foreground text-pretty max-w-lg">*/}
      {/*                    Aprende sobre sostenibilidad mientras construyes la ciudad ecológica de tus sueños. Cada*/}
      {/*                    decisión*/}
      {/*                    cuenta para el planeta.*/}
      {/*                </p>*/}
      {/*            </div>*/}

      {/*            /!*<div className="flex flex-col sm:flex-row gap-4">*!/*/}
      {/*            /!*  <Button size="lg" className="text-lg px-8 py-6">*!/*/}
      {/*            /!*    <Play className="mr-2 h-5 w-5" />*!/*/}
      {/*            /!*    Jugar Ahora*!/*/}
      {/*            /!*  </Button>*!/*/}
      {/*            /!*  <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">*!/*/}
      {/*            /!*    Ver Demo*!/*/}
      {/*            /!*    <ArrowRight className="ml-2 h-5 w-5" />*!/*/}
      {/*            /!*  </Button>*!/*/}
      {/*            /!*</div>*!/*/}

      {/*            /!*<div className="flex items-center gap-6 pt-4">*!/*/}
      {/*            /!*  <div className="flex items-center gap-1">*!/*/}
      {/*            /!*    {[...Array(5)].map((_, i) => (*!/*/}
      {/*            /!*        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />*!/*/}
      {/*            /!*    ))}*!/*/}
      {/*            /!*  </div>*!/*/}
      {/*            /!*  <span className="text-muted-foreground">Más de 10,000 jugadores</span>*!/*/}
      {/*            /!*</div>*!/*/}
      {/*        </div>*/}

      {/*        /!*<div className="relative">*!/*/}
      {/*        /!*    <ImageCarousel*!/*/}
      {/*        /!*        images={gameplayImages}*!/*/}
      {/*        /!*        className="h-[500px]"*!/*/}
      {/*        /!*        onImageClick={(_, index) => openFullscreen(gameplayImages, index)}*!/*/}
      {/*        /!*    />*!/*/}
      {/*        /!*</div>*!/*/}
      {/*    </div>*/}
      {/*</div>*/}
    </section>
  );
}

export default HeroSection;
