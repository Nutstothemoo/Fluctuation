import React from "react";
import Image from "next/image";
import natureGauche from "../public/assets/natureGauche.png";
import feuilleDroite from "../public/assets/feuilleDroite.png";

const AnimatedBackground = () => {
	return (
		<div className="z-50 absolute">
			<div className="fixed bottom-0 left-0 w-16 md:w-32 xl:64">
				<Image src={natureGauche} alt="Left Nature" />
			</div>
			<div className="z-50 fixed top-0 right-0 w-16 md:w-32 xl:w-64 ">
				<Image src={feuilleDroite} alt="Right Nature" />
			</div>
		</div>
	);
};

export default AnimatedBackground;
