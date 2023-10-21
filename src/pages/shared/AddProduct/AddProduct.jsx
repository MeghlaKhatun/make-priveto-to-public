import { Rating} from "@mui/material";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import Swal from 'sweetalert2'

const AddProduct = () => {
    const [value,setValue]=useState(0);



    const handleAddProduct=event=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const brand_name=form.brand_name.value;
        const price=form.price.value;
        const photo=form.photo.value;
        const type=form.type.value;
        const description=form.description.value;
        const ratting=form.ratting.value;
        const addProduct={name,brand_name,price,photo,type,description,ratting}
        console.log(addProduct)


        //product add server side
        fetch("https://brand-shop-server-side-di7hjzh49-meghlas-projects.vercel.app/products",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(addProduct)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire(
                    'Successful!',
                    'Data stored successful!',
                    'success'
                  )
            }

        })

    }




    return (
        <div className="bg-gradient-to-r from-black to-gray-700 py-10">
            <Navbar></Navbar>
            <div className="max-w-7xl mx-auto mt-10 ">
                <h2 className="text-center font-semibold md:font-bold text-white text-xl md:text-2xl">Add Product</h2>

                <form onSubmit={handleAddProduct} className="px-10 md:px-0 md:w-4/5 lg:w-1/2 mx-auto  ">
                    <div className="form-control pt-2">
                        <label className="label">
                            <span className="label-text font-semibold text-white text-[16px] md:text-[18px]">Product Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered text-black" required />
                    </div>

                    <div className="form-control pt-2">
                        <label className="label">
                            <span className="label-text font-semibold text-white text-[16px] md:text-[18px]">Select Brand Name</span>
                        </label>
                        <select name="brand_name" className="input input-bordered text-black" >
                            <option value="apple">Apple</option>
                            <option value="samsung">Samsung</option>
                            <option value="sony">Sony</option>
                            <option value="oppo">Oppo</option>
                            <option value="walton">Walton</option>
                            <option value="singer">Singer</option>
                        </select>

                    </div>

                    <div className="form-control pt-2">
                        <label className="label">
                            <span className="label-text font-semibold text-white text-[16px] md:text-[18px]">Price</span>
                        </label>
                        <input type="text" name="price" placeholder="Price" className="input input-bordered text-black" required />
                    </div>

                    <div className="form-control pt-2">
                        <label className="label">
                            <span className="label-text font-semibold text-white text-[16px] md:text-[18px]">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered text-black" required />
                    </div>

                    <div className="form-control pt-2">
                        <label className="label">
                            <span className="label-text font-semibold text-white text-[16px] md:text-[18px]">Select Product Type</span>
                        </label>
                        <select name="type" className="input input-bordered text-black" >
                            <option value="phone">Phone</option>
                            <option value="headphone">HeadPhone</option>
                            <option value="television">Television</option>
                            <option value="laptop">Laptop</option>
                            <option value="refrigerator">Refrigerator</option>
                            <option value="watch">Watch</option>
                            <option value="tablet">Tablet</option>
                            <option value="camera">Camera</option>
                        </select>

                    </div>

                    <div className="form-control pt-2">
                        <label className="label">
                            <span className="label-text font-semibold text-white text-[16px] md:text-[18px]">Short Description</span>
                        </label>
                        <textarea name="description" id="" cols="30" rows="5" className="border-2 rounded-lg text-black"></textarea>
                    </div>

                    <div className="form-control pt-2">
                    <label className="label">
                            <span className="label-text font-semibold text-white text-[16px] md:text-[18px]">Ratting</span>
                        </label>
                    
                        <Rating className="input input-bordered flex items-center"
                            name="ratting"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />                       
                    </div>



                    <div className="form-control mt-6">
                        <input className="py-2 md:py-4 border-2 text-[#331A15] bg-[#D2B48C]  rounded-lg font-bold" type="submit" value="Add Product" />
                        {/* <button className="py-2 md:py-4 border-2 text-[#331A15] bg-[#D2B48C]  rounded-lg font-bold">Add Product</button> */}
                    </div>
                </form>

            </div>
        </div>
    );
};

export default AddProduct;