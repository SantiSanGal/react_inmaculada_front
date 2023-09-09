import './styles/PopupConfirmacion.css'

const handleClick = (setModal, option) => {
    setModal(false)
    console.log('option', option);
    
}

export const PopupConfirmacion = ({setModal}) => {
  return (
    <div className="PopupConfirmacion">
        <h1>Mensaje!</h1>
        <div className='contenedorDeBotones'>
            <button onClick={()=> handleClick(setModal, 'OK')} className='btn '>OK</button>
            <button onClick={()=> handleClick(setModal, 'Cancel')} className='btn '>Cancel</button>
        </div>
    </div>
  )
}
