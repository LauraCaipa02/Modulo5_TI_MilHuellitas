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

</Routes>
</BrowserRouter>
);
