import { useState } from "react";
import { inmacualdaApi } from "../../api/inmaculadaApi";

export const ItemCategory = ({category}) => {
    const handleClick = (string) => {
        console.log('xd');
        
    }
    const handleDelete = (id) => {
        console.log('xd', id);
        
    }
    return (
        <div className="itemComponent">
            <span>{category.brand}</span>
            <span>{category.description}</span>
            <span>{category.status ? "Activo" : "Inactivo"}</span>
            <span className="botones">
                <button onClick={() => handleClick('edit')} className="btn edit">Edit</button>
                <button onClick={() => handleClick('del')} className="btn del">Del</button>
            </span>
            {/* {
                mostrarModalDel &&
                (<div className="modal">
                    <h1>¿Desea Eliminar la Marca?</h1>
                    <div>
                        <button onClick={() => handleDelete(category.id)}>Confirmar</button>
                        <button onClick={()=> setMostrarModalDel(false)}>Cancelar</button>
                    </div>
                </div>)
            } */}
        </div>
    )
}
