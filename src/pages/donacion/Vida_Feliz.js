import Header from "./../../components/header/Header";
import Footer from "./../../components/footer/Footer";
import FotoPlan from "../../components/donacion/Fotoplan";
import InfoPlan from "../../components/donacion/InfoPlan";
import Foto from "../../assets/img/donacion/plan_3vidafeliz.jpg";
import '../../components/donacion/Plan.css';
import Huella from '../../assets/img/donacion/Union.png';
import Icono from '../../assets/img/donacion/huella_boton.svg'

function  VidaFeliz() {
    return (  
        <section>
            <Header/>
            <div className="bodyplan">
            <FotoPlan
                foto={Foto}
                desf={"PlanVidaFeliz"}/>
            <div>
            <InfoPlan
                nombre={"PLAN VIDA FELIZ"}
                valor={"Aporte: $150.000"}
                descripcion={"Tu aporte contribuye con los gastos que conlleva un nuevo rescate, entre ellos el traslado, la estadía y chequeo médico del peludo con su respectivo  tratamiento. "}
            />
            <section>
            <div className='btn__pago btn__abuelito'>
            <a className='huella-btn' href='/src/pages/donacion/Cachorro.js'><img src={Icono} alt=""></img></a>
            <button>Apadrinar</button>
            </div>
            <a href='' className='planes link__vidafeliz'><i class="fa-solid fa-caret-left"></i>Otros Planes</a>
            </section>
            <img src={Huella} alt=''className="Huella__vidafeliz"/>
            </div>
            </div>
        </section>
    );           
}

export default VidaFeliz;