import React, {useState} from 'react'
import './VideoCard.css'
import Modal from '../modal/modal';
import FormNewVideo from '../FormNewVideo';

const VideoCard = ({video, onDelete, getVideos}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModal1Open, setIsModal1Open] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openModal1 = () => setIsModal1Open(true);
  const closeModal1 = () => setIsModal1Open(false);

  return (
    <div className={`card-container ${video.categorias.split(" ")[0]}`}>
        <img src={video.imagen} alt="logo" />
        <div className='button-container'>
          <button onClick={()=>{onDelete(video.id)}}>BORRAR</button>
          <button onClick={openModal}>EDITAR</button>
          <button onClick={openModal1}>VER</button>
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <FormNewVideo isEdit={true} editVideo={video} getVideos={getVideos}/>
        </Modal>
        <Modal isOpen={isModal1Open} onClose={closeModal1}>
        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video.video}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal>
    </div>
  )
}

export default VideoCard