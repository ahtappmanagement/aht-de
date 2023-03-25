// import { children } from "react";
import Footer from "./footer";
import Header from "./header";

function Layouts({children}) {
    return ( 
        <>
            <Header/>
            <div className="bg-white text-white mb-5">
            </div>
            <div class="container mt-5">
            {children}
            </div>
            <Footer/>
        </>
     );
}

export default Layouts;
