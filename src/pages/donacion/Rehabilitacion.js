import Header from "./../../components/header/Header";
import Footer from "./../../components/footer/Footer";
import FotoPlan from "../../components/donacion/Fotoplan";
import InfoPlan from "../../components/donacion/InfoPlan";
import Foto from "../../assets/img/donacion/plan_4rehabilitacion.jpg";
import '../../components/donacion/Plan.css'

function  Rehabilitacion() {
    return (  
        <section>
            <Header/>
            <div className="bodyplan">
            <FotoPlan
                foto={Foto}
                desf={"PlanRehabilitación"}/>
            <InfoPlan
                nombre={"PLAN REHABILITACIÓN "}
                valor={"Aporte: $200.000"}
                descripcion={"Tu aporte contribuye con el proceso de rehabilitación para aquellos peludos rescatados que han sufrido fracturas u otras condiciones que afectan su salud y han tenido intervenciones quirúrgicas."}
            />
            </div>
            <Footer/>
        </section>
    );           
}

export default Rehabilitacion;