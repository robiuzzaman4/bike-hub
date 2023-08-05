import { TBlogProps } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const BlogCard = ({  _id, blog_title, blog_cover, blog_read_time }: TBlogProps) => {
    return (
        <div className="bg-bh-secondary hover:bg-bh-neutrals-100 transition hover:shadow-grid rounded-tl-3xl rounded-br-3xl group p-6 md:p-8 grid lg:grid-cols-2 gap-8">
            <div className=" relative h-56 rounded-tl-3xl rounded-br-3xl overflow-hidden">
                <Image
                    src={blog_cover}
                    alt="Bike Image"
                    height={400}
                    width={400}
                    className="w-full h-full object-cover rounded-tl-3xl rounded-br-3xl group-hover:scale-105 transition" />
            </div>
            <div className="grid gap-4">
                <h5 className="bh-text-h5">{blog_title}</h5>
                <div className="grid gap-4 mt-auto w-full">
                    <button className="bg-bh-neutrals-100 group-hover:bg-bh-secondary transition px-4 py-2 rounded-xl text-bh-primary">{blog_read_time} min read</button>
                    <Link href={`/blogs/${_id}`}>
                        <Button title="Read Now" btnStyle="w-full rounded-xl"/>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;