import { useForm } from 'react-hook-form'
import './styles/pageLogin.css'
import { Login } from '../../interfaces';
import { inmacualdaApi } from '../../api/inmaculadaApi';
import { Notification } from '../../components/shared/Notification';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const PageLogin = () => {
    const [notification, setNotification] = useState(false)
    const {register, handleSubmit } = useForm<Login>();
    const navigate = useNavigate();

    const submit = (data:Login) => {
        inmacualdaApi.post('/auth/login', data)
            .then(res => {
                console.log(res);                
                localStorage.setItem('nick', data.nick)
                navigate('/menu')
            })
            .catch(err => {
                if (err.request.status == 400) {
                    setNotification(true) 
                    setTimeout(() => {
                        setNotification(false)
                    }, 3000)
                }
            })
    }

  return (
    <div className='pageLogin'>

        {
            notification ? <Notification 
                    message='Usuario o Contraseña incorrecta'
                    type='danger'
                /> : ''
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