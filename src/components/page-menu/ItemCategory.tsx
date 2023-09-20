import { useState } from "react";
import { inmacualdaApi } from "../../api/inmaculadaApi";
import { useForm } from "react-hook-form";

export const ItemCategory = ({category}) => {
    const [mostrarModalDel, setMostrarModalDel] = useState(false);
    const [mostarModalEdit, setMostarModalEdit] = useState(false);
    const [idEdit, setIdEdit] = useState();
    const {register, handleSubmit} = useForm();

    const handleClick = (id) => {
        console.log('xd', id);
        setMostarModalEdit(true)
        setIdEdit(id)    
    }

    const handleDelete = (id) => {
        inmacualdaApi.delete(`/category/${id}`)
            .then(res => location.reload())
            .catch(err => console.log(err))
    }

    const submit = (data) => {
        console.log("data", data);
        data.status = data.status == 'true' ? true : false;
        console.log("data", data);
        inmacualdaApi.patch(`/category/${idEdit}`)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    return (
        <div className="itemComponent">
            <span>{category.category}</span>
            <span>{category.description}</span>
            <span>{category.status ? "Activo" : "Inactivo"}</span>
            <span className="botones">
                <button onClick={()=>handleClick(category.id)} className="btn edit">Edit</button>
                <button onClick={() => setMostrarModalDel(true)} className="btn del">Del</button>
            </span>
            {
                mostrarModalDel &&
                (<div className="modal modal-del">
                    <h1>¿Desea Eliminar la Categoría?</h1>
                    <div className="btn-container">
                        <button className="btn btn-success" onClick={() => handleDelete(category.id)}>Confirmar</button>
                        <button className="btn btn-cancel" onClick={()=> setMostrarModalDel(false)}>Cancelar</button>
                    </div>
                </div>)
            }
            {
                mostarModalEdit && 
                (
                    <div className="modal modal-add">
                        <div className="titulo-container">
                            <h1>Editar Categoría</h1>
                        </div>
                        <form className="form" onSubmit={handleSubmit(submit)}>
                            <label className="label" htmlFor="category">Categoría</label>
                            <input 
                                {...register('category')}
                                id="category"
                                name="category"
                                className="input"
                                type="text"
                                defaultValue={category.category}
                                placeholder="Cambiar el Nombre de la categoría"
                            />
                            <label className="label" htmlFor="description">Descripción</label>
                            <input
                                {...register('description')}
                                id="description"
                                name="description"
                                className="input" 
                                type="text" 
                                defaultValue={category.description}
                                placeholder="Cambiar la Descripción de la Categoría"
                            />
                            <select {...register('status')} defaultValue={category.status ? 'true' : 'false'}>
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
