import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../Header";
import Home from "../Home";
import Footer from "../Footer";

const Layout = () => {
    return (
        <div>
            <ToastContainer position="top-right" autoClose={1000} closeOnClick theme="colored" />
            <Header />
            <Home />
            <Footer />
        </div>
    );
};

export default Layout;
