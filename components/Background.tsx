import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import fp from '../public/assets/F-header-fb-page.jpg';

export default function Background() {
    const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1920 });
    const isBigScreen = useMediaQuery({ minDeviceWidth: 700 });


	let imageSrc = fp;

    if (isDesktopOrLaptop) {
        imageSrc = fp;
    }

    if (isBigScreen) {
        imageSrc = fp;
    }

    return (
        <Image
            alt="Fluctuation background"
            src={imageSrc}
            placeholder="blur"
            quality={100}
            fill
            sizes="100vw"
            style={{
                objectFit: 'cover',
            }}
        />
    );
}