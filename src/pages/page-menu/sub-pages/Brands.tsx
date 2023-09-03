import { useEffect, useState } from "react"
import { inmacualdaApi } from "../../../api/inmaculadaApi"

const getAllBrands = (setBrands) => {
    inmacualdaApi.get('/brand')
        .then(res => {
            setBrands(res.data);
        })
        .catch(err => console.log(err))
}

export const Brands = () => {
    const [brands, setBrands] = useState([])

    useEffect(() => {
        getAllBrands(setBrands)
    }, [])

    console.log("brands", brands);
    
    
    return (
    <div>
        subPageBrands    
        {
            brands.data?.map(item => (<li>{item.brand}</li>))
        }
    </div>
  )
}