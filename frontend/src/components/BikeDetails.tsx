"use client";

import { TBikeDetailsProps } from "@/types/types";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment } from "react";

const BikeDetails = ({ isOpen, closeModal, bike }: TBikeDetailsProps) => {

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" onClose={closeModal} className="relative z-50">

                {/* overlay */}
                <Transition.Child
                    enter="transition duration-300 ease-out"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition duration-200 ease-out"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    as={Fragment}>
                    <div className="fixed inset-0 bg-bh-neutrals-800 bg-opacity-40" />
                </Transition.Child>

                {/* actual modal */}
                <div className="fixed inset-0 overflow-auto">
                    <div className="flex items-center justify-center min-h-full w-full">
                        <Transition.Child
                            enter="transition duration-300 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-200 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                            as={Fragment}>

                            <Dialog.Panel
                                className="relative w-[90%] max-w-lg mx-auto max-h-[90vh] overflow-auto transform rounded-xl bg-bh-neutrals-100 p-6 shadow-grid flex flex-col gap-4">
                                <div className="w-full bg-gradient-to-tr from-bh-neutrals-100 via-bh-primary/25 via-60% to-bh-neutrals-100 rounded-xl">
                                    <Image
                                        src={bike.imgSrc}
                                        alt="Bike Picture"
                                        width={200}
                                        height={200}
                                        className="mx-auto py-4"
                                    />
                                </div>

                                <button
                                    onClick={closeModal}
                                    className="absolute top-2 right-2 h-9 w-9 flex items-center justify-center rounded-full bg-bh-secondary hover:bg-bh-neutrals-100 transition duration-300 shadow-grid">
                                    <i className="ri-close-line text-xl"></i>
                                </button>

                                <div className="flex flex-col gap-1">
                                    {/* name and frame and price */}
                                    <h4 className="bh-text-h4">{bike.name}</h4>

                                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between sm:gap-2">
                                        <h5 className="bh-text-h5 capitalize">Price:</h5>
                                        <p className="bh-text-small">€{bike.price}</p>
                                    </div>

                                    {Object.entries(bike.frameSpecifications).map(([featureName, featureValue], index) => (
                                        
                                        featureName === "_id" ? "" :
                                            <div key={index}
                                                className="flex flex-col sm:flex-row items-start sm:items-center justify-between sm:gap-2">
                                                <h5 className="bh-text-h5 capitalize">{featureName.split("_").join(" ")}:</h5>
                                                <p className="bh-text-small">{featureValue}</p>
                                            </div>
                                    ))}

                                    {Object.entries(bike.otherBikeSpecs).map(([featureName, featureValue], index) => (

                                        featureName === "_id" ? "" :
                                            <div key={index}
                                                className="flex flex-col sm:flex-row items-start sm:items-center justify-between sm:gap-2">
                                                <h5 className="bh-text-h5 capitalize">{featureName.split("_").join(" ")}:</h5>
                                                <p className="bh-text-small">{featureValue}</p>
                                            </div>
                                    ))}

                                    {Object.entries(bike.componentDetails).map(([featureName, featureValue], index) => (

                                        featureName === "_id" ? "" :
                                            <div key={index}
                                                className="flex flex-col sm:flex-row items-start sm:items-center justify-between sm:gap-2">
                                                <h5 className="bh-text-h5 capitalize">{featureName.split("_").join(" ")}:</h5>
                                                <p className="bh-text-small">{featureValue}</p>
                                            </div>
                                    ))}


                                </div>
                            </Dialog.Panel>

                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default BikeDetails;