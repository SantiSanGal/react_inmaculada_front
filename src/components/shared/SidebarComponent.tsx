import { FC } from 'react';
import './styles/sidebarComponent.css'

export interface Props {
  menuHamburguesa: boolean;
}

export const SidebarComponent: FC<Props> = ({ menuHamburguesa }) => {
  return (
    <div className={`componentSidebar ${menuHamburguesa ? `show` : ''} `}>
        {/* <div className="optionSidebar inicio">Inicio</div> */}
        <div className="optionSidebar clientes">Clientes</div>
        <div className="optionSidebar proveedores">Proveedores</div>
        <div className="optionSidebar mantenimiento">Mantenimiento</div>
        {/* mantenimineto>Usuarios/Marcas/Categorias */}
    </div>
  )
}
