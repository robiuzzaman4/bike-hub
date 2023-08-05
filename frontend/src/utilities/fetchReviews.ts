export const getReviews = async () => {
    try {
        const res = await fetch(`https://bike-hub-server-omega.vercel.app/api/reviews`);
        const data = await res.json();
        return data;
    } catch (error) {
        throw new Error(`Failed to Fetch Reviews Data!`);
    }
}