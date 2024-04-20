import React from "react";
import Image from "next/image";
import natureGauche from "../public/assets/natureGauche.png";
import feuilleDroite from "../public/assets/feuilleDroite.png";
import { motion } from "framer-motion";
import casquettebalcon from '../public/assets/casquetteBalcon.png'
import bateau from '../public/assets/bateau.png'
import { useTransform } from "framer-motion";
import { useScroll } from "framer-motion";
// import Lenis from '@studio-freight/lenis'

const images = [
    natureGauche,
    feuilleDroite,
    casquettebalcon,
    bateau
]

const AnimatedBackgroundHome = ({ containerRef }) => {
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start']
    });	
    const y = useTransform(scrollYProgress, [0, 1], [0, 60]);
    const x = useTransform(scrollYProgress, [0, 1], [0, -60])
    const y2 =useTransform(scrollYProgress, [0,1], [0, 40]); 
    const y3 = useTransform(scrollYProgress, [0, 1], [50, 5]);
    // const lenis = new Lenis({
    //         smoothWheel:true,
    //         lerp:1
    //     },
    // )
    // lenis.on('scroll', (e) => {
    // })
    
    // function raf(time) {
    //     lenis.raf(time)
    //     requestAnimationFrame(raf)
    // }    
    // requestAnimationFrame(raf)


        return (
        <div className="absolute inset-0">
            <motion.div 
                className="fixed bottom-0 left-0 w-32 md:w-64 xl:90 z-60" 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                style={{x , y:y2}}
            >
                <Image src={natureGauche} alt="Left Nature" />
            </motion.div>
            <motion.div 
                className="fixed top-10 right-0 w-10 h-10 md:w-16 xl:w-64 z-60" 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                style={{ y }}
            >
                <Image src={feuilleDroite} alt="Right Nature" />
            </motion.div>
            {/* <motion.div 
                className="fixed top-20 left-20 h-32 w-32 z-60" 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <Image src={bateau} alt="bateau"  />
            </motion.div> */}
            <motion.div 
                className="fixed bottom-0 right-0 w-16 md:w-32 xl:w-64 z-60" 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                style={{y:y3}}
            >
                <Image src={casquettebalcon} alt="casquettebalcon" />
            </motion.div>
        </div>
    );
};

export default AnimatedBackgroundHome;