export const getBlogs = async () => {
    try {
        const res = await fetch(`https://bike-hub-server-omega.vercel.app/api/blogs`);
        const data = await res.json();
        return data;
    } catch (error) {
        throw new Error(`Failed to Fetch Blogs Data!`);
    }
}

export const getSingleBlog = async (id: string) => {
    try {
        const res = await fetch(`https://bike-hub-server-omega.vercel.app/api/blogs/${id}`);
        const data = await res.json();
        return data;
    } catch (error) {
        throw new Error(`Failed to Fetch Blog Data!`);
    }
}