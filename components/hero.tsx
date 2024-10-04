"use client"
import '@fontsource/ibm-plex-sans/600.css';
import {IBM_Plex_Sans} from 'next/font/google'

const ibmfont = IBM_Plex_Sans({
    weight: '600',
    subsets: ['latin'],
  })

import React from "react";
import gsap from "gsap"
import { useGSAP } from "@gsap/react";

function Hero(){
    useGSAP(() => {
        gsap.to(".protecule", {
            y: 80,
            opacity: 1,
            duration: 2,
        });
    },[])

    return(
        <div>
            <div className="flex flex-col items-center">
            <div className="flex justify-center my-4">
                <main className={ibmfont.className}>
                    <p className={ibmfont.className + " protecule"}>ClubHouse</p>
                </main>
            </div>
        </div>
    </div>
    )
}

export default Hero;