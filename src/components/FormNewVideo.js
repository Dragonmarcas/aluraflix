import React, { useEffect, useState } from 'react'
import CampoTexto from './CampoTexto/CampoTexto'
import OpcionesInput from './OpcionesInput/OpcionesInput'
import Template from './Template/Template'

const FormNewVideo = ({isEdit, editVideo, getVideos}) => {

  const [titulo, setTitulo] = useState("")
  const [imagen, setImagen] = useState("")
  const [video, setVideo] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [categorias, setCategorias] = useState("")
  

  useEffect(()=>{
    if(editVideo){
      setTitulo(editVideo.titulo)
      setImagen(editVideo.imagen)
      setVideo(editVideo.video)
      setDescripcion(editVideo.descripcion)
      setCategorias(editVideo.categorias)
    }
  },[editVideo])

  const CATEGORIAS = [
    'FRONT END',
    'BACK END',
    "INNOVACION Y GESTION",
  ]


  function onClean(){
    setTitulo("")
    setImagen("")
    setVideo("")
    setDescripcion("")
    setCategorias("")
  }

  async function onSubmit(event){
    if(!editVideo){
      const conexion = await fetch("http://localhost:3001/videos", {
          method: "POST",
          headers: {"Content-type":"application/json"},
          body: JSON.stringify({
            titulo,
            imagen,
            video,
            descripcion, 
            categorias
          })
      })
      
      const resultado = conexion.json()
  
      resultado.then((event)=>{
        onClean()
        return
      })
    }

    const conexion = await fetch(`http://localhost:3001/videos/${editVideo.id}`, {
      method: "PUT",
      headers: {"Content-type":"application/json"},
      body: JSON.stringify({
        titulo,
        imagen,
        video,
        descripcion, 
        categorias
      })
    })
    const resultado = conexion.json()
  
      resultado.then((event)=>{
        getVideos()
      })
  }
  return (
    <section>
        
            <h2>{isEdit && editVideo? "Editar Video": "Nuevo Video"}</h2>
            <p>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</p>
            <CampoTexto value={titulo} label="titulo" placeholder="ingrese el titulo..." onChange={(e)=>{setTitulo(e.target.value)}}/>
            <CampoTexto value={imagen} label="Imagen" placeholder="ingrese el enlace de la imagen" onChange={(e)=>{setImagen(e.target.value)}}/>
            <CampoTexto value={video} label="Video" placeholder="ingrese el enlace del video" onChange={(e)=>{setVideo(e.target.value)}}/>
            <CampoTexto value={descripcion} label="Descripcion" placeholder="de que se trata el video?" onChange={(e)=>{setDescripcion(e.target.value)}}/>
            <OpcionesInput value={categorias} label="Categorias" listOptions={CATEGORIAS} onChange={(e)=>{setCategorias(e.target.value)}}/>
            <button className="btn" onClick={onSubmit}>Guardar</button>
            <button className="btn" onClick={onClean}>Limpiar</button>
        
    </section>
  )
}

export default FormNewVideo