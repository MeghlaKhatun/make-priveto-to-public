
import { Rating } from '@mui/material';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

function BrandProduct({ product }) {

    const { _id, photo, name, price, type, ratting,brand_name } = product;

    return (
        <div>
            <div className="md:card md:card-side bg-base-100 shadow-xl">
                <div className='md:w-1/2 flex md:pl-6   items-center'>
                    <img className='md:rounded-lg' src={photo} alt="" />
                </div>
                <div className='flex items-center'>
                    <div className="card-body ">
                        <h2 className="text-black font-bold text-2xl">{brand_name}</h2>
                        <h2 className="text-black font-medium text-xl">Name: {name}</h2>
                        <p className='font-semibold text-[18px] text-black'>Type: {type}</p>
                        <p className='text-[17px] font-semibold text-black'>Price: ${price}</p>
                        <p>
                            <Rating className="flex items-center"

                                value={ratting}

                            />

                        </p>

                        <div className='flex gap-6'>
                            <div className="card-actions ">
                                <Link to={`/details/${_id}`}>
                                    <button className="py-2 px-4 rounded-lg bg-red-900 text-white">Details</button>
                                </Link>
                            </div>
                            <div className="card-actions ">
                                <Link to={`/updateProduct/${_id}`}>
                                    <button className="py-2 px-4 rounded-lg bg-red-900 text-white ">Update</button>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

BrandProduct.propTypes = {
    product: PropTypes.object,
}

export default BrandProduct
