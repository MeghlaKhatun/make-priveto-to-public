import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

function OurBrands({ brand }) {

  const { brand_name, img } = brand;

  return (
    <Link to={`/brandProducts/${brand_name}`}>
    <div className="card bg-base-100 shadow-2xl hover:shadow-gray-700  transition">
      <div className='h-[300px]'>
        <img className='px-6' src={img} alt="Shoes" />
        </div>

      <div className="card-body">
        <h2 className=" text-center text-xl font-bold bg-gradient-to-r from-gray-300 to-gray-700 text-white p-2 rounded-lg">{brand_name}</h2>
      </div>
    </div>
    </Link>

  )
}

OurBrands.propTypes = {
  brand: PropTypes.object,
}

export default OurBrands
