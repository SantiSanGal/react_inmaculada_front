import { useForm } from 'react-hook-form'
import './styles/pageLogin.css'
import { Login } from '../../interfaces';
import { inmacualdaApi } from '../../api/inmaculadaApi';
import axios from 'axios';

export const PageLogin = () => {

    const {register, handleSubmit } = useForm<Login>();

    const submit = (data:Login) => {
        inmacualdaApi.post('/auth/login', data)
            .then(res => {
                
            })
            .catch(err => console.log(err))
    }

  return (
    <div className='pageLogin'>
        <div className='loginContainer'>
            <form className='formLogin' onSubmit={handleSubmit(submit)}>
                <label className='label' htmlFor='nick'>Usuario</label>
                <input
                    {...register('nick')}
                    id='nick'
                    name='nick'
                    className='input'
                    type="text" 
                    placeholder='Ingrese Nombre nick'
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