import { FC } from 'react';
import './styles/sidebarComponent.css'

export interface Props {
  menuHamburguesa: boolean;
}

export const SidebarComponent: FC<Props> = ({ menuHamburguesa }) => {
  return (
    <div className={`componentSidebar ${menuHamburguesa ? `show` : ''} `}>
        <div className="optionsidebar">Usuarios</div>
        <div className="optionsidebar">Clientes</div>
        <div className="optionsidebar">Stock</div>
        <div className="optionsidebar">Reportes</div>
    </div>
  )
}
