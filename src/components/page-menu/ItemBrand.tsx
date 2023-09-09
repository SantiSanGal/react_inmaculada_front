
const handleClick = (id: number, method: string ) => {
    if (method == 'edit') {
        console.log("edit");
    }else{
        console.log('del');
    }
}


export const ItemBrand = ({brand}) => {
  return (
    <tr key={brand.id}>
        <td>{brand.brand}</td>
        <td>{brand.description}</td>
        <td>{brand.status ? "Activo" : "Inactivo"}</td>
        <td className="botones">
            <button onClick={() => handleClick(brand.id, 'edit')} className="btn edit">Edit</button>
            <button onClick={() => handleClick(brand.id, 'del')} className="btn del">Del</button>
        </td>
    </tr>
  )
}
