import {createBrowserRouter,} from "react-router-dom";
import Root from "../../layOut/Root";
import Home from "../../pages/Home";
import Registration from "../../pages/shared/Registration/Registration";
import LogIn from "../../pages/shared/LogIn/LogIn";
import AddProduct from "../../pages/shared/AddProduct/AddProduct";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
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
          element:<AddProduct></AddProduct>,
        }
       
      ]
    },
  ]);

  export default router;