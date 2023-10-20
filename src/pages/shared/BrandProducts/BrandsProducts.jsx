import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BrandProduct from "../BrandProduct/BrandProduct";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Navbar from "../Navbar/Navbar";

const BrandsProducts = () => {
    const { brandName } = useParams()
    // console.log(brandName)
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`https://brand-shop-server-side-3276vx317-meghlas-projects.vercel.app/products/${brandName}`)
            .then(res => res.json())
            .then(data => {
                // const filtered = data.filter(slide => slide.brandName == brand);
                setProducts(data);
                // console.log(data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);


    return (
        <div>
            <Navbar></Navbar>

            {/* start slider */}



            <div className="carousel h-[80vh] bg-black bg-opacity-50 w-full">
                <div id="slide1" className="carousel-item relative w-full bg-black bg-opacity-50">
                    <img src="https://i.ibb.co/XpLLkfs/slider-2-11zon.jpg" className="w-full " />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/N9qcxxq/slider-1-11zon.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/6nRtLQS/slider-3.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>               
            </div>




            {/* end slider */}


            <div className="bg-gradient-to-r from-black to-gray-700 py-20">


                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 py-20 px-8 lg:px-0 gap-6">
                    {
                        products?.map(product => <BrandProduct key={product._id} product={product}></BrandProduct>)
                    }
                </div>

                <div className="flex justify-center">
                    <Link to={"/"}>
                        <button className="bg-white py-3 px-5 text-black font-semibold rounded-lg flex items-center"><AiOutlineArrowLeft></AiOutlineArrowLeft> Go Home</button>
                    </Link>
                </div>

            </div>
        </div>

    );
};

export default BrandsProducts;