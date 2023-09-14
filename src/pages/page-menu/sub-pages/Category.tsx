import { useEffect, useState } from "react"
import { inmacualdaApi } from "../../../api/inmaculadaApi"
import './styles/subpages.css'
import { ItemCategory } from "../../../components/page-menu/ItemCategory"

const getAllCategories = (setCategory, setMetaPages) => {
  inmacualdaApi.get('/category')
    .then(res => {
        setCategory(res.data)
        setMetaPages(res.data.meta)
    })
    .catch(err => console.log(err))
}

const handlePageClick = (page) => {
    console.log("page", page);
}

export const Category = () => {
  
  const [category, setCategory] = useState()
  const [metaPages, setMetaPages] = useState()

  useEffect(() => {
    getAllCategories(setCategory, setMetaPages)
  }, [])
  
  
  return (
    <div className="subPage">
        <div className="contenedorAdd">
            <button className="btn add">Agregar</button>
        </div>
        <div className="subPageContainer">
            <div className="subPageContainer-header">
                <div>Category</div>
                <div>Descripción</div>
                <div>Estado</div>
                <div>Acciones</div>
            </div>
            <div className="subPageContainer-items">
                {
                    category?.data.map((item, i)=>(
                        <ItemCategory 
                            key={item.id}
                            category={item}    
                        />
                    ))
                }
            </div>
            <div className="contenedorPaginacion">
                {Array.from({ length: metaPages?.last_page }, (_, i) => (
                    <button key={i} onClick={() => handlePageClick(i + 1)}>{i + 1}</button>
                ))}
            </div>
        </div>
    </div>
  )
}