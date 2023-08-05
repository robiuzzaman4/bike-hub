import Button from "@/components/Button";
import { TPoints } from "@/types/types";
import { getSingleBlog } from "@/utilities/fetchBlogs";
import Image from "next/image";
import Link from "next/link";

type TSingleBlogProps = {
    params: {
        id: string;
    }
}

const SingleBlog = async ({ params: { id } }: TSingleBlogProps) => {
    const blog = await getSingleBlog(id);
    const { blog_title, blog_cover, introduction, points, conclusion } = blog;
    return (
        <section className="w-full bg-bh-neutrals-100 ">
            {/* top */}
            <div className="bh-container py-6">
                <Link href="/">
                    <Button
                        title="Back to Home"
                        iconSrc="ri-arrow-left-line"
                        btnStyle="flex-row-reverse" />
                </Link>
            </div>

            {/* blog details */}
            <div className="bh-container pt-4 pb-20 grid gap-8">
                {/* title */}
                <h2 className="bh-text-h2">{blog_title}</h2>

                {/* blog cover */}
                <div className="max-w-screen-md mx-auto max-h-[28rem] relative">
                    <Image
                        src={blog_cover}
                        alt="Blog Cover Image"
                        height={600}
                        width={600}
                        priority={true}
                        className="w-full h-full object-cover rounded-xl" />
                </div>

                {/* introduction */}
                <div className="bh-text-default">
                    <p><span className="font-semibold">Introduction:</span> {introduction}</p>
                </div>

                {/* points */}
                {
                    points.map((point: TPoints) => (
                        <div key={point._id} className="bh-text-default">
                            <p><span className="font-semibold">{point.point_title}:</span> {point.point_description}</p>
                        </div>
                    ))
                }

                {/* conclusion */}
                <div className="bh-text-default">
                    <p><span className="font-semibold">Conclusion:</span> {conclusion}</p>
                </div>
            </div>
        </section>
    );
};

export default SingleBlog;