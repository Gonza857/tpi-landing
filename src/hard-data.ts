const recursos = [
  {
    path: "/assets/resources/energia.png",
    title: "Energía",
    description: "Produce energía limpia con fuentes renovables",
    value: "5520",
    trend: "up",
  },
  {
    path: "/assets/resources/contaminacion.png",
    title: "Contaminación",
    description: "Mantén bajos los niveles de contaminación",
    value: "5%",
    trend: "neutral",
  },
  {
    path: "/assets/resources/felicidad.png",
    title: "Felicidad",
    description: "Ciudadanos satisfechos con tu gestión",
    value: "77%",
    trend: "up",
  },
  {
    path: "/assets/resources/moneda.png",
    title: "EcoCoins",
    description: "Moneda del juego para construcciones",
    value: "256k",
    trend: "up",
  },
  {
    path: "/assets/resources/poblacion.png",
    title: "Población",
    description: "Habitantes de tu ciudad sustentable",
    value: "12,5k",
    trend: "up",
  },
];

import { Building2, Trophy, Leaf, Coins, Zap, Users } from "lucide-react";

const funcionalidadesClave = [
  {
    icon: Building2,
    label: "Gestión de la Ciudad",
  },
  {
    icon: Trophy,
    label: "Misiones y Retos Diarios",
  },
  {
    icon: Leaf,
    label: "Consejos y Concientización",
  },
  {
    icon: Coins,
    label: "Recursos y Economía",
  },
  {
    icon: Zap,
    label: "Indicadores en Tiempo Real",
  },
  {
    icon: Users,
    label: "Ranking Global",
  },
];

const gameplayImages = [
  {
    src: "/isometric-city-view-with-green-buildings-and-solar.jpg",
    alt: "Vista isométrica de EcoCiudad",
    title: "Construye tu Ciudad Sustentable",
    description:
      "Diseña y construye una ciudad ecológica con edificios sustentables, paneles solares y espacios verdes.",
  },
  {
    src: "/energy-management-dashboard-with-renewable-energy-.jpg",
    alt: "Panel de gestión energética",
    title: "Gestiona la Energía",
    description:
      "Controla la producción y consumo energético de tu ciudad con fuentes renovables y limpias.",
  },
  {
    src: "/pollution-control-interface-with-environmental-met.jpg",
    alt: "Control de contaminación",
    title: "Reduce la Contaminación",
    description:
      "Monitorea y reduce los niveles de contaminación para mantener un ambiente saludable.",
  },
  {
    src: "/happy-citizens-in-a-green-city-with-parks-and-clea.jpg",
    alt: "Ciudadanos felices",
    title: "Ciudadanos Felices",
    description:
      "Mantén alta la felicidad de tus ciudadanos con decisiones sustentables y espacios verdes.",
  },
];

const baseWireframesRoute = `/assets/wireframes`;
const wireframeObjects = [
  {
    src: `${baseWireframesRoute}/Inicio.jpg`,
    alt: "Menu",
    title: "Menu Inicio",
    description: "Donde tu travesía comienza.",
  },
  {
    src: `${baseWireframesRoute}/vita-equilibrio.jpg`,
    alt: "Bienvenida",
    title: "Personaje",
    description: "Vita nos acompañará en nuestra aventura!",
  },
  {
    src: `${baseWireframesRoute}/mapa-principal.jpg`,
    alt: "Mapa",
    title: "Mapa principal",
    description: "Equilibrá tus recursos y conseguí nuevas estructuras.",
  },
  {
    src: `${baseWireframesRoute}/evento.jpg`,
    alt: "Evento",
    title: "Eventos",
    description: "Experiencia de juego dinámica, tus decisiones valen oro.",
  },
  {
    src: `${baseWireframesRoute}/mapa-lluvia.jpg`,
    alt: "Mapa contaminado",
    title: "Efectos en el mapa",
    description: "Observá como tus decisiones impactan en el ambiente.",
  },
  {
    src: `${baseWireframesRoute}/tienda.png`,
    alt: "Tienda",
    title: "Tienda",
    description: "Gran variedad de estructuras.",
  },
  {
    src: `${baseWireframesRoute}/tips-vita.png`,
    alt: "Tips",
    title: "Tips e información reales",
    description:
      "Utilizamos el entretenimiento para concientizar, aprendé jugando!",
  },
];

export { recursos, funcionalidadesClave, gameplayImages, wireframeObjects };
