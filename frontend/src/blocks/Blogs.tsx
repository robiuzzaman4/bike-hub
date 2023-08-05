import BlogCard from "@/components/BlogCard";
import Loader from "@/components/Loader";
import { TBlogProps } from "@/types/types";
import { getBlogs } from "@/utilities/fetchBlogs";

const Blogs = async () => {
    // get all blogs
    const blogs = await getBlogs();

    return (
        <section className="bh-container py-20 grid gap-8" id="blogs">
            {/* title */}
            <div className="flex flex-col items-center mb-4">
                <h2 className="bh-text-h2 text-center">
                    Latest Blogs
                </h2>
                <p className="bh-text-small text-center">
                    Explore latest blogs to stay up to date with bikes.
                </p>
            </div>

            {/* blogs */}
            {
                blogs.length > 0 ? <div className="grid md:grid-cols-2 gap-8">
                    {blogs.map((blog: TBlogProps) => (
                        <BlogCard key={blog.blog_title} {...blog} />
                    ))}
                </div> : <Loader />
            }

        </section>
    );
};

export default Blogs;