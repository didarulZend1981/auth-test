import { Outlet } from "react-router-dom";


const Root = () => {
  return (
    <div className="max-w-6xl mx-auto border-4 font-poppins">
        <Outlet></Outlet>
    </div>
  );
};

export default Root;