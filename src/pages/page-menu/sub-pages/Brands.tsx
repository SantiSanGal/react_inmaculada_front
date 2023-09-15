import { useForm } from "react-hook-form";
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { inmacualdaApi } from "../../../api/inmaculadaApi"
import { ApiResponse } from './../../../interfaces/pageMenu';
import './styles/subpages.css'
import { ItemBrand } from "../../../components/page-menu/ItemBrand";

const getAllBrands = (setBrands: Dispatch<SetStateAction<ApiResponse>>, setMetaPages) => {
    inmacualdaApi.get('/brand')
        .then(res => {
            setBrands(res.data)
            setMetaPages(res.data.meta)
            console.log(res.data);
            
        })
        .catch(err => console.log(err))
}

const submit = (data) => {
    data.status = true
    inmacualdaApi.post('/brand', data)
        .then(res => {
            location.reload();
        })
        .catch(err => console.log(err))

}

const handlePageClick = (page) => {
    console.log("page", page);
}


export const Brands = () => {
    const [brands, setBrands] = useState<ApiResponse>({ data: [] });
    const [mostrarModal, setMostrarModal] = useState(false);
    const [forEdit, setForEdit] = useState(false);
    const {register, handleSubmit} = useForm();
    const [metaPages, setMetaPages] = useState();
    console.log("metaPages", metaPages);
    

    useEffect(() => {
        getAllBrands(setBrands, setMetaPages)
    }, [])

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
                            setMostrarModal={setMostrarModal}
                            setForEdit={setForEdit}
                        />
                    ))
                }
            </div>
            <div className="contenedorPaginacion">
                {Array.from({ length: metaPages?.last_page }, (_, i) => (
                    <button className="btn"  key={i} onClick={() => handlePageClick(i + 1)}>{i + 1}</button>
                ))}
            </div>
        </div>

        {
            mostrarModal && 
            (<div className="modal">
                <h1>Agregar Nueva Marca</h1>
                <form className="formBrand" onSubmit={handleSubmit(submit)}>
                    <label className="label" htmlFor="brand"></label>
                    <input 
                        {...register('brand')}
                        id="brand"
                        name="brand"
                        className="input" 
                        type="text" 
                    />
                    <label className="label" htmlFor="description"></label>
                    <input
                        {...register('description')}
                        id="description"
                        name="description"
                        className="input" 
                        type="text" 
                    />
                    <button type="submit" className="btn">Agregar</button>
                    <button onClick={()=>setMostrarModal(false)} className="btn">Cancelar</button>
                </form>
            </div>)
        }
    </div>
  )
}