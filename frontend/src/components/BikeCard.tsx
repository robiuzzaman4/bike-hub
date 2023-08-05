"use client";

import { TBikeProps } from "@/types/types";
import Image from "next/image";
import Button from "./Button";
import { useState } from "react";
import BikeDetails from "./BikeDetails";
import { motion } from "framer-motion";

const BikeCard = ({ name, price, imgSrc, frameSpecifications, otherBikeSpecs, componentDetails }: TBikeProps) => {

    const [isOpen, setIsOpen] = useState(false);

    const bike = { name, price, imgSrc, frameSpecifications, otherBikeSpecs, componentDetails };


    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-bh-secondary hover:bg-bh-neutrals-100 p-6 md:p-8 rounded-xl group hover:shadow-grid grid gap-8 relative">
            {/* name and model */}
            <div className="grid">
                <h4 className="bh-text-h4">{name}</h4>
                <div className="flex items-center">
                    <h6 className="bh-text-h5 self-start">€</h6>
                    <h2 className="bh-text-h2">{price}</h2>
                </div>
            </div>

            {/* image */}
            <div>
                <Image
                    src={imgSrc}
                    alt="Bike Picture"
                    width={200}
                    height={200}
                    className="mx-auto"
                />
            </div>

            {/* bottom info */}
            <div className="flex items-center justify-between gap-1 group-hover:hidden transition">
                <div className="flex flex-col items-center -space-y-1">
                    <i className="ri-lifebuoy-line text-bh-primary text-2xl"></i>
                    <p className="bh-text-small text-center">
                        {otherBikeSpecs.wheel_size} Inch
                    </p>
                </div>
                <div className="flex flex-col items-center -space-y-1">
                    <i className="ri-riding-line text-2xl text-[#ffa63a]"></i>
                    <p className="bh-text-small text-center">
                        {otherBikeSpecs.frame_material}
                    </p>
                </div>
                <div className="flex flex-col items-center -space-y-1">
                    <i className="ri-steam-line text-2xl text-[#d83aff]"></i>
                    <p className="bh-text-small text-center">
                        {otherBikeSpecs.type_of_brakes}
                    </p>
                </div>
            </div>

            {/* View more button */}
            <div className="hidden group-hover:flex transition py-1.5">
                <Button
                    title="View Details"
                    iconSrc="ri-arrow-right-line"
                    btnStyle="w-full"
                    handleClick={() => setIsOpen(true)} />
            </div>

            {/* bike details modal */}
            <BikeDetails
                isOpen={isOpen}
                closeModal={() => setIsOpen(false)}
                bike={bike} />
        </motion.div>
    );
};

export default BikeCard;