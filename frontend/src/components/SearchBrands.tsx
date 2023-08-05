"use client";

import { Fragment, useState } from "react";
import { TBrandsProps } from "@/types/types";
import { Combobox, Transition } from "@headlessui/react";
import { brands } from "@/constants";

const SearchBrands = ({ brand, setBrand }: TBrandsProps) => {
    const [query, setQuery] = useState("");

    const filteredBrand = (
        query === "" ? brands : brands.filter((item) => (
            item.toLowerCase()
                .replace(/\s+/g, "")
                .includes(query.toLowerCase().replace(/\s+/g, ""))
        ))
    )

    return (
        <div className="bg-bh-neutrals-100 shadow-grid rounded-xl">
            <Combobox value={brand} onChange={setBrand}>
                <Combobox.Input
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Orbea"
                    displayValue={(brand: string) => brand}
                    className="w-full px-4 py-2 rounded-xl focus:outline-none bg-bh-neutrals-100" />
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    afterLeave={() => setQuery("")}>
                    <Combobox.Options>
                        {
                            filteredBrand.map((item, index, arr) => (
                                <Combobox.Option
                                    key={item}
                                    value={item}
                                    className={({ active }) => `cursor-default px-4 py-2 ${index === arr.length - 1 && "rounded-b-xl"} ${active ? "bg-bh-primary text-bh-neutrals-100" : "bg-bh-neutrals-100 text-bh-neutrals-800"}`}>
                                    {item}
                                </Combobox.Option>
                            ))
                        }
                    </Combobox.Options>
                </Transition>
            </Combobox>
        </div>
    );
};

export default SearchBrands;