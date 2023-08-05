import { TFilterProps } from "@/types/types";

const fetchBikes = async (filters: TFilterProps) => {
    let { brand, price } = filters;

    try {
        const res = await fetch(`https://bike-hub-server-omega.vercel.app/api/bikes?brand=${brand}&sortBy=${price}`, {
            cache: 'no-cache'
        })
        const data = await res.json();
        return data;

    } catch (error) {
        throw new Error(`Failed to Fetch Bikes Data!`);
    }
}

export default fetchBikes;