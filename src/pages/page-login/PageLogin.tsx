import { useForm } from 'react-hook-form'
import './styles/pageLogin.css'
import { Login } from '../../interfaces';
import { inmacualdaApi } from '../../api/inmaculadaApi';
import { Notification } from '../../components/Notification';
import { useState } from 'react';

export const PageLogin = () => {
    const [notification, setNotification] = useState(false)

    const {register, handleSubmit } = useForm<Login>();

    const submit = (data:Login) => {
        inmacualdaApi.post('/auth/login', data)
            .then(res => {

                localStorage.setItem('nick', data.nick)  
            })
            .catch(err => {
                if (err.request.status == 400) {
                    setNotification(true) 
                    setTimeout(() => {
                        setNotification(false)
                    }, 2000)
                }
            })
    }

  return (
    <div className='pageLogin'>
        {
            notification ? <Notification message={'a'}/> : ''
        }

        <div className='loginContainer'>
            <form className='formLogin' onSubmit={handleSubmit(submit)}>
                <label className='label' htmlFor='nick'>Usuario</label>
                <input
                    {...register('nick')}
                    id='nick'
                    name='nick'
                    className='input'
                    type="text" 
                    placeholder='Ingrese Nombre de Usuario'
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