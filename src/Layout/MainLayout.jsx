import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shered/Navbar";
import Footer from "../pages/Shered/Footer";

const MainLayout = () => {
    return (
      <div className="max-w-7xl mx-auto">
        <Navbar></Navbar>
        <div className="min-h-[calc(100vh-300px)]">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default MainLayout;