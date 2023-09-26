import { useState } from "react";
import { inmacualdaApi } from "../../api/inmaculadaApi";
import { useForm } from "react-hook-form";

export const ItemBrand = ({brand}) => {
    const [idEdit, setIdEdit] = useState()
    const [mostrarModalDel, setMostrarModalDel] = useState(false)
    const [mostarModalEdit, setMostarModalEdit] = useState(false)
    const {register, handleSubmit} = useForm()


    const handleClick = (method: string, id: number ) => {
        setMostarModalEdit(true);
        setIdEdit(id);
    }

    const handleDelete = (id) =>{
        inmacualdaApi.delete(`/brand/${id}`)
            .then(res => location.reload())
            .catch(err => console.log(err))
    }

    const submit = (data) => {
        console.log("data", data);
        data = {
            brand: data.brand,
            desciption: data.description,
            status: data.status == 'true' ? true : false
        }
        console.log("data", data);
        inmacualdaApi.patch(`/brand/${idEdit}`, data)
            .then(res => location.reload())
            .catch(err => console.log(err))
    }

    return (
        <div className="itemComponent">
            <span>{brand.brand}</span>
            <span>{brand.description}</span>
            <span>{brand.status ? "Activo" : "Inactivo"}</span>
            <span className="btn-container">
                <button onClick={() => handleClick('edit', brand.id)} className="btn edit">Edit</button>
                <button onClick={() => setMostrarModalDel(true)} className="btn del">Del</button>
            </span>
            {
                mostrarModalDel &&
                (<div className="modal modal-del">
                    <h1>¿Desea Eliminar la Marca?</h1>
                    <div className="btn-container">
                        <button className="btn btn-success" onClick={() => handleDelete(brand.id)}>Confirmar</button>
                        <button className="btn btn-cancel" onClick={()=> setMostrarModalDel(false)}>Cancelar</button>
                    </div>
                </div>)
            }
            {
                mostarModalEdit && 
                (
                    <div className="modal modal-add">
                        <div className="titulo-container">
                            <h1>Editar Marca</h1>
                        </div>
                        <form className="form" onSubmit={handleSubmit(submit)}>
                            <label className="label" htmlFor="brand">Marca</label>
                            <input 
                                {...register('brand')}
                                id="brand"
                                name="brand"
                                className="input"
                                type="text"
                                defaultValue={brand.brand}
                                placeholder="Cambiar el Nombre de la Marca"
                            />
                            <label className="label" htmlFor="description">Descripción</label>
                            <input
                                {...register('description')}
                                id="description"
                                name="description"
                                className="input" 
                                type="text" 
                                defaultValue={brand.description}
                                placeholder="Cambiar la Descripción de la Marcar"
                            />
                            <select {...register('status')} defaultValue={brand.status ? 'true' : 'false'}>
                                <option value='true'>Activo</option>
                                <option value='false'>Inactivo</option>
                            </select>
                            <div className="btn-container">
                                <button type="submit" className="btn btn-success">Confirmar</button>
                                <button onClick={()=>setMostarModalEdit(false)} className="btn btn-cancel">Cancelar</button>
                            </div>
                        </form>
                    </div>
                )
            }
        </div>
    )
}
