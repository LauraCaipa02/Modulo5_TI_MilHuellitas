import Header from "./../../components/header/Header";
import Footer from "./../../components/footer/Footer";
import Info from "./../../components/donacion/Donacion_info";
import Gallerym from "../../components/donacion/Galerym";

function Donacionm(){
    return(
        <section className="donacion">
            <Header/>
            <Info/>
            <Gallerym/>
            <Footer/>
        </section>
    )
}

export default Donacionm;