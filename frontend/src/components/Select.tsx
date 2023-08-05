"use client";

import { Fragment, useState } from "react";
import { TSelectProps } from "@/types/types";
import { Listbox, Transition } from "@headlessui/react";

const Select = ({ options, setPrice }: TSelectProps) => {
    const [selected, setSelected] = useState(options[0]);

    return (
        <div className="w-fit rounded-xl bg-bh-neutrals-100 shadow-grid ">
            <Listbox value={selected} onChange={(e) => {
                setSelected(e);
                setPrice(e.value);
            }}>
                <div className="relative">
                    <Listbox.Button className="w-full flex items-center justify-between gap-2 px-4 py-2">
                        <span className="truncate block">{selected.title}</span>
                        <i className="ri-expand-up-down-line text-xl text-bh-primary"></i>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0">
                        <Listbox.Options>
                            {
                                options.map((option, index, arr) => (
                                    <Listbox.Option
                                        value={option}
                                        key={index}
                                        className={({ active }) => `cursor-default px-4 py-2 ${index === arr.length - 1 && "rounded-b-xl"} ${active ? "bg-bh-primary text-bh-neutrals-100" : "bg-bh-neutrals-100 text-bh-neutrals-800"}`}>
                                        {option.title}
                                    </Listbox.Option>
                                ))
                            }
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    );
};

export default Select;