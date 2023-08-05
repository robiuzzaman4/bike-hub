import BikeCatalogue from "@/blocks/BikeCatalogue";
import Blogs from "@/blocks/Blogs";
import Brands from "@/blocks/Brands";
import Faq from "@/blocks/Faq";
import Footer from "@/blocks/Footer";
import Hero from "@/blocks/Hero";
import Mission from "@/blocks/Mission";
import Navbar from "@/blocks/Navbar";
import Newsletter from "@/blocks/Newsletter";
import Reviews from "@/blocks/Reviews";
import { Toaster } from 'react-hot-toast';

const Home = () => {
  return (
    <main className="overflow-hidden">
      <Navbar/>
      <Hero />
      <Brands/>
      <Mission/>
      <BikeCatalogue/>
      <Toaster/>
      <Reviews/>
      <Blogs/>
      <Faq/>
      <Newsletter/>
      <Footer/>
    </main>
  );
};

export default Home;