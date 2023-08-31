import { FC } from 'react';
import './styles/sidebarComponent.css'

export interface Props {
  menuHamburguesa: boolean;
}

export const SidebarComponent: FC<Props> = ({ menuHamburguesa }) => {
  return (
    <div className={`componentSidebar ${menuHamburguesa ? `show` : ''} `}>
        sidebar
    </div>
  )
}
