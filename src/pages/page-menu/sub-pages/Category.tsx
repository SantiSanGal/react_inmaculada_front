import { useEffect } from "react"
import { inmacualdaApi } from "../../../api/inmaculadaApi"

const getAllCategories = () => {
  inmacualdaApi.get('/category')
    .then(res => console.log("res ", res))
    .catch(err => console.log(err))
}

export const Category = () => {
  
  useEffect(() => {
    getAllCategories()
  }, [])
  
  
  return (
    <div>
      Category
    </div>
  )
}