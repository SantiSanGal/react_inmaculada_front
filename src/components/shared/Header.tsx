import { FC } from 'react'
import './styles/header.css'

export interface Props {
  menuHamburguesa: boolean;
  setMenuHamburguesa: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header: FC<Props> = ({ menuHamburguesa, setMenuHamburguesa}) => {

  const handleclick = () =>{
    setMenuHamburguesa(!menuHamburguesa)
  }

  return (
    <div className='componentHeader'>
      Header
      <button onClick={handleclick}>Abrir Sidebar</button>
    </div>
  )
}