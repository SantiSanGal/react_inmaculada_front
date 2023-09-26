import { useEffect, useState } from "react"
import { inmacualdaApi } from "../../../api/inmaculadaApi"
import './styles/subpages.css'
import { ItemCategory } from "../../../components/page-menu/ItemCategory"
import { useForm } from "react-hook-form"

const getAllCategories = (setCategory, setMetaPages, currentPage) => {    
    let url = ``
  inmacualdaApi.get('/category')
    .then(res => {
        setCategory(res.data)
        setMetaPages(res.data.meta)
    })
    .catch(err => console.log(err))
}

export const Category = () => {
    const [mostrarModal, setMostrarModal] = useState(false);
    const {register, handleSubmit} = useForm();
    const [category, setCategory] = useState()
    const [metaPages, setMetaPages] = useState()
    const [currentPage, setCurrentPage] = useState();


  useEffect(() => {
    getAllCategories(setCategory, setMetaPages, currentPage)
  }, [])

  const submit = (data) => {
    data.status = true;
    inmacualdaApi.post('/category', data)
    .then(res => location.reload())
    .catch(err => console.log(err))
  }
  
  
  return (
    <div className="subPage">
        <div className="contenedorAdd">
            <button onClick={()=>setMostrarModal(true)} className="btn add">Agregar</button>
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
                    <button className="btn" key={i} onClick={() => setCurrentPage(i + 1)}>{i + 1}</button>
                ))}
            </div>
        </div>
        {
            mostrarModal && 
            (<div className="modal modal-add">
                <div className="titulo-container">
                    <h1>Agregar Nueva Categoría</h1>
                </div>
                <form className="form" onSubmit={handleSubmit(submit)}>
                    <label className="label" htmlFor="category">Categoría</label>
                    <input 
                        {...register('category')}
                        id="category"
                        name="category"
                        className="input" 
                        type="text"
                        placeholder="Ingrese Nombre de la Nueva Marca"
                    />
                    <label className="label" htmlFor="description">Descripción</label>
                    <input
                        {...register('description')}
                        id="description"
                        name="description"
                        className="input" 
                        type="text" 
                        placeholder="Ingrese Alguna Descripción"
                    />
                    <div className="btn-container">
                        <button type="submit" className="btn btn-success">Agregar</button>
                        <button onClick={()=>setMostrarModal(false)} className="btn btn-cancel">Cancelar</button>
                    </div>
                </form>
            </div>)
        }
    </div>
  )
}