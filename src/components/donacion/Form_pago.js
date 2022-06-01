import React from "react";
import './Form_pago.css';
import {
	Formulario,	Label,	GrupoInput,	Input,Leyenda,IconoValidacion,ContenedorTerminos,	ContenedorBotonCentrado,	Boton,	MensajeExito,	MensajeError} from "../../elements/donacion/Formulariopago";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faExclamation} from '@fortawesome/free-solid-svg-icons';

const Form = () => {
    return ( 
        <main className="mainform">
            <Formulario>
                <div>
                <Label htmlFor="nombre">Nombre</Label>
                <GrupoInput>
                <Input type="text" placeholder="Ingrese su nombre" id="nombre"/>
                <IconoValidacion icon={faCheck} />
                </GrupoInput>
                <Leyenda>Lorem ipsum dolor sit amet.</Leyenda>
                </div>

                <div>
                <Label htmlFor="nombre">Apellidos</Label>
                <GrupoInput>
                <Input type="text" placeholder="Ingrese sus Apellidos" id="nombre"/>
                <IconoValidacion icon={faCheck} />
                </GrupoInput>
                <Leyenda>Lorem ipsum dolor sit amet.</Leyenda>
                </div>

                <div>
                <Label htmlFor="nombre">Ciudad</Label>
                <GrupoInput>
                <Input type="text" placeholder="Ingrese su ciudad" id="nombre"/>
                <IconoValidacion icon={faCheck} />
                </GrupoInput>
                <Leyenda>Lorem ipsum dolor sit amet.</Leyenda>
                </div>

                <div>
                <Label htmlFor="nombre">Municipio</Label>
                <GrupoInput>
                <Input type="text" placeholder="Ingrese su municipio" id="nombre"/>
                <IconoValidacion icon={faCheck} />
                </GrupoInput>
                <Leyenda>Lorem ipsum dolor sit amet.</Leyenda>
                </div>

                <div>
                <Label htmlFor="nombre">Dirección</Label>
                <GrupoInput>
                <Input type="text" placeholder="Ingrese su dirección" id="nombre"/>
                <IconoValidacion icon={faCheck} />
                </GrupoInput>
                <Leyenda>Lorem ipsum dolor sit amet.</Leyenda>
                </div>

                <div>
                <Label htmlFor="nombre">.</Label>
                <GrupoInput>
                <Input type="text" placeholder="Apartamento,bloque, etc." id="nombre"/>
                <IconoValidacion icon={faCheck} />
                </GrupoInput>
                <Leyenda>Lorem ipsum dolor sit amet.</Leyenda>
                </div>

                <div>
                <Label htmlFor="nombre">Teléfono</Label>
                <GrupoInput>
                <Input type="text" placeholder="Ingrese su número de teléfono" id="nombre"/>
                <IconoValidacion icon={faCheck} />
                </GrupoInput>
                <Leyenda>Lorem ipsum dolor sit amet.</Leyenda>
                </div>

                <div>
                <Label htmlFor="nombre">Correo Electrónico</Label>
                <GrupoInput>
                <Input type="text" placeholder="Ingrese su correo electrónico" id="nombre"/>
                <IconoValidacion icon={faCheck} />
                </GrupoInput>
                <Leyenda>Lorem ipsum dolor sit amet.</Leyenda>
                </div>

                <div>
                <Label htmlFor="nombre">Tipo de Documento</Label>
                <GrupoInput>
                <Input type="text" placeholder="Seleccione el tipo de documento" id="nombre"/>
                <IconoValidacion icon={faCheck} />
                </GrupoInput>
                <Leyenda>Lorem ipsum dolor sit amet.</Leyenda>
                </div>
                
                <div>
                <Label htmlFor="nombre">Documento de Identidad</Label>
                <GrupoInput>
                <Input type="text" placeholder="Ingrese su número de documento" id="nombre"/>
                <IconoValidacion icon={faCheck} />
                </GrupoInput>
                <Leyenda>Lorem ipsum dolor sit amet.</Leyenda>
                </div>

                <ContenedorTerminos>
                    <Label htmlFor="terminos">
                        <input type="checkbox" name="terminos" id="terminos"/>Acepto Términos y Condiciones
                    </Label>
                </ContenedorTerminos>
                {false && <MensajeError>
                    <p>
                    <FontAwesomeIcon icon={faExclamation}/>
                    <b>Error:</b>Por favor diligenciar el formulario correctamente
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