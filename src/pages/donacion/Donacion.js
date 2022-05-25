import Header from "./../../components/header/Header";
import Footer from "./../../components/footer/Footer";
import Info from "./../../components/donacion/Donacion_info";
function Donacion(){
    return(
        <section className="donacion">
            <Header/>
            <Info/>
            <Footer/>
        </section>
    )
}

export default Donacion;