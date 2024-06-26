import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";

const router = createBrowserRouter([
  {
    path:"/",
    element:<Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>


        
      },
      {
        path:'/login',
        element:<Login></Login>
  
      },
      {
        path:'/register',
        element:<Registration></Registration>
  
      }

    ]
  }



]);

export default router;