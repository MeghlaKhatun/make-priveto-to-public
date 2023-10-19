import { useLoaderData } from "react-router-dom";

const BrandsProducts = () => {

    const brand=useLoaderData();
   const {brand_name}=brand;

    return (
        <div>
            
            <h2 className="text-6xl text-blue-600">{brand_name}</h2>
            
        </div>
    );
};

export default BrandsProducts;