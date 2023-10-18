import {createBrowserRouter,} from "react-router-dom";
import Root from "../../layOut/Root";
import Home from "../../pages/Home";
import Registration from "../../pages/shared/Registration/Registration";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"/registration",
          element:<Registration></Registration>
        }
      ]
    },
  ]);

  export default router;