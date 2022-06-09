import Header from "./../../components/header/Header";
import Footer from "./../../components/footer/Footer";
import FotoPlan from "../../components/donacion/Fotoplan";
import InfoPlan from "../../components/donacion/InfoPlan";
import Foto from "../../assets/img/donacion/plan_5nuevahuella.jpg";
import '../../components/donacion/Plan.css';
import Huella from '../../assets/img/donacion/Union.png';
import Icono from '../../assets/img/donacion/huella_boton.svg'

function  NuevaHuella() {
    return (  
        <section>
            <Header/>
            <div className="bodyplan">
            <FotoPlan
                foto={Foto}  
                desf={"PLAN NUEVA HUELLA "}/>
            <div>
            <InfoPlan
                nombre={"PLAN NUEVA HUELLA "}
                valor={"Aporte: $300.000"}
                descripcion={"Tu aporte permite cubrir los gastos veterinarios que se generan dentro de la fundación. Estos gastos abarcan cirugías, exámenes, vacunas y medicamentos necesarios para garantizar la buena salud de nuestros peludos."}
            />
            <section>
            <div className='btn__pago btn__nuevopago'>
            <a className='huella-btn' href='/src/pages/donacion/Cachorro.js'><img src={Icono} alt=""></img></a>
            <button>Apadrinar</button>
            </div>
            <a href='' className='planes link__nuevahuella'><i class="fa-solid fa-caret-left"></i>Otros Planes</a>
            </section>
            <img src={Huella} alt=''className="Huella__nuevahuella"/>
            </div>
            </div>
            <Footer/>
        </section>
    );           
}

export default NuevaHuella;     