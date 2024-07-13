import React from 'react'
import './HomeLastVideo.css'
const HomeLastVideo = ({videoPost}) => {
  return (
    <div className='banner-container'>
      <div className='rectangulo'></div>
      <div className='container-card-home'>
        <div>
          <button className={videoPost.categorias}>{videoPost.categorias}</button>
          <h2>{videoPost.titulo}</h2>
          <p>{videoPost.descripcion}</p>
        </div>
        <img className={videoPost.categorias} src={videoPost.imagen} alt="logo" />

      </div>
    </div>
  )
}

export default HomeLastVideo