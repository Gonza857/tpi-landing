import {
  Building2,
  Target,
  Lightbulb,
  Coins,
  BarChart3,
  Trophy,
} from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: Building2,
      title: "Gestión de Ciudad",
      description:
        "Panel principal con el mapa donde se construyen las estructuras que impactan en los recursos.",
    },
    {
      icon: Target,
      title: "Misiones y retos diarios",
      description:
        "Objetivos que enseñan decisiones sustentables y recompensan el progreso.",
    },
    {
      icon: Lightbulb,
      title: "Consejos y concientización",
      description:
        "El usuario obtendrá tanto consejos para el juego como tips para la concientización del medio ambiente.",
    },
    {
      icon: Coins,
      title: "Recursos y Economía",
      description:
        "Gestión de la moneda del juego (EcoCoins) y flujo económico basado en impuestos, misiones y edificios generadores de dinero.",
    },
    {
      icon: BarChart3,
      title: "Indicadores en tiempo real",
      description:
        "HUD visible con datos claves para el jugador entienda el impacto de sus decisiones.",
    },
    {
      icon: Trophy,
      title: "Ranking",
      description:
        "Competencia global y semanal basada en desempeño ambiental y social.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6 bg-clip-text text-primary">
            Funcionalidades
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Descubre todas las características que hacen de Neocivita una
            experiencia única de aprendizaje y diversión
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:bg-card/80 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-muted-foreground text-pretty leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
