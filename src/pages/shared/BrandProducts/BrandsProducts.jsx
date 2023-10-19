import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BrandProduct from "../BrandProduct/BrandProduct";
import { AiOutlineArrowLeft} from "react-icons/ai";

const BrandsProducts = () => {
    const { brandName } = useParams()
    console.log(brandName)
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/products/${brandName}`)
            .then(res => res.json())
            .then(data => {
                // const filtered = data.filter(slide => slide.brandName == brand);
                setProducts(data);
                console.log(data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);
    // const brand=useLoaderData();
    //    const {brand_name}=brand;

    return (
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
    );
};

export default BrandsProducts;