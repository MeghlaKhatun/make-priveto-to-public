import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { FcGoogle } from 'react-icons/fc';
import { useContext } from "react";
import { AuthContext } from "../../../Routes/Provider/AuthProvider";
import Swal from 'sweetalert2'



const LogIn = () => {

    const { LogIn, googleLogIn } = useContext(AuthContext);


    const location=useLocation()
    console.log(location);
    const navigate=useNavigate()

    const handleLogIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        //LogInUser
        LogIn(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire(
                    'Log In!',
                    'LogIn Successful',
                    'success'
                )
                navigate(location.state ? location.state : "/")

            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops sorry...',
                    text: (`${error.message}`),
                })
            })
    }

    //Google Login
    const handleGoogleLogIn=()=>{

        googleLogIn()
        .then(result => {
            console.log(result.user);
            Swal.fire(
                'LogIn!',
                'Google LogIn Successful',
                'success'
            )
            navigate(location.state ? location.state : "/")
        })
        .catch(error => {
            console.error(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops sorry...',
                text: (`${error.message}`),
            })
        })

    }
    


    return (
        <div className="w-full h-full pb-20 bg-no-repeat bg-cover" style={{ backgroundImage: 'url(https://i.ibb.co/QrYwvH8/4884273-11zon.jpg)' }}>
            <Navbar></Navbar>

            <div className="max-w-7xl mx-auto py-16 md:py-20 lg:py-40 px-10">


                <div className="bg-transparent border-4 backdrop-blur-xl max-w-md mx-auto p-10 rounded-lg shadow-2xl">

                    <h2 className="text-xl md:text-2xl lg:text-3xl text-white text-center font-bold  ">Please LogIn</h2>

                    <form onSubmit={handleLogIn} className=" mx-auto ">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white  text-[18px]">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Your Email" className="input input-bordered text-black" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white text-[18px]">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered text-black" required />
                        </div>


                        <div className="form-control mt-6">
                            <button className="py-2 md:py-4 border-2  text-white rounded-lg font-bold">LogIn</button>
                        </div>
                    </form>
                    <p className="text-[16px] mt-4 text-white font-semibold text-center">Do not Have An Account? please <Link className="text-orange-800 hover:underline font-bold" to="/registration">Registration</Link> </p>

                    {/* GoogleLogIn */}
                    <div className="flex justify-center mt-6">
                        <button onClick={handleGoogleLogIn} className="py-2 md:py-4 px-10 bg-transparent  text-white  border-2 rounded-lg font-bold flex items-center gap-3"><FcGoogle className="text-2xl"></FcGoogle> Login with Google</button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default LogIn;