import React from 'react'

const EditVideo = () => {
  return (
    <div>
        <input type='text' placeholder='ingrese el titulo'/>
        <input type='text' placeholder='ingrese el titulo'/>
        <input type='text' placeholder='ingrese el enlace de la imagen'/>
        <input type='text' placeholder='ingrese el enlace del video'/>
        <input type='text' placeholder='de que se trata el video?'/>
        <button className="btn">Guardar</button>
        <button className="btn">Limpiar</button>
    </div>
  )
}

export default EditVideo