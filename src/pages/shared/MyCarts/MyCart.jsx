import PropTypes from 'prop-types'
import {FaTrashAlt } from "react-icons/fa";

function MyCart({ cart ,handleDelete}) {

    const {id, photo, brand_name, description,type } = cart;


    return (
        <div className=''>
            <div className="card  h-[500px] bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={photo} alt="" className="rounded-xl" />
                </figure>
                <div className="card-body items-center ">
                    <h2 className="card-title font-bold text-2xl text-black">{brand_name}</h2>             
                    <h2 className="card-title font-semibold text-[18px] text-black">Type: {type}</h2>     
                    <p className='font-medium text-[15px] text-center text-black'>{description}</p>

                   
                    <div className="card-actions">
                        <button onClick={()=>handleDelete(id)} className="py-3 px-5 bg-red-900 text-white font-semibold rounded-lg flex items-center gap-2">Delete<FaTrashAlt></FaTrashAlt> </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

MyCart.propTypes = {
    cart: PropTypes.object,
    handleDelete:PropTypes.func
}

export default MyCart
