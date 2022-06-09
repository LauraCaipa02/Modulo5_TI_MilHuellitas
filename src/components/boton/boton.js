import Icono from '../../assets/img/donacion/huella_boton.svg';
import './boton.css';

function Boton() {
    return(
    <section className='botonc'>
        <div className='btn-container'>
            <button className='btn_pago'>Apadrinar</button>
            <a className="la_a" href='/src/pages/donacion/Cachorro.js'><img className='huella_btn' src={Icono} alt=""></img></a>
        </div>
        <a href='' className='plan'><i class="fa-solid fa-caret-left"></i>Otros Planes</a>
    </section>
    );
}

export default Boton;