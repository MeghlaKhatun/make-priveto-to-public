import { Rating} from "@mui/material";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";

const AddProduct = () => {
    const [value,setValue]=useState(0)
    return (
        <div className="bg-gradient-to-r from-black to-gray-700 py-10">
            <Navbar></Navbar>
            <div className="max-w-7xl mx-auto ">

                <form className="px-10 md:px-0 md:w-4/5 lg:w-1/2 mx-auto ">
                    <div className="form-control pt-2">
                        <label className="label">
                            <span className="label-text font-semibold text-white text-[18px]">Product Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                    </div>

                    <div className="form-control pt-2">
                        <label className="label">
                            <span className="label-text font-semibold text-white text-[18px]">Select Brand Name</span>
                        </label>
                        <select className="input input-bordered" >
                            <option value="Apple">Apple</option>
                            <option value="samsung">Samsung</option>
                            <option value="sony">Sony</option>
                            <option value="oppo">Oppo</option>
                            <option value="walton">Walton</option>
                            <option value="singer">Singer</option>
                        </select>

                    </div>

                    <div className="form-control pt-2">
                        <label className="label">
                            <span className="label-text font-semibold text-white text-[18px]">Price</span>
                        </label>
                        <input type="text" name="price" placeholder="Price" className="input input-bordered" required />
                    </div>

                    <div className="form-control pt-2">
                        <label className="label">
                            <span className="label-text font-semibold text-white text-[18px]">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                    </div>

                    <div className="form-control pt-2">
                        <label className="label">
                            <span className="label-text font-semibold text-white text-[18px]">Select Product Type</span>
                        </label>
                        <select className="input input-bordered" >
                            <option value="phone">Phone</option>
                            <option value="computer">Computer</option>
                            <option value="headphone">HeadPhone</option>
                            <option value="television">Television</option>
                        </select>

                    </div>

                    <div className="form-control pt-2">
                        <label className="label">
                            <span className="label-text font-semibold text-white text-[18px]">Short Description</span>
                        </label>
                        <textarea name="description" id="" cols="30" rows="5" className="border-2 rounded-lg"></textarea>
                    </div>

                    <div className="form-control pt-2">
                    <label className="label">
                            <span className="label-text font-semibold text-white text-[18px]">Ratting</span>
                        </label>
                    
                        <Rating className="input input-bordered flex items-center"
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />                       
                    </div>



                    <div className="form-control mt-6">
                        <button className="py-2 md:py-4 border-2 text-white  rounded-lg font-bold">Add Product</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default AddProduct;