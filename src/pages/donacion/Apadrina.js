import Header from "./../../components/header/Header";
import Footer from "./../../components/footer/Footer";
import Info from "./../../components/donacion/Donacion_info";
import Gallerya from "../../components/donacion/Galery";

function Apadrina(){
    return(
        <section className="donacion">
            <Header/>
            <Info/>
            <Gallerya/>
            <Footer/>
        </section>
    )
}

export default Apadrina;