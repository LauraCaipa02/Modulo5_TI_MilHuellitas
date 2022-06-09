import Header from "./../../components/header/Header";
import Footer from "./../../components/footer/Footer";
import FotoPlan from "../../components/donacion/Fotoplan";
import InfoPlan from "../../components/donacion/InfoPlan";
import Foto from "../../assets/img/donacion/plan_6doblehuella.jpg";
import '../../components/donacion/Plan.css';
import Huella from '../../assets/img/donacion/Union.png';
import Icono from '../../assets/img/donacion/huella_boton.svg'

function  DobleHuella() {
    return (  
        <section>
            <Header/>
            <div className="bodyplan">
            <FotoPlan
                foto={Foto}
                desf={"Plan Doble Huella"}/>
            <div>
            <InfoPlan
                nombre={"PLAN DOBLE HUELLA"}
                valor={"Aporte: $500.000"}
                descripcion={"Tu aporte permite cubrir la estadía de los peludos dentro de la fundación, incluye alimentación, control veterinario con examenes, baños, tambien contribuye con el mantenimiento de las instalaciones."}
            />
            <section>
            <div className='btn__pago btn__doble_huella'>
            <a className='huella-btn' href='/src/pages/donacion/Cachorro.js'><img src={Icono} alt=""></img></a>
            <button>Apadrinar</button>
            </div>
            <a href='' className='planes link__doble_huella'><i class="fa-solid fa-caret-left"></i>Otros Planes</a>
            </section>
            <img src={Huella} alt=''className="Huella__doblehuella"/>
            </div>
            </div>
            <Footer/>
        </section>
    );           
}

export default DobleHuella; 