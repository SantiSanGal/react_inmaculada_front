import { FC } from 'react'
import './styles/header.css'
import { useNavigate } from 'react-router-dom';

interface Props {
  menuHamburguesa: boolean;
  setMenuHamburguesa: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header: FC<Props> = ({ menuHamburguesa, setMenuHamburguesa}) => {

  const navigate = useNavigate()

  const handleclick = () =>{
    setMenuHamburguesa(!menuHamburguesa)
  }

  return (
    <div className='componentHeader'>
      <h3 className='tituloHeader' onClick={() => navigate('/menu')}>Electro Inmaculada</h3>
      <button className='btn' onClick={handleclick}>
        <div className="contenedorMenuHamburguesa">
          <div className="itemMenuHamburgesa"></div>
          <div className="itemMenuHamburgesa"></div>
          <div className="itemMenuHamburgesa"></div>
        </div>
      </button>
    </div>
  )
}