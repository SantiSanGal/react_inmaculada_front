import './styles/sidebarComponent.css'

export const SidebarComponent = ({ menuHamburguesa }) => {
  console.log('adfasf ', menuHamburguesa);
  
  return (
    // <div className="componentSidebar {menuHamburguesa ? show: ''}">
    <div className={`componentSidebar ${menuHamburguesa ? `show` : ''} `}>
        sidebar
    </div>
  )
}
