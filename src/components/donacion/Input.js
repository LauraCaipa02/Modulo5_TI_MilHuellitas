import React from "react";
import {	Input,Label,GrupoInput,Leyenda,IconoValidacion} from "../../elements/donacion/Formulariopago";
import { faCheck} from '@fortawesome/free-solid-svg-icons';

const ComponenteInput  = () => {
    return (
        <div>
            <Label htmlFor="nombre">Nombre</Label>
            <GrupoInput>
                <Input type="text" placeholder="Ingrese su nombre" id="nombre"/>
                <IconoValidacion icon={faCheck} />
            </GrupoInput>
            <Leyenda>Lorem ipsum dolor sit amet.</Leyenda>
        </div>  
    );
}

export default ComponenteInput;
