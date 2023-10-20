import { useLoaderData } from "react-router-dom";
import Banner from "./shared/Banner/Banner";
import Navbar from "./shared/Navbar/Navbar";
import OurBrands from "./shared/OurBrand/OurBrands";
import Footer from "./shared/Footer/Footer";
import AllProduct from "./shared/AllProduct/AllProduct";
import About from "./shared/About/About";

const Home = () => {
    const brands=useLoaderData()

    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>

            {/* brand section */}
            <div className="max-w-7xl mt-8 md:mt-16 lg:mt-20 mx-auto md:mb-8 lg:mb-16 px-6 md:px-10 lg:px-0">
                <h2 className="text-center bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-700 text-2xl md:text-3xl lg:text-5xl  font-extrabold italic  mb-4 md:mb-8 lg:mb-12">Our Brand</h2>
                <div className="grid  gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                   {
                    brands?.map(brand=><OurBrands key={brand.id} brand={brand}></OurBrands>)
                   }
                </div>
            </div>

            <AllProduct></AllProduct>
            <About></About>

            <Footer></Footer>
            
        </div>
    );
};

export default Home;