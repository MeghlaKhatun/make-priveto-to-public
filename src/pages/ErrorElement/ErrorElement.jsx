import { Link } from "react-router-dom";

const ErrorElement = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-center font-bold text-3xl mt-8">404</h1>
            <p className="text-center font-bold">Page not found</p>
            <div className="flex justify-center mt-4">
           <Link to="/"> <button className="py-2 px-3 bg-red-900 bg-opacity-90 text-white rounded-lg">Go Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorElement;