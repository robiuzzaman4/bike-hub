import Chip from "@/components/Chip";
import { brands } from "@/constants";
import Marquee from "react-fast-marquee";

const Brands = () => {
    return (
        <section className="mb-20 pt-20 pb-10 bg-gradient-to-tr from-bh-primary to-bh-primary/60">
            <div className="bh-container grid gap-8">
            <Chip title="Showable Brands" chipStile="-mt-8" />
                <Marquee>
                    {
                        brands.slice(1, 7).map((brand) => (
                            <span key={brand}
                                className="text-bh-neutrals-200 text-[1.5rem] font-normal leading-[2.375rem] mx-8 sm:mx-16">
                                {brand}
                            </span>
                        ))
                    }
                </Marquee>
            </div>
        </section>
    );
};

export default Brands;