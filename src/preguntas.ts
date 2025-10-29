export interface Question {
    question: string
    options: string[]
}

export const questions: Question[] = [
    {
        question: "¿Qué porcentaje del agua del planeta es dulce y apta para consumo humano?",
        options: ["Aproximadamente el 3% ✅", "Alrededor del 10%", "Casi la mitad", "Más del 70%"],
    },
    {
        question: "¿Qué tipo de energía aprovecha la fuerza del viento?",
        options: ["Energía solar", "Energía eólica ✅", "Energía hidráulica", "Energía geotérmica"],
    },
    {
        question: "¿Qué país produce más energía eólica en América Latina?",
        options: ["Brasil ✅", "Argentina", "Chile", "México"],
    },
    {
        question: "¿Cuánto tarda en degradarse una botella plástica común?",
        options: ["450 años aproximadamente ✅", "10 años", "50 años", "100 años"],
    },
    {
        question: "¿Qué podés hacer para ahorrar agua en casa?",
        options: ["Cerrar la canilla mientras te lavás los dientes ✅", "Llenar la bañera", "Usar más jabón", "Regar a la tarde"],
    },
    {
        question: "¿Qué porcentaje de la electricidad argentina proviene de fuentes renovables?",
        options: ["Cerca del 30% ✅", "5%", "60%", "90%"],
    },
    {
        question: "¿Qué provincia argentina se destaca por sus parques eólicos?",
        options: ["Chubut ✅", "Formosa", "Corrientes", "Salta"],
    },
    {
        question: "¿Cuántos litros de agua puede contaminar un solo litro de aceite usado?",
        options: ["Hasta 1000 litros ✅", "10 litros", "50 litros", "100 litros"],
    },
    {
        question: "¿Qué significa RAEE?",
        options: [
            "Residuos de Aparatos Eléctricos y Electrónicos ✅",
            "Reciclado Ambiental Eficiente y Económico",
            "Red de Ahorro Energético Ecológico",
            "Reuso Avanzado de Energía Eólica",
        ],
    },
    {
        question: "¿Qué porcentaje de los residuos urbanos se podría reciclar si se separaran correctamente?",
        options: ["Más del 50% ✅", "10%", "20%", "90%"],
    },
    {
        question: "¿Qué práctica ayuda a reducir las emisiones de carbono?",
        options: ["Usar transporte público o bicicleta ✅", "Usar el auto para trayectos cortos", "Comprar más ropa", "Usar aerosoles"],
    },
    {
        question: "¿Cuántos árboles se necesitan para absorber el CO₂ que genera una persona por año?",
        options: ["Entre 7 y 10 árboles ✅", "1 árbol", "100 árboles", "Ninguno"],
    },
    {
        question: "¿Qué material tarda más en degradarse en el ambiente?",
        options: ["Plástico ✅", "Vidrio", "Cartón", "Papel"],
    },
    {
        question: "¿Qué ciudad argentina implementó el programa 'Buenos Aires Recicla'?",
        options: ["Ciudad Autónoma de Buenos Aires ✅", "Rosario", "Córdoba", "La Plata"],
    },
    {
        question: "¿Cuánto se puede reducir la basura si se realiza compost en casa?",
        options: ["Hasta un 40% ✅", "5%", "10%", "80%"],
    },
    {
        question: "¿Qué energía se obtiene al calentar agua con el sol?",
        options: ["Energía solar térmica ✅", "Energía eólica", "Energía nuclear", "Energía hidráulica"],
    },
    {
        question: "¿Cuánto tarda en degradarse una bolsa plástica en promedio?",
        options: ["Entre 150 y 300 años ✅", "5 años", "20 años", "500 años"],
    },
    {
        question: "¿Qué recurso natural se utiliza para generar energía hidroeléctrica?",
        options: ["El agua ✅", "El viento", "El carbón", "El gas natural"],
    },
    {
        question: "¿Qué porcentaje del territorio argentino tiene condiciones favorables para energía solar?",
        options: ["Más del 70% ✅", "20%", "40%", "50%"],
    },
    {
        question: "¿Qué hábito cotidiano ayuda más al ahorro de energía en casa?",
        options: ["Apagar luces y aparatos que no se usan ✅", "Usar más ventiladores", "Lavar con agua caliente", "Usar más lámparas"],
    },
]

export function getRandomQuestions(count: number): Question[] {
    // Create a copy of the questions array
    const shuffled = [...questions]

    // Fisher-Yates shuffle algorithm
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }

    // Return the first 'count' questions
    return shuffled.slice(0, Math.min(count, shuffled.length))
}
