/**
 * Función para enviar datos del quiz a Firebase
 *
 * INSTRUCCIONES PARA CONECTAR CON FIREBASE:
 *
 * 1. Instalá el SDK de Firebase:
 *    npm install firebase
 *
 * 2. Creá un proyecto en Firebase Console (https://console.firebase.google.com)
 *
 * 3. Obtené tu configuración de Firebase y agregá estas variables de entorno:
 *    NEXT_PUBLIC_FIREBASE_API_KEY=tu_api_key
 *    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=tu_auth_domain
 *    NEXT_PUBLIC_FIREBASE_PROJECT_ID=tu_project_id
 *    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=tu_storage_bucket
 *    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=tu_sender_id
 *    NEXT_PUBLIC_FIREBASE_APP_ID=tu_app_id
 *
 * 4. Descomentá el código de abajo y comentá la función mock
 */

import { initializeApp } from "firebase/app"
import { getFirestore, collection, addDoc, query, orderBy, getDocs } from "firebase/firestore"

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export async function sendToFirebase(data: any) {
    try {
        const docRef = await addDoc(collection(db, "quiz-results"), data)
        console.log("Documento guardado con ID:", docRef.id)
        return docRef.id
    } catch (error) {
        console.error("Error al guardar en Firebase:", error)
        throw error
    }
}

export async function getResultsFromFirebase() {
    try {
        console.log("db", db)
        const q = query(collection(db, "quiz-results"), orderBy("timestamp", "desc"))
        const querySnapshot = await getDocs(q)
        return querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }))
    } catch (error) {
        console.error("Error al obtener resultados de Firebase:", error)
        throw error
    }
}

export async function sendFeedbackToFirebase(data: any) {
    try {
        const docRef = await addDoc(collection(db, "feedback"), data)
        console.log("Feedback guardado con ID:", docRef.id)
        return docRef.id
    } catch (error) {
        console.error("Error al guardar feedback en Firebase:", error)
        throw error
    }
}

export async function getFeedbackFromFirebase() {
    try {
        const q = query(collection(db, "feedback"), orderBy("timestamp", "desc"))
        const querySnapshot = await getDocs(q)
        return querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }))
    } catch (error) {
        console.error("Error al obtener feedback de Firebase:", error)
        throw error
    }
}

export function getDeviceInfo() {
    if (typeof window === "undefined") {
        return {
            userAgent: "Server",
            platform: "Server",
            language: "unknown",
            screenResolution: "unknown",
            deviceType: "Server",
            browser: "unknown",
            os: "unknown",
        }
    }

    const ua = navigator.userAgent

    // Detect device type
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua)
    const isTablet = /iPad|Android(?!.*Mobile)/i.test(ua)
    const deviceType = isTablet ? "Tablet" : isMobile ? "Mobile" : "Desktop"

    // Detect browser
    let browser = "Unknown"
    if (ua.includes("Firefox")) browser = "Firefox"
    else if (ua.includes("Chrome") && !ua.includes("Edg")) browser = "Chrome"
    else if (ua.includes("Safari") && !ua.includes("Chrome")) browser = "Safari"
    else if (ua.includes("Edg")) browser = "Edge"
    else if (ua.includes("Opera") || ua.includes("OPR")) browser = "Opera"

    // Detect OS
    let os = "Unknown"
    if (ua.includes("Windows")) os = "Windows"
    else if (ua.includes("Mac")) os = "macOS"
    else if (ua.includes("Linux")) os = "Linux"
    else if (ua.includes("Android")) os = "Android"
    else if (ua.includes("iOS") || ua.includes("iPhone") || ua.includes("iPad")) os = "iOS"

    return {
        userAgent: ua,
        platform: navigator.platform,
        language: navigator.language,
        screenResolution: `${window.screen.width}x${window.screen.height}`,
        deviceType,
        browser,
        os,
        viewport: `${window.innerWidth}x${window.innerHeight}`,
    }
}

// FUNCIÓN MOCK PARA DESARROLLO (Reemplazá esto con el código de arriba cuando conectes Firebase)
// export async function sendToFirebase(data: any) {
//   // Simulación de delay de red
//   await new Promise((resolve) => setTimeout(resolve, 1000))

//   console.log("📊 Datos que se enviarían a Firebase:", data)
//   console.log('✅ Mock: Datos "guardados" exitosamente')

//   // En producción, esto sería reemplazado por la llamada real a Firebase
//   return "mock-doc-id-" + Date.now()
// }
