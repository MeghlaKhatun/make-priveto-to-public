// import { useLoaderData } from "react-router-dom";
import MyCart from "./MyCart";
import Navbar from "../Navbar/Navbar";
import { useLoaderData } from "react-router-dom";

const MyCarts = () => {


    const carts=useLoaderData();



    return (
        <div>

            <Navbar></Navbar>
            <div className="max-w-7xl mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 my-8 md:my-16 lg:my-20 px-8 lg:px-0 ">
                
                {
                    carts?.map(cart=><MyCart key={cart._id} cart={cart}></MyCart>)
                }

            </div>
        </div>
    );
};

export default MyCarts;

