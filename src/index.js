import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Navigate,Route,Routes, } from "react-router-dom";
import './index.css';
//import Home from './pages/Home';
//import Adopcion from './pages/adopcion';
import Donacion from './pages/donacion/Donacion';
//import Aliados from './pages/Aliados';
//import Blog from './pages/Blog';
import Error404 from './pages/Error404';
import Pago from './pages/donacion/Pago';
import Cachorro from './pages/donacion/Cachorro';
import Abuelo from './pages/donacion/Abuelo';
import VidaFeliz from './pages/donacion/Vida_Feliz';
import Rehabilitacion from './pages/donacion/Rehabilitacion';
import NuevaHuella from './pages/donacion/Nueva_Huella';
import DobleHuella from './pages/donacion/Doble_Huella';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<BrowserRouter>
<Routes>
  {/* <Route path='/' element={<Home/>}></Route>
  <Route path='/adopcion' element={<Adopcion/>}></Route> */}
  <Route path='/donacion' element={<Donacion/>}></Route>
  {/* <Route path='/blog' element={<Blog/>}></Route>
  <Route path='/aliados' element={<Aliados/>}></Route> */}
  <Route path='*' element={<Error404/>}></Route>
  {/*<Route path='/home' element={<Navigate replace to={"/"}/>}></Route> */}
  <Route path='/pago' element={<Pago/>}></Route>
  <Route path='/plan/cachorro' element={<Cachorro/>}></Route>
  <Route path='/plan/abuelito' element={<Abuelo/>}></Route>
  <Route path='/plan/vida_feliz' element={<VidaFeliz/>}></Route>
  <Route path='/plan/rehabilitacion' element={<Rehabilitacion/>}></Route>
  <Route path='/plan/nueva_huella' element={<NuevaHuella/>}></Route>
  <Route path='/plan/doble_huella' element={<DobleHuella/>}></Route>

</Routes>
</BrowserRouter>
);
