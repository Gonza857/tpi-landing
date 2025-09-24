"use client"

import {useState} from "react";
import {FullscreenModal} from "@/components/FullscreenModal";
import {gameplayImages} from "@/hard-data";
import PropuestaValor from "@/sections/PropuestaValor";
import HeroSection from "@/sections/HeroSection";
import {ContextSection} from "@/sections/ContextSection";
import {TargetMarket} from "@/sections/TargetMarket";
import ResoursesSection from "@/sections/ResoursesSection";
import WireframesSection from "@/sections/WireframesSection";
import {BusinessModel} from "@/sections/ModeloNegocio";
import {FeaturesSection} from "@/sections/FeaturesSection";


export default function Home() {

    const [fullscreenModal, setFullscreenModal] = useState<{
        isOpen: boolean
        images: typeof gameplayImages
        currentIndex: number
    }>({
        isOpen: false,
        images: [],
        currentIndex: 0,
    })

    const closeFullscreen = () => {
        setFullscreenModal((prev) => ({...prev, isOpen: false}))
    }

    const openFullscreen = (images: typeof gameplayImages, index: number) => {
        setFullscreenModal({
            isOpen: true,
            images,
            currentIndex: index,
        })
    }

    const navigateFullscreen = (direction: "prev" | "next") => {
        setFullscreenModal((prev) => ({
            ...prev,
            currentIndex:
                direction === "next"
                    ? (prev.currentIndex + 1) % prev.images.length
                    : (prev.currentIndex - 1 + prev.images.length) % prev.images.length,
        }))
    }

    return (
        <section className={"min-h-screen bg-background"}>

            <HeroSection/>
            <PropuestaValor/>
            <FeaturesSection/>

            <div className="w-10/12 mx-auto bg-muted/30">
                <ContextSection/>
                <TargetMarket/>
                <ResoursesSection/>
                <WireframesSection
                    openFullscreen={openFullscreen}
                />
                <BusinessModel/>

                {/* Fullscreen Modal */}
                <FullscreenModal
                    isOpen={fullscreenModal.isOpen}
                    onClose={closeFullscreen}
                    images={fullscreenModal.images}
                    currentIndex={fullscreenModal.currentIndex}
                    onPrevious={() => navigateFullscreen("prev")}
                    onNext={() => navigateFullscreen("next")}
                />
            </div>
        </section>
    );
}
