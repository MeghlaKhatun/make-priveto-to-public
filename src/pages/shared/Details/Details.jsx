import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Swal from 'sweetalert2'

const Details = () => {

    const productDetails = useLoaderData();
    const { id } = useParams();
    const product = productDetails.find(product => product._id == id);
    const { photo, brand_name, description, price, type } = product;

    const addCart={photo,brand_name,description,price,type};
    const handleAddToCart=()=>{

    
    fetch("http://localhost:5000/carts",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(addCart)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if(data.insertedId){
            Swal.fire(
                'Stored!',
                'Data Stored Successful',
                'success'
            )
        }

        
    })
}
 

    return (
        <div>
            <Navbar></Navbar>
            <div className="hero max-w-5xl mx-auto my-20 px-8 lg:px-0 ">
                <div className="hero-content px-8  py-8 flex-col lg:flex-row-reverse bg-gradient-to-r from-gray-400 to-gray-600 hover:shadow-2xl">
                    <div className=" ">
                        <img  src={photo} className=" lg:h-[250px]  lg:w-[500px] rounded-lg shadow-2xl" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold ">Brand: {brand_name}</h1>
                        <div className="flex gap-10 items-center  pt-6">
                            <h1 className="text-2xl  font-semibold text-white">{type}</h1>
                            <p className=" font-semibold py-1 px-4  bg-gray-500 rounded-full text-white"> {price}Tk</p>

                        </div>

                        <p className="py-4 font-semibold text-white">{description}</p>

                        <button onClick={handleAddToCart} className="py-3 px-5 bg-red-900 rounded-lg text-white font-semibold">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;