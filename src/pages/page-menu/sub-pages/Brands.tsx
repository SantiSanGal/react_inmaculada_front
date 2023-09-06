import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { inmacualdaApi } from "../../../api/inmaculadaApi"
import { ApiResponse } from './../../../interfaces/pageMenu';
import './styles/subpages.css'

const getAllBrands = (setBrands: Dispatch<SetStateAction<ApiResponse>>) => {
    inmacualdaApi.get('/brand')
        .then(res => setBrands(res.data))
        .catch(err => console.log(err))
}

const handleClick = ( id: number, method: string ) => {
    if (method == 'edit') {
        
    }else{
        
    }
}

export const Brands = () => {
    const [brands, setBrands] = useState<ApiResponse>({ data: [] })

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
    </div>
  )
}