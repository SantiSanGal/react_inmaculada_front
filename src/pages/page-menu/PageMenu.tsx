import { SidebarComponent } from '../../components/shared/SidebarComponent'
import { Header } from '../../components/shared/Header'
import './styles/pageMenu.css'
import { useState } from 'react'

export const PageMenu = () => {

  const [menuHamburguesa, setMenuHamburguesa] = useState(false)
  
  const handleClick = () => {
    console.log('xd');
    
  }

  return (
    <div className='pageMenu'>
      <Header
        menuHamburguesa={menuHamburguesa}
        setMenuHamburguesa={setMenuHamburguesa}
      />
      <SidebarComponent
        menuHamburguesa={menuHamburguesa}
      />
      <div onClick={handleClick} className="options">Registrar Compras</div>
      <div onClick={handleClick} className="options">Verificar Stock</div>
      <div onClick={handleClick} className="options">Nueva Venta</div>
      <div onClick={handleClick} className="options">Reportes</div>
    </div>
  )
}
