import React from 'react'
import './ListVideos.css'
import VideoCard from '../VideoCard/VideoCard';

const ListVideos = ({listVideos, categoria, onDelete, getVideos}) => {

  return (
    <section className='container'>
      <button className={categoria.split(" ")[0]}>{categoria}</button>
      <div className='video-container'>
      {listVideos.map((video) => {
          return (<VideoCard onDelete={onDelete} video={video} getVideos={getVideos}/>);
      })}
      </div>
    </section>
  )
}

export default ListVideos