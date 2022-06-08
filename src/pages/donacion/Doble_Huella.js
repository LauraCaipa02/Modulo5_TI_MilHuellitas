import Header from "./../../components/header/Header";
import Footer from "./../../components/footer/Footer";
import FotoPlan from "../../components/donacion/Fotoplan";
import InfoPlan from "../../components/donacion/InfoPlan";
import Foto from "../../assets/img/donacion/plan_6doblehuella.jpg";
import '../../components/donacion/Plan.css'

function  DobleHuella() {
    return (  
        <section>
            <Header/>
            <div className="bodyplan">
            <FotoPlan
                foto={Foto}
                desf={"Plan Doble Huella"}/>
            <InfoPlan
                nombre={"PLAN DOBLE HUELLA"}
                valor={"Aporte: $500.000"}
                descripcion={"Tu aporte permite cubrir la estadía de los peludos dentro de la fundación, incluye alimentación, control veterinario con examenes, baños, tambien contribuye con el mantenimiento de las instalaciones."}
            />
            </div>
            <Footer/>
        </section>
    );           
}

export default DobleHuella; 