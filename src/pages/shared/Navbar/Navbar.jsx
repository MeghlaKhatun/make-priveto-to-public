import { Link, NavLink } from "react-router-dom";
import '../Navbar/Navbar.css'


const Navbar = () => {


    const navLinks=<>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/addProduct">Add Product</NavLink></li>
    <li><NavLink to="/myCart">My Cart</NavLink></li>
   <li><NavLink to="/registration">Registration</NavLink></li>
    </>


    return (
        <div className="bg-gradient-to-r from-black to-sky-500">
            <div className="flex max-w-7xl mx-auto py-10 justify-between items-center">

                <div className="flex gap-2 items-center">
                    <div className="w-[100px]">
                        <img className="" src="https://i.ibb.co/8g5vK1p/logo-2.png" alt="" />
                    </div>
                    <div>
                    <a href="#" className="flex items-end text-[18px] md:text-xl  text-white lg:text-3xl  italic md:font-bold lg:font-extrabold  "><span className="text-2xl md:text-4xl lg:text-5xl md:font-bold lg:font-extrabold italic ">E</span>lectronics </a>
                    </div>
                </div>


                <nav>
                    <ul className="flex gap-4 text-white font-medium text-[18px]">
                        {navLinks}
                    </ul>
                </nav>


                <div>
                <Link to="/login" className="py-2 px-4 bg-red-800 text-white font-medium md:font-semibold text-[14px] md:text-[16px] lg:text-[18px] rounded-lg">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;