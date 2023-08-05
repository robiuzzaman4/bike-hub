"use client";

import { useState, useEffect } from "react"
import BikeCard from "@/components/BikeCard";
import { TBikeProps } from "@/types/types";
import fetchBikes from "@/utilities/fetchBikes";
import { bikeCatalogueInfo, priceFilter } from "@/constants";
import SearchBar from "@/components/SearchBar";
import Select from "@/components/Select";
import Loader from "@/components/Loader";

const BikeCatalogue = () => {
    const [allBikes, setAllBikes] = useState([]);
    const [loading, setLoading] = useState(false);

    // search
    const [brand, setBrand] = useState("");
    // filters
    const [price, setPrice] = useState("");

    const getBikes = async () => {
        setLoading(true);
        try {
            const result = await fetchBikes({
                brand: brand || "",
                price: price || ""
            })
            setAllBikes(result);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    // get bikes
    useEffect(() => {
        getBikes();
    }, [brand, price]);


    return (
        <section className="bh-container py-20 grid gap-8" id="bikeCatalogue">
            {/* title */}
            <div className="flex flex-col items-center mb-4">
                <h2 className="bh-text-h2 text-center">
                    {bikeCatalogueInfo.headingText}
                </h2>
                <p className="bh-text-small text-center">
                    {bikeCatalogueInfo.descriptionText}
                </p>
            </div>

            {/* search and filter*/}
            <div className="flex flex-col sm:flex-row items-start justify-between gap-4 relative">
                <div className="absolute left-0 right-0 sm:right-auto z-20">
                    <SearchBar setBrand={setBrand} />
                </div>
                <div className="absolute inset-0 sm:inset-auto z-10 mt-16 sm:mt-0 sm:right-0">
                    <Select options={priceFilter} setPrice={setPrice}/>
                </div>
            </div>

            {/* all bikes */}
            {
                allBikes.length !== 0 && loading === false ?
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-32 sm:mt-16">
                        {
                            allBikes?.map((bike: TBikeProps) => (
                                <BikeCard
                                    key={bike._id}
                                    {...bike} />
                            ))
                        }
                    </div>
                    : <Loader/>
            }

        </section>
    );
};

export default BikeCatalogue;