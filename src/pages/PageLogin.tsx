import './styles/pageLogin.css'

export const PageLogin = () => {
  return (
    <div className='pageLogin'>
        <div className='loginContainer'>
            <form className='formLogin' action="">
                <label className='label' htmlFor="" placeholder='Nombre Usuario'>Usuario</label>
                <input className='input' type="text" />
                <label className='label' htmlFor="">Contraseña</label>
                <input className='input' type="password" />
                <button className='btn'>Ingresar</button>
            </form>
        </div>
    </div>
  ) }