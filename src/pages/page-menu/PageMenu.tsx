import { SidebarComponent } from '../../components/shared/SidebarComponent'
import { Header } from '../../components/shared/Header'
import './styles/pageMenu.css'
import { useState } from 'react'
import { Brands } from './sub-pages/Brands'
import { Outlet } from 'react-router-dom'

export const PageMenu = () => {

  const [menuHamburguesa, setMenuHamburguesa] = useState(false)
  
  const handleClick = () => {
    console.log('xd');
  }

  if (localStorage.getItem) {
    
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
      <div>
        {
          menuHamburguesa ? 
          (<div onClick={handleClick} className="options compras">Registrar Compras</div>
            // <div onClick={handleClick} className="options stock">Verificar Stock</div>
            // <div onClick={handleClick} className="options ventas">Nueva Venta</div>
            // <div onClick={handleClick} className="options reportes">Reportes</div>
          ) : <Outlet/>
        }
      </div>
      {/* <Outlet/> */}
    </div>
  )
}
