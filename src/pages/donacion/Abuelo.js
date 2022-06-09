import Header from "./../../components/header/Header";
import Footer from "./../../components/footer/Footer";
import FotoPlan from "../../components/donacion/Fotoplan";
import InfoPlan from "../../components/donacion/InfoPlan";
import Foto from "../../assets/img/donacion/plan_2abuelito.jpg";
import '../../components/donacion/Plan.css'
import Huella from '../../assets/img/donacion/Union.png';
import Icono from '../../assets/img/donacion/huella_boton.svg'

function  Abuelo() {
    return (  
        <section>
            <Header/>
            <div className="bodyplan">
            <FotoPlan
                foto={Foto}
                desf={"PlanAbuelito"}/>
            <div>
                <InfoPlan
                nombre={"PLAN ABUELITO"}
                valor={"Aporte: $120.000"}
                descripcion={"Tu aporte contribuye a cubrir los cuidados especiales de los abuelitos que tenemos en la fundación, tales como refuerzo de vacunas, alimento especifico para su edad y exámenes de control."}
            />
            <section>
            <div className='btn__pago btn__abuelito'>
            <a className='huella-btn' href='/src/pages/donacion/Cachorro.js'><img src={Icono} alt=""></img></a>
            <button>Apadrinar</button>
            </div>
            <a href='' className='planes link__abuelito'><i class="fa-solid fa-caret-left"></i>Otros Planes</a>
            </section>
            <img src={Huella} alt=''className="Huella__abuelito"/>
            </div>
            </div>
            <Footer/>
        </section>
    );           
}

export default Abuelo;