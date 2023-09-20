import { FC, useState } from 'react';
import './styles/sidebarComponent.css'

export interface Props {
  menuHamburguesa: boolean;
}

export const SidebarComponent: FC<Props> = ({ menuHamburguesa }) => {
  const [mantenimiento, setMantenimiento] = useState(false);
  return (
    <div className={`componentSidebar ${menuHamburguesa ? `show` : ''} `}>
        <div className="optionSidebar clientes">Clientes</div>
        <div className="optionSidebar proveedores">Proveedores</div>
        <div 
          className={`optionSidebar mantenimiento ${mantenimiento ? "mantenimientoActivo" : ''}`}
          onClick={()=>setMantenimiento(!mantenimiento)}>
            Mantenimiento
        </div>
        <div className='subOptionsContainer' style={mantenimiento ? {} : { display: 'none' }}>
          <a href='/menu/registrar' className='subOptionSidebar'>Registrar Usuarios</a>
          <a href='/menu/brands' className='subOptionSidebar'>Marcas</a>
          <a href='/menu/category' className='subOptionSidebar'>Categorias</a>
          <a href='/menu/contact' className='subOptionSidebar'>Contactos</a>
        </div>
    </div>
  )
}
