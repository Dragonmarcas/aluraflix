import { useEffect, useState } from 'react';
import './App.css';
import HomeLastVideo from './components/HomeLastVideo/HomeLastVideo';
import Template from './components/Template/Template'
import ListVideos from './components/ListVideos/ListVideos';


function App() {
  const [videosPorCategoria, setVideosPorCategoria] =  useState({});
  const [lastVideo, setLastVideo] =  useState({});


  useEffect(()=>{
    listarVideos()
  },[])

  async function listarVideos(){
    const conexion = await fetch("http://localhost:3001/videos")

    const resultado = conexion.json()

    resultado.then((resultVideos)=>{

      const videos = {};
      for (const video of resultVideos) {
        console.log(video)
        const categoria = video.categorias;
        if (!videos[categoria]) {
          videos[categoria] = [];
        }
        videos[categoria].push(video);
      }
      setVideosPorCategoria(videos)
      setLastVideo(resultVideos.at(-1))
    })
}
  async function onDelete(id){
    const conexion = await fetch(`http://localhost:3001/videos/${id}`, {
      method: "DELETE"
  })

  const resultado = conexion.json()

  resultado.then((result)=>{
    listarVideos()
  })
  }
  return (
    <Template>
      {lastVideo && <HomeLastVideo videoPost={lastVideo}/>}
      {Object.entries(videosPorCategoria).map(([categoria, listaVideos]) => (
      <ListVideos key={categoria} categoria={categoria} listVideos={listaVideos} onDelete={onDelete} getVideos={listarVideos}/>
      ))}
       
    </Template>
  );
}

export default App;
