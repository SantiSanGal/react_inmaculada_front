import './styles/header.css'

export const Header = ({ menuHamburguesa, setMenuHamburguesa}) => {

  const handleclick = () =>{
    setMenuHamburguesa(!menuHamburguesa)
  }

  return (
    <div className='componentHeader'>
      Header
      <button onClick={handleclick}>X</button>
    </div>
  )
}