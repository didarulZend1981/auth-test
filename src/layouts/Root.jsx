import { Outlet } from "react-router-dom";
import NavBar from "../pages/Shared/NavBer/NavBar";


const Root = () => {
  return (
    <div className="max-w-6xl mx-auto border-4 font-poppins">
        <NavBar></NavBar>
        <Outlet></Outlet>
    </div>
  );
};

export default Root;