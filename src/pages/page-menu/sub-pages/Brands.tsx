import { useForm } from "react-hook-form";
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { inmacualdaApi } from "../../../api/inmaculadaApi"
import { ApiResponse } from './../../../interfaces/pageMenu';
import './styles/subpages.css'

const getAllBrands = (setBrands: Dispatch<SetStateAction<ApiResponse>>) => {
    inmacualdaApi.get('/brand')
        .then(res => setBrands(res.data))
        .catch(err => console.log(err))
}

const submit = (data) => {
    data.status = true
    inmacualdaApi.post('/brand', data)
        .then(res => console.log(res))
        .catch(err => console.log(err))

}

const handleClick = (id: number, method: string ) => {
    if (method == 'edit') {
        console.log("edit");
    }else{
        console.log('del');
    }
}

export const Brands = () => {
    const [brands, setBrands] = useState<ApiResponse>({ data: [] })
    const [mostrarModal, setMostrarModal] = useState(false)
    const {register, handleSubmit} = useForm();

    useEffect(() => {
        getAllBrands(setBrands)
    }, [])

    return (
    <div className="subPage">
        <div>
            <button onClick={() => setMostrarModal(true)}>Agregar</button>
        </div>
        <table className="subPageBrand">
            <thead>
                <tr>
                    <th>N°</th>
                    <th>Marca</th>
                    <th>Descripción</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    brands.data?.map((item, i) => (
                        <tr key={item.id}>
                            <td>{i+1}</td>
                            <td>{item.brand}</td>
                            <td>{item.description}</td>
                            <td>{item.status ? "Activo" : "Inactivo"}</td>
                            <td className="botones">
                                <button onClick={() => handleClick(item.id, 'edit')} className="btn edit">Edit</button>
                                <button onClick={() => handleClick(item.id, 'del')} className="btn del">Del</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={5}>Paginación</td>
                </tr>
            </tfoot>
        </table>

        {
            mostrarModal ?
            (<div className="modal">
                <h1>Agregar Nueva Marca</h1>
                <form className="formAddBrand" onSubmit={handleSubmit(submit)}>
                    <label className="label" htmlFor="brand"></label>
                    <input 
                        {...register('brand')}
                        id="brand"
                        name="brand"
                        className="input" 
                        type="text" 
                    />
                    <label className="label" htmlFor="description"></label>
                    <input
                        {...register('description')}
                        id="description"
                        name="description"
                        className="input" 
                        type="text" 
                    />
                    <button type="submit" className="btn">Agregar</button>
                    <button onClick={()=>setMostrarModal(false)} className="btn">Cancelar</button>
                </form>
            </div>)
            : ""
        }

    </div>
  )
}