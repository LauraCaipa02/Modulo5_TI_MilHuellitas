import './Footer.css';
import Clock from'./img/clock.svg';
import Facebook from'./img/facebook.svg';
import Gmail from'./img/gmail.svg';
import Instagram from'./img/instagram.svg';
import Locate from'./img/locate.svg';
import Phone from'./img/phone.svg';
import Youtube from'./img/youtube.svg';

function Footer(){
    return (
        <footer>
            <div class="footer__information">
                <div class="footer__information--piece primary">
                    <div class="footer__information--text">
                        <img src={Locate} alt="" />
                        <div>
                            <p>Sede Chapinero</p>
                            <p>Kra 12 #34-56, Rosales</p>
                        </div>
                    </div>
                    <div class="footer__information--text">
                        <img src={Phone} alt="" />
                        <div>
                            <p>(+57) 312 456 7890</p>
                        </div>
                    </div>
                </div>

                <div class="footer__information--piece secondary">
                    <div class="footer__information--text">
                        <img src={Gmail} alt="" />
                        <div>
                            <p>milhuellitas@correo. com</p>
                        </div>
                    </div>
                    <div class="footer__information--text">
                        <img src={Clock} alt="" />
                        <div>
                            <p>Todos los días</p>
                            <p> 8:00am - 7:00pm</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="footer__information--legaltext">
                <p><strong>Textos legales</strong></p>
                <p>Políticas de privacidad</p>
                <p>Política de cookies</p>
            </div>

            <div class="footer__social--media">
                <p><strong>Síguenos en redes sociales</strong></p>
                <div>
                    <a href="#"><img src={Instagram} alt="" /></a>
                    <a href="#"><img src={Facebook} alt="" /></a>
                    <a href="#"><img src={Youtube} alt="" /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;

