import { SidebarComponent } from '../../components/shared/SidebarComponent'
import { Header } from '../../components/shared/Header'
import './styles/pageMenu.css'
import { useState } from 'react'
import { Brands } from './sub-pages/Brands'
import { Outlet, useNavigate } from 'react-router-dom'

export const PageMenu = () => {

  const [menuHamburguesa, setMenuHamburguesa] = useState(false)
  const navigate = useNavigate();

  const handleClick = (name: string) => {
    navigate(`/${name}`)
  }

  if (localStorage.getItem('nick')) {
    return (
      <div className='pageMenu'>
        <Header
          menuHamburguesa={menuHamburguesa}
          setMenuHamburguesa={setMenuHamburguesa}
        />
        <SidebarComponent
          menuHamburguesa={menuHamburguesa}
        />
        <div onClick={() => handleClick('compras')} className="options compras">Registrar Compras</div>
        <div onClick={() => handleClick('stock')} className="options stock">Verificar Stock</div>
        <div onClick={() => handleClick('ventas')} className="options ventas">Nueva Venta</div>
        <div onClick={() => handleClick('reportes')} className="options reportes">Reportes</div>
      </div>
    )
  }else{
    navigate('/')
  }
}
