import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { inmacualdaApi } from "../../../api/inmaculadaApi"
import { ApiResponse } from './../../../interfaces/pageMenu';

const getAllBrands = (setBrands: Dispatch<SetStateAction<ApiResponse>>) => {
    inmacualdaApi.get('/brand')
        .then(res => {
            setBrands(res.data);
            console.log(res);
            
        })
        .catch(err => console.log(err))
}

export const Brands = () => {
    const [brands, setBrands] = useState<ApiResponse>({ data: [] })

    useEffect(() => {
        getAllBrands(setBrands)
    }, [])

    console.log("brands", brands);
    
    
    return (
    <div className="subPageBrand">
        <ul>
            {
                brands.data?.map(item => (
                    <li 
                        key={item.id}
                    >
                        {item.brand}
                    </li>
                ))
            }
        </ul>
    </div>
  )
}