import Image from "next/image";

const Loader = () => {
    return (
        <div className="mt-32 sm:mt-16 w-full h-full grid place-items-center">
           <i className="ri-loader-line text-2xl text-bh-primary animate-spin duration-500"></i>
        </div>
    );
};

export default Loader;