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

import { Building2, Trophy, Leaf, Coins, Zap, Users } from "lucide-react"

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
]

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
        description: "Controla la producción y consumo energético de tu ciudad con fuentes renovables y limpias.",
    },
    {
        src: "/pollution-control-interface-with-environmental-met.jpg",
        alt: "Control de contaminación",
        title: "Reduce la Contaminación",
        description: "Monitorea y reduce los niveles de contaminación para mantener un ambiente saludable.",
    },
    {
        src: "/happy-citizens-in-a-green-city-with-parks-and-clea.jpg",
        alt: "Ciudadanos felices",
        title: "Ciudadanos Felices",
        description: "Mantén alta la felicidad de tus ciudadanos con decisiones sustentables y espacios verdes.",
    },
]

const baseWireframesRoute = `/assets/wireframes`
const wireframeObjects = [
    {
        src: `${baseWireframesRoute}/menu-inicio.png`,
        alt: "Menu",
        title: "Menu Inicio",
        description: "Idea general",
    },
    {
        src: `${baseWireframesRoute}/misiones.png`,
        alt: "Misiones",
        title: "Misiones del juego",
        description: "Completá misiones, aprendé y obtené recursos.",
    },
    {
        src: `${baseWireframesRoute}/tienda.png`,
        alt: "Tienda",
        title: "Tienda del juego",
        description: "Usa tus recursos y conseguí nuevas estructuras.",
    },
    {
        src: `${baseWireframesRoute}/pantalla-mapa.png`,
        alt: "Mapa",
        title: "Ejemplo de mapa",
        description: "Idea general",
    },
    {
        src: `${baseWireframesRoute}/civita-recursos.png`,
        alt: "Recursos 1",
        title: "EcoCoins",
        description: "Civita explica las EcoCoins",
    },
    {
        src: `${baseWireframesRoute}/civita-recursos-2.png`,
        alt: "Recursos 2",
        title: "Recursos",
        description: "Civita explica varios recursos",
    },
    {
        src: `${baseWireframesRoute}/civita-hablando.png`,
        alt: "Civita",
        title: "Civita",
        description: "Civita hablando",
    },
]

export {recursos, funcionalidadesClave, gameplayImages, wireframeObjects}