import { Outlet } from "react-router-dom";
import NavBar from "../Components/Layout/Navbar";
import Footer from "../Components/Layout/Footer";

const BaseScreen = () => {
  return (
    <div className="container-fluid">
      
      <NavBar/>
      <main className="main">
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
};
export default BaseScreen;
