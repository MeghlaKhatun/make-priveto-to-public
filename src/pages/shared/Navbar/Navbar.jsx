import { Link, NavLink } from "react-router-dom";
import '../Navbar/Navbar.css'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Routes/Provider/AuthProvider";


const Navbar = () => {

    const { user, LogOut } = useContext(AuthContext)

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
      const body = document.body;
      if (darkMode) {
        body.classList.add('dark');
      } else {
        body.classList.remove('dark');
      }
    }, [darkMode]);
  
    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
    };


    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/addProduct">Add Product</NavLink></li>
        <li><NavLink to="/myCart">My Cart</NavLink></li>
        <li><NavLink to="/registration">Registration</NavLink></li>
    </>

    //logOut
    const handleSignOut = () => {
        LogOut()
            .then()
            .catch
    }


    return (

        <div className="bg-gradient-to-r from-black to-gray-700">
            <div className="navbar py-4 md:py-6 lg:py-12 max-w-7xl mx-auto px-4 md:px-10 lg:px-0">
                <div className="navbar-start">
                    <nav className="dropdown">

                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-3xl text-white font-extrabold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>

                        <ul tabIndex={0} className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 dark:text-black rounded-box w-52">
                            {navLinks}

                        </ul>


                    </nav>
                    <div className="flex  items-center">
                        <div className=" w-[40px] md:w-[60px] lg:w-[90px]">
                            <img className="" src="https://i.ibb.co/8g5vK1p/logo-2.png" alt="" />
                        </div>
                        <div>
                            <a href="#" className="flex items-end text-[18px] md:text-xl  text-white lg:text-3xl  italic md:font-bold lg:font-extrabold  "><span className="text-2xl md:text-4xl lg:text-5xl md:font-bold lg:font-extrabold italic ">E</span>lectronics </a>
                        </div>
                    </div>

                </div>


                <nav className="navbar-center hidden lg:flex">

                    <div className="flex justify-between items-center">

                        <ul className=" menu-horizontal flex gap-6 text-white font-medium text-[18px]">
                            {navLinks}

                        </ul>

                    </div>



                </nav>
                <div className="navbar-end">


                    <div className="flex flex-col-reverse justify-center lg:flex-row mr-2 lg:gap-4 items-center">

                        <div className="flex justify-center">
                            {
                                user?.displayName && <p className="text-white text-[12px] md:text-[14px] lg:text-[16px]">{user.displayName}</p>
                            }
                        </div>

                        <div className="flex justify-center">

                            {
                                user?.photoURL && <img src={user.photoURL} className="w-[30px] h-[30px] rounded-full" alt="" />
                            }
                        </div>
                    </div>

                    {
                        user ?
                            <div >
                                <Link onClick={handleSignOut} className="py-2 px-4  bg-red-700 text-white font-medium md:font-semibold text-[14px] md:text-[16px] lg:text-[18px] rounded-lg">LogOut</Link>
                            </div>
                            :
                            <div>

                                <Link to="/login" className="py-2 px-4  bg-red-700 text-white font-medium md:font-semibold text-[14px] md:text-[16px] lg:text-[18px] rounded-lg">Login</Link>
                            </div>
                    }


                    {/* toggle */}


                    <div className="flex items-center pl-1">
                    <label className="swap swap-rotate text-white">
                            <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
                            <svg
                                className={`swap-on fill-current w-6 h-6 `}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/>

                            </svg>

                            <svg
                                className={`swap-off fill-current w-6 h-6 `}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/>
                            </svg>
                        </label>

                    </div>
                    {/* toggle */}


                </div>
            </div>

        </div>



    );
};

export default Navbar;