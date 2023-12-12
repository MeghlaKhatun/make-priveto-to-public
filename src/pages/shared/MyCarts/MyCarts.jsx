import { useLoaderData } from "react-router-dom";
import MyCart from "./MyCart";
import Navbar from "../Navbar/Navbar";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Routes/Provider/AuthProvider";
import Swal from "sweetalert2";

const MyCarts = () => {

    const { user } = useContext(AuthContext)
    const email=user.email;

    const [cards, setCards] = useState([])
    const carts = useLoaderData();

    useEffect(() => {
        const filtered = carts?.filter(card => card.email == user.email);
        setCards(filtered)
        console.log(filtered)

    }, [carts,user.email])


    const handleDelete = (id) => {
        console.log(id)

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {

            const info={id,email}

            if (result.isConfirmed) {
                fetch(`https://brand-shop-server-side-di7hjzh49-meghlas-projects.vercel.app/carts`, {
                    method: 'DELETE',
                    headers:{
                        "content-type":"application/json"
                    },
                    body:JSON.stringify(info)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            console.log("djlkgdg",carts,id)
                            console.log(carts[0].id,id)
                            
                                fetch("https://brand-shop-server-side-di7hjzh49-meghlas-projects.vercel.app/carts")
                                .then(res=>res.json())
                                .then(data=>{
                                    console.log(data)
                                    const filtered = data.filter(cart => user.email == cart.email);
                                    setCards(filtered)
                                })
         

                        }

                    })
            }
        })

    }


    return (
        <div>

            <Navbar></Navbar>
            <div className="max-w-7xl mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 py-8 md:py-16 lg:py-20 px-8 lg:px-0 ">

                {
                    cards?.map(cart => <MyCart key={cart._id} handleDelete={handleDelete} cart={cart}></MyCart>)
                }

            </div>
        </div>
    );
};

export default MyCarts;

