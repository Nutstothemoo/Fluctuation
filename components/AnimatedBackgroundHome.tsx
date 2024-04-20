import React from "react";
import Image from "next/image";
import natureGauche from "../public/assets/natureGauche.png";
import feuilleDroite from "../public/assets/feuilleDroite.png";
import { motion } from "framer-motion";
import casquettebalcon from '../public/assets/casquetteBalcon.png'
import bateau from '../public/assets/bateau.png'
import { useTransform } from "framer-motion";
import { useScroll } from "framer-motion";

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

    return (
        <div className="absolute inset-0">
            <motion.div 
                className="fixed bottom-0 left-0" 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <Image src={natureGauche} alt="Left Nature" width={150} height={300} />
            </motion.div>
            <motion.div 
                className="fixed top-10 right-0" 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <Image src={feuilleDroite} alt="Right Nature" width={100} height={100} />
            </motion.div>
            <motion.div 
                className="fixed bottom-50 left-50" 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <Image src={bateau} alt="bateau" width={100} height={100} />
            </motion.div>
            <motion.div 
                className="fixed bottom-0 right-0" 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <Image src={casquettebalcon} alt="casquettebalcon" width={100} height={100} />
            </motion.div>
        </div>
    );
};

export default AnimatedBackgroundHome;