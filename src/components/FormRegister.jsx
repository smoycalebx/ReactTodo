import React ,{ useState}from 'react'
import CLlamados from './llamados/CLlamados';


function FormRegister() {
  
    const [Nombre, setNombre] = useState('');
    const [Apellido, setApellido] = useState('');
    const [Cedula, setCedula] = useState('');
    const [Contraseña, setContraseña] = useState('');

    

  

   async function  click() {
     await CLlamados.postUsers(Nombre,Apellido,Cedula,Contraseña)
    
  }
  return (
    <div>
      
      <h1>Register</h1>
      <label htmlFor="">Nombre</label>
      <input type="text" value={Nombre}  onChange={(e) => setNombre(e.target.value)}/>
      <label htmlFor="">Apellido</label>
      <input type="text" value={Apellido} onChange={(e) => setApellido(e.target.value)}/>
      <label htmlFor="">Cedula</label>
      <input type="Number" value={Cedula} onChange={(e) => setCedula(e.target.value)}/>
      <label htmlFor="">Contraseña</label>
      <input type="Password" value={Contraseña}  onChange={(e) => setContraseña(e.target.value)} />
      <button onClick={click}>Registrate</button>
    </div>
  )
}

export default FormRegister
