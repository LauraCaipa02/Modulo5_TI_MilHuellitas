import Header from "./../../components/header/Header";
import Footer from "./../../components/footer/Footer";
import FotoPlan from "../../components/donacion/Fotoplan";
import InfoPlan from "../../components/donacion/InfoPlan";
import Foto from "../../assets/img/donacion/plan_5nuevahuella.jpg";
import '../../components/donacion/Plan.css'

function  NuevaHuella() {
    return (  
        <section>
            <Header/>
            <div className="bodyplan">
            <FotoPlan
                foto={Foto}  
                desf={"PLAN NUEVA HUELLA "}/>
            <InfoPlan
                nombre={"PLAN NUEVA HUELLA "}
                valor={"Aporte: $300.000"}
                descripcion={"Tu aporte permite cubrir los gastos veterinarios que se generan dentro de la fundación. Estos gastos abarcan cirugías, exámenes, vacunas y medicamentos necesarios para garantizar la buena salud de nuestros peludos."}
            />
            </div>
            <Footer/>
        </section>
    );           
}

export default NuevaHuella;     