import React from 'react'
import { Lumiflex, Tranquiluxe } from 'uvcanvas'

function Prueba() {
  return (
    <div>
      
      <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      {/* Efecto Lumiflex */}
      <Lumiflex 
        className="fondo-animado"
        width={window.innerWidth} 
        height={window.innerHeight}
        intensity={0.8} // Ajusta la intensidad del efecto
      />

      {/* Efecto Tranquiluxe */}
      <Tranquiluxe 
        className="fondo-animado"
        width={window.innerWidth} 
        height={window.innerHeight}
        speed={0.5} // Ajusta la velocidad del efecto
      />

      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1 }}>
        <h1 style={{ color: "white", textAlign: "center", paddingTop: "20%" }}>hola</h1>
      </div>
    </div>

    </div>
  )
}

export default Prueba
