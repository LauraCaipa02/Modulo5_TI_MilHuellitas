import Header from "./../../components/header/Header";
import Footer from "./../../components/footer/Footer";
import FotoPlan from "../../components/donacion/Fotoplan";
import InfoPlan from "../../components/donacion/InfoPlan";
import Foto from "../../assets/img/donacion/plan_4rehabilitacion.jpg";
import '../../components/donacion/Plan.css';
import Huella from '../../assets/img/donacion/Union.png';
import Icono from '../../assets/img/donacion/huella_boton.svg'

function  Rehabilitacion() {
    return (  
        <section>
            <Header/>
            <div className="bodyplan">
            <FotoPlan
                foto={Foto}
                desf={"PlanRehabilitación"}/>
            <div>
            <InfoPlan
                nombre={"PLAN REHABILITACIÓN "}
                valor={"Aporte: $200.000"}
                descripcion={"Tu aporte contribuye con el proceso de rehabilitación para aquellos peludos rescatados que han sufrido fracturas u otras condiciones que afectan su salud y han tenido intervenciones quirúrgicas."}
            />
            <section>
            <div className='btn__pago btn__abuelito'>
            <a className='huella-btn' href='/src/pages/donacion/Cachorro.js'><img src={Icono} alt=""></img></a>
            <button>Apadrinar</button>
            </div>
            <a href='' className='planes link__rehabilitacion'><i class="fa-solid fa-caret-left"></i>Otros Planes</a>
            </section>
            <img src={Huella} alt=''className="Huella__rehabilitacion"/>
            </div>
            </div>
            <Footer/>
        </section>
    );           
}

export default Rehabilitacion;