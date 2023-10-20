
import PropTypes from 'prop-types'
import { useState } from 'react';
import {FaTrashAlt } from "react-icons/fa";
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'


function MyCart({ cart }) {


    const {_id, photo, brand_name, description,type } = cart;

    
    const loadedCards = useLoaderData();
    const [cards, setCards] = useState(loadedCards);

    const handleDelete=(id)=>{
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
            if (result.isConfirmed) {
             fetch(`http://localhost:5000/carts/${id}`, {
            method: 'DELETE'
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
                    // remove carts
                    const remainingCards=cards?.filter(card=>card._id !== id);
                    setCards(remainingCards);
                    // window.location.reload();
                   
                }
               
            })
            }
          })

        

    }

 
    

    return (
        <div className=''>
            <div className="card  h-[500px] bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={photo} alt="" className="rounded-xl" />
                </figure>
                <div className="card-body items-center ">
                    <h2 className="card-title font-bold text-2xl">{brand_name}</h2>             
                    <h2 className="card-title font-semibold text-[18px]">Type: {type}</h2>     
                    <p className='font-medium text-[15px] text-center'>{description}</p>

                   
                    <div className="card-actions">
                        <button onClick={()=>handleDelete(_id)} className="py-3 px-5 bg-red-900 text-white font-semibold rounded-lg flex items-center gap-2">Delete<FaTrashAlt></FaTrashAlt> </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

MyCart.propTypes = {
    cart: PropTypes.object,
}

export default MyCart
