import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { inmacualdaApi } from "../../../api/inmaculadaApi"
import { ApiResponse } from './../../../interfaces/pageMenu';
import './styles/subpages.css'

const getAllBrands = (setBrands: Dispatch<SetStateAction<ApiResponse>>) => {
    inmacualdaApi.get('/brand')
        .then(res => setBrands(res.data))
        .catch(err => console.log(err))
}


export const Brands = () => {
    const [brands, setBrands] = useState<ApiResponse>({ data: [] })

    useEffect(() => {
        getAllBrands(setBrands)
    }, [])

    console.log(brands);
    

    return (
    <div className="subPage subPageBrand">
        <table>
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
                            <td>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}