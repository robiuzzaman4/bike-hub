import { heroInfo } from "@/constants";
import Image from "next/image";

const Hero = () => {
    return (
        <div className="bh-container">
            <div className="py-20 grid md:grid-cols-2 gap-8">

                {/* left section */}
                <section className="flex flex-col gap-4">
                    <span className="bh-text-highlight">
                        {heroInfo.highlightText}
                    </span>
                    <h1 className="bh-text-h1">
                        {heroInfo.headingText}
                    </h1>
                    <p className="bh-text-default">
                        {heroInfo.descriptionText}
                    </p>
                </section>
                {/* right section */}
                <section className="w-full h-full relative group">
                    <Image
                        src={heroInfo.imgSrc}
                        alt={heroInfo.imgAlt}
                        width={600}
                        height={600}
                        priority
                        className="group-hover:scale-105 transition duration-500 z-10" />

                    <div className="bh-gradient w-56 md:w-64 h-56 md:h-64 rounded-full blur-[8rem] opacity-70 absolute inset-10" />
                </section>
            </div>
        </div>
    );
};

export default Hero;