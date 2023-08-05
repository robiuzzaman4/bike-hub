import { TReviewProps } from "@/types/types";
import Image from "next/image";

const ReviewCard = ({ reviewer_name, designation, photo_url, review }: TReviewProps) => {

    // const colors = ["#4A3AFF", "#ffa63a", "#d83aff"];

    return (
        <div className={`relative h-60 w-96 bg-bh-neutrals-100 shadow-grid rounded-xl mx-8 border border-bh-neutrals-200/30 p-6 md:p-8`}>
            {/* top section */}
            <h2 className="-mt-4 bh-text-h2 text-center text-bh-primary">
                <i className="ri-double-quotes-r"></i>
            </h2>
            <div className="mt-2">
                <p className="bh-text-small">
                    <span>{review}</span>
                </p>
            </div>

            {/* bottom section */}
            <div className="absolute left-0 right-0 bottom-0 h-16 bg-gradient-to-tr from-bh-primary to-bh-primary/60 p-6 md:p-8 rounded-b-lg">
                <div className="h-full w-full flex items-center justify-between">
                    <Image
                        src={photo_url}
                        alt="Man Picture"
                        height={40}
                        width={40}
                        className="rounded-full" />
                    <div className="flex flex-col items-start -space-y-1">
                        <h5 className="bh-text-h5 text-bh-neutrals-100">{reviewer_name}
                        </h5>
                        <p className="text-bh-neutrals-300 text-[0.9375rem] font-normal leading-[1.5rem]">
                            {designation}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;