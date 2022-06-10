import { Link } from 'react-router-dom';
import Icono from '../../assets/img/donacion/huella_boton.svg';
import './boton.css';

function Boton() {
    return(
    <section className='botonc'>
        <div className='btn-container'>
            <button className='btn_pago'>Apadrinar</button>
            <Link className="la_a" to="/donacion"><img className='huella_btn' src={Icono} alt=""></img></Link>
        </div>
        <Link to='/donacion' className='plan'><i class="fa-solid fa-caret-left"></i>Otros Planes</Link>
    </section>
    );
}

export default Boton;