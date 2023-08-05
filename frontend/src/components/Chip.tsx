import { TChipProps } from "@/types/types";

const Chip = ({ title, chipStile }:TChipProps) => {
    return (
        <div className={`w-fit mx-auto text-bh-primary bg-bh-secondary rounded-full px-4 py-2 text-[0.9375rem] font-normal leading-[1.5rem] ${chipStile && chipStile}`}>
            {title}
        </div>
    );
};

export default Chip;