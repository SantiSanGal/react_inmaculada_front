import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { inmacualdaApi } from "../../../api/inmaculadaApi"
import { ApiResponse } from './../../../interfaces/pageMenu';
import './styles/subpages.css'
import { PopupConfirmacion } from "../../../components/shared/PopupConfirmacion";

const getAllBrands = (setBrands: Dispatch<SetStateAction<ApiResponse>>) => {
    inmacualdaApi.get('/brand')
        .then(res => setBrands(res.data))
        .catch(err => console.log(err))
}

const handleClick = (setModal, id: number, method: string ) => {
    if (method == 'edit') {
        setModal(true);
    }else{
        setModal(true);
    }
}

export const Brands = () => {
    const [brands, setBrands] = useState<ApiResponse>({ data: [] })
    const [modal, setModal] = useState(false)

    useEffect(() => {
        getAllBrands(setBrands)
    }, [])

    return (
    <div className="subPage">
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
                                <button onClick={() => handleClick(setModal, item.id, 'edit')} className="btn edit">Edit</button>
                                <button onClick={() => handleClick(setModal, item.id, 'del')} className="btn del">Del</button>
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
            modal ? 
                <PopupConfirmacion setModal={setModal}/>
            :
                ''
        }
    </div>
  )
}