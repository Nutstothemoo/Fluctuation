import React from "react";
import Image from "next/image";
import natureGauche from "../public/assets/natureGauche.png";
import feuilleDroite from "../public/assets/feuilleDroite.png";

const AnimatedBackground = () => {
	return (
		<div className="absolute inset-0">
			<div className="fixed bottom-0 left-0">
				<Image src={natureGauche} alt="Left Nature" width={150} height={300} />
			</div>
			<div className="fixed top-10 right-0 ">
				<Image src={feuilleDroite} alt="Right Nature" width={100} height={100} />
			</div>
		</div>
	);
};

export default AnimatedBackground;
