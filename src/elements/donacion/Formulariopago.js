import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const colores ={
    error:"#ec4b4b",
    borde:"#CBCBCB",
}

const Formulario = styled.form`
    display: grid;
    grid-template-columns: 1fr;
    gap:1px;

    @media screen and (min-width: 768px) {
    }
    
    @media screen and (min-width: 1024px) {
        grid-template-columns: 1fr 1fr;
        row-gap:5px;
        column-gap:50px;
    }
    
    @media screen and (min-width: 1200px) {
    }
`;

const Label = styled.label`
    display:block;
    font-weiht:500;
    padding: 10px;
    min-height:40px;
    cursor:pointer;
`
const GrupoInput = styled.div`
    position:relative;
    z-index:0;
`;

const Input=styled.input`
width:100%;
background: #FFFFFF;
border-radius: 6px;
height:45px;
line-height:50px;
padding: 0 20px 5px;
transition: 0.3 ease all;
border: 1px solid ${colores.borde};
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

&:focus{
    border: 2px solid var(--blue-light);
    outline:none;
    box-shadow: 3px 0px 10px rgba(163,163,163,0.4);
}
`;

const Leyenda=styled.p`
font-size:12px;
margin-bottom:0;
color:${colores.error};
display:none
`
const IconoValidacion=styled(FontAwesomeIcon)`
position: absolute;
right: 10px;
bottom: 14px;
z-index: 100;
font-size:16px;
color: var(--green-light-color );
opacity:0;
`;

const ContenedorTerminos=styled.div`
grid-column: span 2;
input{
    margin-right:10px;
}
`;

const ContenedorBotonCentrado=styled.div`
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
grid-column: span 2;
`;

const Boton = styled.button`
	height: 45px;
	line-height: 45px;
	width: 30%;
	background: #000;
	color: #fff;
	font-weight: bold;
	border: none;
	border-radius: 3px;
	cursor: pointer;
	transition: .1s ease all;

	&:hover {
		box-shadow: 3px 0px 30px rgba(163,163,163, 1);
	}
`;

const MensajeExito = styled.p`
	font-size: 14px;
	color:#8df162;
    display:none;
`;

const MensajeError = styled.div`
	height: 45px;
	line-height: 45px;
	background: var(--coral-color);
	padding: 0px 15px;
	border-radius: 3px;
	grid-column: span 2;
	p {
		margin: 0;
	} 
	b {
		margin-left: 10px;
	}
`;

export {
	Formulario,
	Label,
	GrupoInput,
	Input,
	Leyenda,
	IconoValidacion,
	ContenedorTerminos,
	ContenedorBotonCentrado,
	Boton,
	MensajeExito,
	MensajeError
};


