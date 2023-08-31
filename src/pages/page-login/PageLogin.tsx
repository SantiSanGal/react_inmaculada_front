import { useForm } from 'react-hook-form'
import './styles/pageLogin.css'
import { Login } from '../../interfaces';

export const PageLogin = () => {

    const {register, handleSubmit } = useForm<Login>();

    const submit = (data:Login) => {
        //axios post
        console.log(data);
    }

  return (
    <div className='pageLogin'>
        <div className='loginContainer'>
            <form className='formLogin' onSubmit={handleSubmit(submit)}>
                <label className='label' htmlFor='usuario'>Usuario</label>
                <input
                    {...register('usuario')}
                    id='usuario'
                    name='usuario'
                    className='input'
                    type="text" 
                    placeholder='Ingrese Nombre Usuario'
                />
                <label className='label' htmlFor="password">Contraseña</label>
                <input
                    {...register('password')}
                    id='password'
                    name='password'
                    className='input' 
                    type="password" 
                    placeholder='Ingrese Contraseña'
                />
                <button className='btn'>Ingresar</button>
            </form>
        </div>
    </div>
  ) }