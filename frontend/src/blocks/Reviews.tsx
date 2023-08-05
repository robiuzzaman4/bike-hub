import Loader from "@/components/Loader";
import ReviewCard from "@/components/ReviewCard";
import { TReviewProps } from "@/types/types";
import { getReviews } from "@/utilities/fetchReviews";
import Marquee from "react-fast-marquee";

const Reviews = async () => {
    // reviews data
    const reviews = await getReviews();

    return (
        <section className="py-20 grid gap-8" id="reviews">
            {/* title */}
            <div className="bh-container mb-4">
                <div className="flex flex-col items-center">
                    <h2 className="bh-text-h2 text-center">
                        Voice of Satisfaction
                    </h2>
                    <p className="bh-text-small text-center">
                        Feedback from Satisfied Persons.
                    </p>
                </div>
            </div>

            {
                reviews?
                    <Marquee className="h-auto">
                        {
                            reviews.map((review: TReviewProps) => (
                                <ReviewCard
                                    key={review.review}
                                    {...review} />
                            ))
                        }
                    </Marquee>
                    : <Loader/>
            }

        </section>
    );
};

export default Reviews;