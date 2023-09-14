import { useForm } from "react-hook-form"
import { inmacualdaApi } from "../../../api/inmaculadaApi";

export const RegistrarUsuarios = () => {
    const { register, handleSubmit } = useForm()
    
    const submit = (data)=> {
        console.log("data", data);
        inmacualdaApi.post('/auth/register', data)
            .then(res => {
                console.log(res)
                location.reload()
            })
            .catch(err => console.log(err))
    }

    return (
    <div className="subPage">
        <div className="tituloContainer">
            <h1>Registrar Usuario</h1> 
        </div>
        <form onSubmit={handleSubmit(submit)}>
            <label className="label" htmlFor="nick">Username</label>
            <input
                {...register('nick')}
                id="nick"
                name="nick"
                className="input"
                type="text"
                placeholder="Ingrese Nombre de Usuario"
            />
            <label className="label" htmlFor="password">Password</label>
            <input
                {...register('password')}
                name="password"
                id="password"
                className="input" 
                type="password"
                placeholder="Ingrese la Contraseña" 
            />
            <button className="btn">Registrar</button>
        </form>
    </div>
  )
}
