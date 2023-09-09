import { useState } from "react";
import { inmacualdaApi } from "../../api/inmaculadaApi";

export const ItemBrand = ({brand}) => {
    const [mostrarModal, setMostrarModal] = useState(false)

    const handleClick = (id: any, method: string ) => {
        if (method == 'edit') {
            console.log("edit");
            console.log(id);
            
        }else{
            setMostrarModal(true);            
        }
    }

    const handleDelete = (id) =>{
        inmacualdaApi.delete(`/brand/${id}`)
            .then(res => location.reload())
            .catch(err => console.log(err))
        
    }

    return (
        <div>
            <div key={brand.id}>
                <span>{brand.brand}</span>
                <span>{brand.description}</span>
                <span>{brand.status ? "Activo" : "Inactivo"}</span>
                <span className="botones">
                    <button onClick={() => handleClick(brand, 'edit')} className="btn edit">Edit</button>
                    <button onClick={() => handleClick(brand.id, 'del')} className="btn del">Del</button>
                </span>
            </div>
            {
                mostrarModal &&
                (<div className="modal">
                    <h1>¿Desea Eliminar la Marca?</h1>
                    <div>
                        <button onClick={() => handleDelete(brand.id)}>Confirmar</button>
                        <button onClick={()=> setMostrarModal(false)}>Cancelar</button>
                    </div>
                </div>)
            }            
        </div>
    )
}
