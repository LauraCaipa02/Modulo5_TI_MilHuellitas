import React from "react";
import './Form_pago.css';
import {Formulario,	Label,	GrupoInput,Leyenda,IconoValidacion,ContenedorTerminos,	ContenedorBotonCentrado,	Boton,	MensajeExito,	MensajeError} from "../../elements/donacion/Formulariopago";
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation} from '@fortawesome/free-solid-svg-icons';
import ComponenteInput from "./Input";

const Form = () => {
    return ( 
        <main className="mainform">
            <Formulario>
                <ComponenteInput/>

                <ContenedorTerminos>
                    <Label htmlFor="terminos">
                        <input type="checkbox" name="terminos" id="terminos"/>Acepto Términos y Condiciones
                    </Label>
                </ContenedorTerminos>
                {false && <MensajeError>
                    <p>
                    <FontAwesomeIcon icon={faExclamation}/>
                    <b>Error: </b>Por favor diligenciar el formulario correctamente
                    </p>
                </MensajeError>}
                <ContenedorBotonCentrado>
                    <Boton type="submit">Ir a pago</Boton>
                    <MensajeExito>Formulario enviado Exitosamente</MensajeExito>
                    <a>Regresar</a>
                </ContenedorBotonCentrado>
            </Formulario>
        
        </main>
    );
}

export default Form;