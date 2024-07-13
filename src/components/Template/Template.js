import './Template.css';
import logo from './logo.png'
import { useNavigate } from 'react-router-dom';

function Template({children}) {
  const navigate = useNavigate();

  const handleClick = (ruta) => {
    navigate(ruta);
  };
  return (
    <div className="App">
      <header className="App-header">

        <div className='Menu-header'>
          <img src={logo} alt="logo" />
          <div className='container-buttons-header'>
            <button onClick={() => handleClick('/')}>HOME</button>
            <button onClick={() => handleClick('/nuevoVideo')}>NUEVO VIDEO</button>
          </div>
        </div>
       
       {children}
      </header>

    </div>
  );
}

export default Template;
