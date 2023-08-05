"use client";

import { useState } from "react";
import SearchBrands from "./SearchBrands";
import { TSearchBarProps } from "@/types/types";
import toast from 'react-hot-toast';

const SearchBar = ({ setBrand }: TSearchBarProps) => {
    const [searchBrand, setSearchBrand] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (searchBrand === "") {
            return toast.error('Please enter a brand name!', {
                duration: 2000
            });
        }

        setBrand(searchBrand);
    }



    return (
        <form onSubmit={handleSubmit}>
            <div className="sm:min-w-[320px] relative" >
                <SearchBrands
                    brand={searchBrand}
                    setBrand={setSearchBrand} />

                {/* submit button */}
                <button className="absolute top-1 right-1 h-8 w-8 grid place-items-center rounded-full bg-bh-secondary hover:bg-bh-neutrals-100 hover:shadow-grid transition z-20">
                    <i className="ri-search-line text-xl text-bh-primary"></i>
                </button>
            </div>
        </form>
    );
};

export default SearchBar;