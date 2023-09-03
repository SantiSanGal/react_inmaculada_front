import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { inmacualdaApi } from "../../../api/inmaculadaApi"
import { Meta, ApiResponse } from './../../../interfaces/pageMenu';

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
    <div>
        subPageBrands    
        {
            brands.data?.map(item => (<li key={item.id}>{item.brand}</li>))
        }
    </div>
  )
}