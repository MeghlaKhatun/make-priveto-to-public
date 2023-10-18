
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Routes/Provider/AuthProvider";
import Swal from 'sweetalert2'
import { updateProfile } from "firebase/auth";


const Registration = () => {

    const { createUser } = useContext(AuthContext);
    const [verifyPassword, setVerifyPassword] = useState("")

    const handleRegistration = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const term = form.terms.checked;

        console.log(name, email, password, term)

        setVerifyPassword(" ");
        // verify password condition
        if (password.length < 6) {
            setVerifyPassword(" Password should be at least 6 characters")
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setVerifyPassword("Password must be one character uppercase");
            return;
        }
        else if (!/[!@#$%^&*()_+{}[\]:;<>,.?/~\\-]/.test(password)) {
            setVerifyPassword("Password must have one character special key word");
            return
        }
        else if (!term) {
            setVerifyPassword("Please fulfil our terms");
            return;
        }

        //createUser
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire(
                    'Registration!',
                    'Registration Successful',
                    'success'
                  );

                  //updateProfile
                  updateProfile(result.user,{
                    displayName:name,
                    photoURL:"https://i.ibb.co/PxP4X7d/user.png"
                  })
                  .then(()=>console.log("profile updated"))
                  .catch()
    
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops sorry...',
                    text: (`${error.message}`),
                  })
            })

    }



    return (
        <div className="w-full h-full pb-20 bg-no-repeat bg-cover" style={{ backgroundImage: 'url(https://i.ibb.co/pR6yV3j/banner.jpg)' }}>
            <Navbar></Navbar>

            <div className="max-w-7xl mx-auto py-16 md:py-20 lg:py-40 px-10">


                <div className="bg-transparent border-4 backdrop-blur-xl max-w-md mx-auto p-10 rounded-lg shadow-2xl">


                    {
                        verifyPassword && <p className="text-xl font-semibold text-red-700 font-bold mb-6">{verifyPassword}</p>
                    }

                    <h2 className="text-xl md:text-2xl lg:text-3xl text-white text-center font-bold  ">Please Registration</h2>

                    <form onSubmit={handleRegistration} className=" mx-auto ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white  text-[18px]">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                        </div>



                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white  text-[18px]">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white text-[18px]">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>

                        <div className="my-4 flex gap-2">
                            <input type="checkbox" name="terms" id="terms" />
                            <label className="text-white" htmlFor="terms">Accepted our <a href="#">terms </a></label>
                        </div>


                        <div className="form-control mt-6">
                            <button className="py-2 md:py-4 border-2  text-white rounded-lg font-bold">Registration</button>
                        </div>
                    </form>
                    <p className="text-[16px] mt-4 text-white font-semibold text-center">Already Have An Account ? please <Link className="text-orange-800 hover:underline font-bold" to="/Login">Login</Link> </p>

                </div>

            </div>
        </div>
    );
};

export default Registration;