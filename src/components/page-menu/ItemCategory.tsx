import { useState } from "react";
import { inmacualdaApi } from "../../api/inmaculadaApi";

export const ItemCategory = ({category}) => {
    const [mostrarModalDel, setMostrarModalDel] = useState(false);
    const [mostarModalEdit, setMostarModalEdit] = useState(false);
    
    const handleClick = (string) => {
        console.log('xd');    
    }

    const handleDelete = (id) => {
        inmacualdaApi.delete(`/category/${id}`)
            .then(res => location.reload())
            .catch(err => console.log(err))
    }

    return (
        <div className="itemComponent">
            <span>{category.category}</span>
            <span>{category.description}</span>
            <span>{category.status ? "Activo" : "Inactivo"}</span>
            <span className="botones">
                <button onClick={() => handleClick('edit')} className="btn edit">Edit</button>
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
