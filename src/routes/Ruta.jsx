import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from '../pages/Inicio';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Prueba from '../pages/prueba';


function Ruta() {


    return (
        <div>
        <Router>
            <Routes>
        
                            

                                <Route path="/Inicio" element={<Inicio/>}/>
                                <Route path="/Login" element={<Login/>}/>
                                <Route path="/Register" element={<Register/>}/>
                                <Route path='/prueba' element={<Prueba/>}/>




                        
                                
            </Routes>
        </Router>
        </div>
    );
    }

export default Ruta

