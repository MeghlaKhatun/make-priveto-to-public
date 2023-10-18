import {createBrowserRouter,} from "react-router-dom";
import Root from "../../layOut/Root";
import Home from "../../pages/Home";
import Registration from "../../pages/shared/Registration/Registration";
import LogIn from "../../pages/shared/LogIn/LogIn";
import AddProduct from "../../pages/shared/AddProduct/AddProduct";
import ErrorElement from "../../pages/ErrorElement/ErrorElement";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      errorElement:<ErrorElement></ErrorElement>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
            loader:()=>fetch("/technology.json")
        },
        {
          path:"/registration",
          element:<Registration></Registration>
        },
        {
          path:"/login",
          element:<LogIn></LogIn>
        },
        {
          path:"/addProduct",
          element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
        }
       
      ]
    },
  ]);

  export default router;