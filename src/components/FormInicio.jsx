import React, { useEffect, useState } from 'react';
import Llamados from '../components/llamados/Llamados';
import '../style/Inicio.css';

function FormInicio() {
  const [Nombre, setNombre] = useState('');
  const [Apellido, setApellido] = useState('');
  const [Cedula, setCedula] = useState('');
  const [Contraseña, setContraseña] = useState('');
  const [Formulario, setFormulario] = useState([]);
  const [editandoId, setEditandoId] = useState(null);

  useEffect(() => {
    async function mostrar() {
      try {
        const datos = await Llamados.getUsers();
        console.log("Datos obtenidos:", datos); // Verifica en la consola
        setFormulario(datos);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    }
    mostrar();
  }, []);

  const Click = async () => {
    if (editandoId) {
      console.log(editandoId);
          //Para devolver los datos al input y Actualizarlos
      await Llamados.updateUsers(Nombre, Apellido, Cedula, Contraseña, editandoId );
      setEditandoId(null);
      
    } else {
      await Llamados.postUsers(Nombre, Apellido, Cedula, Contraseña);
    }
    actualizarLista();
    limpiarCampos();
  };

  const eliminar = async (id) => {
    await Llamados.deleteUser(id);
    actualizarLista();
  };

  const editar = (usuario) => {
    setNombre(usuario.nombre);
    setApellido(usuario.apellido);
    setCedula(usuario.cedula);
    setContraseña(usuario.contraseña);
    setEditandoId(usuario.id);
  };

  const actualizarLista = async () => {
    try {
      const datos = await Llamados.getUsers();
      setFormulario(datos);
    } catch (error) {
      console.error("Error al actualizar los datos:", error);
    }
  };

  const limpiarCampos = () => {
    setNombre('');
    setApellido('');
    setCedula('');
    setContraseña('');
  };

  return (
    <div>
      <h1>Lista de Personas</h1>
      <label>Nombre:</label>
      <input type="text" value={Nombre} onChange={(e) => setNombre(e.target.value)} />

      <label>Apellido:</label>
      <input type="text" value={Apellido} onChange={(e) => setApellido(e.target.value)} />

      <label>Cédula:</label>
      <input type="number" value={Cedula} onChange={(e) => setCedula(e.target.value)} />

      <label>Crear Contraseña:</label>
      <input type="password" value={Contraseña} onChange={(e) => setContraseña(e.target.value)} />

      <div className='divButton'>
        <button onClick={Click}>{editandoId ? 'Actualizar' : 'Enviar'}</button>
      </div>

      <div className='divRest'>
        {Formulario.length > 0 ? (
          Formulario.map((usuario) => (
            <div key={usuario.id}>
              <p>Nombre: {usuario.nombre}</p>
              <p>Apellido: {usuario.apellido}</p>
              <p>Cédula: {usuario.cedula}</p>
              <button onClick={() => editar(usuario)}>Editar</button>
              <button onClick={() => eliminar(usuario.id)}>Eliminar</button>
            </div>
          ))
        ) : (
          <p>No hay datos disponibles</p>
        )}
      </div>
    </div>
  );
}

export default FormInicio;
