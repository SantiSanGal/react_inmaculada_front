import { useForm } from "react-hook-form";
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { inmacualdaApi } from "../../../api/inmaculadaApi"
import { ApiResponse } from './../../../interfaces/pageMenu';
import './styles/subpages.css'
import { ItemBrand } from "../../../components/page-menu/ItemBrand";

const getAllBrands = (setBrands: Dispatch<SetStateAction<ApiResponse>>, setMetaPages, currentPage) => {
    let url = currentPage ? `/brand?page=${currentPage}` : '/brand';
    inmacualdaApi.get(url)
        .then(res => {
            setBrands(res.data)
            setMetaPages(res.data.meta)
            console.log(res.data);
        })
        .catch(err => console.log(err))
}

export const Brands = () => {
    const [brands, setBrands] = useState<ApiResponse>({ data: [] });
    const [mostrarModal, setMostrarModal] = useState(false);
    const {register, handleSubmit} = useForm();
    const [metaPages, setMetaPages] = useState();
    const [currentPage, setCurrentPage] = useState();
    
    const submit = (data) => {
        data.status = true
        inmacualdaApi.post('/brand', data)
            .then(res => {
                location.reload();
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getAllBrands(setBrands, setMetaPages, currentPage)
    }, [currentPage])

    return (
    <div className="subPage">
        <div className="contenedorAdd">
            <button className="btn add" onClick={() => {setMostrarModal(true)}}>Agregar</button>
        </div>
        <div className="subPageContainer">
            <div className="subPageContainer-header">
                    <div>Marca</div>
                    <div>Descripción</div>
                    <div>Estado</div>
                    <div>Acciones</div>
            </div>
            <div className="subPageContainer-items">
                {
                    brands.data?.map((item, i) => (
                        <ItemBrand 
                            key={item.id}
                            brand={item}
                        />
                    ))
                }
            </div>
            <div className="contenedorPaginacion">
                {Array.from({ length: metaPages?.last_page }, (_, i) => (
                    <button className={`btn ${metaPages?.current_page == i+1 ? 'activo':''}`}  
                        key={i} 
                        onClick={() => setCurrentPage(i + 1)}
                        >
                            {i + 1}
                        </button>
                ))}
            </div>
        </div>

        {
            mostrarModal && 
            (<div className="modal modal-add">
                <div className="titulo-container">
                    <h1>Agregar Nueva Marca</h1>
                </div>
                <form className="form" onSubmit={handleSubmit(submit)}>
                    <label className="label" htmlFor="brand">Marca</label>
                    <input 
                        {...register('brand')}
                        id="brand"
                        name="brand"
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