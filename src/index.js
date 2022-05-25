import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Navigate,Route,Routes, } from "react-router-dom";
import './index.css';
import Donacion from './pages/donacion/Donacion';
import Error404 from './pages/Error404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  
  <Routes>

  {/* <Route path='/' element={<Home/>}></Route>
  <Route path='/aboutme' element={<Adopcion/>}></Route> */}
  <Route path='/donacion' element={<Donacion/>}></Route>
  {/* <Route path='/studies' element={<Blog/>}></Route>
  <Route path='/skills' element={<Aliados/>}></Route>*/}
  <Route path='*' element={<Error404/>}></Route>
  {/*<Route path='/home' element={<Navigate replace to={"/"}/>}></Route> 
  <Route path='/jobs/:id' element={<Job/>}></Route>
  <Route path='/studies/:id' element={<Study/>}></Route> */}

  </Routes>

  </BrowserRouter>
);
