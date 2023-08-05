"use client";

import { missionCardProps } from "@/types/types";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MissionCard = ({ id, title, description }: missionCardProps) => {
    const [isFavourite, setIsFavourite] = useState(false);
    useEffect(() => {
        const savedFavourites = localStorage.getItem('favourites');
        if (savedFavourites !== null) {
            const parsedFavourites = JSON.parse(savedFavourites) as string[]; // Use type assertion here
            setIsFavourite(parsedFavourites.includes(id as string));
        }
    }, [id]);

    const handleAddToFavourite = () => {
        const savedFavourites = localStorage.getItem('favourites');
        const currentFavourites = savedFavourites !== null ? JSON.parse(savedFavourites) as string[] : [];

        const updatedFavourites = isFavourite
            ? currentFavourites.filter(item => item !== id)
            : [...currentFavourites, id];

        localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
        setIsFavourite(!isFavourite);
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="p-6 md:p-8 bg-bh-neutrals-100 rounded-xl shadow-grid grid gap-4 group">
            <div className="flex items-center justify-between">
                <div className="h-9 w-9 rounded-xl bg-bh-primary text-bh-neutrals-100 grid place-items-center">
                    <h3 className="bh-text-h3">
                        {id}
                    </h3>
                </div>

                <button
                    onClick={handleAddToFavourite}
                    className="h-9 w-9 rounded-full grid place-items-center text-bh-primary bg-bh-secondary hover:bg-bh-neutrals-100 hover:shadow-grid transition">
                    <i className={`ri-heart-3-line text-xl group-hover:scale-110 transition ${isFavourite ? "hidden" : "block"}`}></i>
                    <i className={`ri-heart-3-fill text-xl group-hover:scale-110 transition ${isFavourite ? "block" : "hidden"}`}></i>
                </button>
            </div>
            <h5 className="bh-text-h5">
                {title}
            </h5>
            <p className="bh-text-small">
                {description}
            </p>
        </motion.div>
    );
};

export default MissionCard;