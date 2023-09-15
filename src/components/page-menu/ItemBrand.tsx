import { useState } from "react";
import { inmacualdaApi } from "../../api/inmaculadaApi";

export const ItemBrand = ({brand, setMostrarModal, setForEdit}) => {
    const [mostrarModalDel, setMostrarModalDel] = useState(false)

    const handleClick = (method: string ) => {
        if (method == 'edit') {
            setMostrarModal(true)
            setForEdit(true)
        }else{
            setMostrarModalDel(true);            
        }
    }

    const handleDelete = (id) =>{
        inmacualdaApi.delete(`/brand/${id}`)
            .then(res => location.reload())
            .catch(err => console.log(err))
    }

    return (
        <div className="itemComponent">
            <span>{brand.brand}</span>
            <span>{brand.description}</span>
            <span>{brand.status ? "Activo" : "Inactivo"}</span>
            <span className="botones">
                <button onClick={() => handleClick('edit')} className="btn edit">Edit</button>
                <button onClick={() => handleClick('del')} className="btn del">Del</button>
            </span>
            {
                mostrarModalDel &&
                (<div className="modal">
                    <h1>¿Desea Eliminar la Marca?</h1>
                    <div className="btn-container">
                        <button className="btn" onClick={() => handleDelete(brand.id)}>Confirmar</button>
                        <button className="btn" onClick={()=> setMostrarModalDel(false)}>Cancelar</button>
                    </div>
                </div>)
            }
        </div>
    )
}
