import React,{useEffect, useState,} from 'react'

import '../style/login.css'
import CLlamados from './llamados/CLlamados';
import { useNavigate } from 'react-router-dom';



function FormLogin() {
  const [users, setusers] = useState([]);
  const [Nombre, setNombre] = useState('');
  const [Apellido, setApellido] = useState('');
  const [Contraseña, setContraseña] = useState('');

  const navigate = useNavigate()
  
  useEffect(() => {
  async function mostrar() {
      try {
      const datos = await CLlamados.getUsers();
      console.log("Datos obtenidos:", datos);
      setusers(datos);
      } catch (error) {
      console.error("Error al obtener los datos:", error);
      }
  }
  mostrar();
  }, []);

  function Click(){

    const Usuarios= users.filter(users => users.nombre === Nombre && users.apellido=== Apellido && users.contraseña===Contraseña);
    console.log(Usuarios);
    
    if(Usuarios.length !== 0){
      navigate("/Inicio")
    } else{
      alert("Usuario no encontrado")
    }
    

  }

  return (
    <div>
    <label htmlFor="">Nombre</label>
    <input type="text" value={Nombre} onChange={(e) => setNombre(e.target.value)}/>
    <label htmlFor="">Apellido</label>
    <input type="text"  value={Apellido} onChange={(e) => setApellido(e.target.value)}/>
    <label htmlFor="">Contraseña</label>
    <input type="password" value={Contraseña} onChange={(e) => setContraseña(e.target.value)}/>
    <div className='btnEnviar'>
    <button onClick={Click}>Enviar</button>
    </div>
    <p>Aún no tienes una cuenta? <a href="http://localhost:5173/Register">Registrate aquí</a></p>
      
    </div>
  )
}

export default FormLogin
