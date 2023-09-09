import { useEffect, useState } from "react"
import { inmacualdaApi } from "../../../api/inmaculadaApi"

const getAllCategories = (setCategory) => {
  inmacualdaApi.get('/category')
    .then(res => setCategory(res.data))
    .catch(err => console.log(err))
}

const handleClick = ( id: number, method: string ) => {
  if (method == 'edit') {
      
  }else{
      
  }
}

export const Category = () => {
  
  const [category, setCategory] = useState()  

  useEffect(() => {
    getAllCategories(setCategory)
  }, [])
  
  
  return (
    <div className="subPage">
        <table className="subPageCategory">
            <thead>
                <tr>
                    <th>N°</th>
                    <th>Category</th>
                    <th>Descripción</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    category?.data.map((item, i) => (
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