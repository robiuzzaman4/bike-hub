import { TBikeCatalogueInfo, THeroInfo, TNavbarInfo } from "@/types/types";

export const navbarInfo: TNavbarInfo = {
    brandTextFirst: "Bike",
    brandTextLast: "Hub",
    btnText: "Explore Now"
}

export const heroInfo: THeroInfo = {
    highlightText: "Find the art of riding",
    headingText: "Explore the visual showcasing of bikes.",
    descriptionText: "Immerse yourself in a collection of meticulously curated bikes, each embodying the essence of adventure and craftsmanship. Experience the thrill of riding as you explore our diverse gallery of two-wheeled wonders.",
    imgSrc: "https://i.postimg.cc/j2k7r8Sc/scott-scale-fox-2018.png",
    imgAlt: "City Bike Picture"
}

export const bikeCatalogueInfo: TBikeCatalogueInfo = {
    headingText: "Bike Catalogue",
    descriptionText: "Explore out bikes you might like."
}

export const brands = [
    "Scott",
    "Orbea",
    "Specialized",
    "Wilier",
    "Cube",
    "Trek"
]

export const priceFilter = [
    { title: "Filter by Price", value: "" },
    { title: "High to Low", value: "high_to_low" },
    { title: "Low to High", value: "low_to_high" }
]

export const navLinks = [
    { targetId: "home", title: "Home" },
    { targetId: "mission", title: "Our Mission" },
    { targetId: "bikeCatalogue", title: "Bike Catalouge" },
    { targetId: "reviews", title: "Reviews" },
    { targetId: "blogs", title: "Blogs" },
    { targetId: "faq", title: "FAQs" }
]

export const footerContactInfo = [
    "Phone: +8801234567890",
    "Telephone: 555-123-4567",
    "Email: bikehub@mail.com",
    "Address: 1234, Abc Street Dhaka",
    "Region: Bangladesh"
]

export const missionInfo = [
    {
        id: "1",
        title: "Celebrate Biking Artistry",
        description: "Showcasing meticulously curated bikes that embody adventure and craftsmanship."
    },
    {
        id: "2",
        title: "Inspire Biking Journeys",
        description: "Igniting wanderlust through stories of extraordinary biking expeditions."
    },
    {
        id: "3",
        title: "Preserve Biking Heritage",
        description: "Tracing the evolution of bikes and honoring their historical significance."
    },
    {
        id: "4",
        title: "Foster Biking Unity",
        description: "Creating a community that shares the passion and camaraderie of two-wheeled adventures."
    }
]
