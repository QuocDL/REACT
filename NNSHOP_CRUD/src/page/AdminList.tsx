import { useContext, useEffect } from 'react'
import '../style/Admin.scss'
import { ProductContext } from '../context/ProductContextProvider'
import axios from 'axios'
import { IProduct } from '../interfaces/IProduct'
import { Link } from 'react-router-dom'

const AdminList = () => {

    const {products, dispatch, formatVnd} = useContext(ProductContext)

    useEffect(()=>{
        (async ()=>{
            try {
                const {data} = await axios.get(`http://localhost:3000/products`)
                dispatch({type: "SET_PRODUCTS", payload: data})
                document.title = 'Sản phẩm Admin'
            } catch (error) {
                console.log(error)
            }
        })()
    },[])

    const onHandleRemove = async (id: any)=>{
        try {
            if(confirm('are you sure')){
                await axios.delete(`http://localhost:3000/products/${id}`)
                dispatch({type: "DELETE_PRODUCT", payload: id})
            }
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <>
    
    <div className="container">

          <table>
    <thead>
      <tr>
        <th>Product Name</th>
        <th>Image</th>
        <th>Category</th>
        <th>Price</th>
        <th>Oldprice</th>
        <th>  <Link className='addnew' to={`addproduct`}>
                Add New Product
            </Link></th>
      </tr>
    </thead>
    <thead></thead>
    <tbody>
        {products.value.map((item: IProduct, index: number)=>(
            <tr key={index}>
            <td style={{fontWeight: 'bold'}}>{item.title}</td>
            <td><img src={item.image} width={50} alt="" /></td>
            <td style={{color: '#9F9F9F'}}>{item.category}</td>
            <td>{formatVnd.format(item.price)}</td>
            <td>{formatVnd.format(item.oldprice || item.price)}</td>
            <td>
                <div className="action_table">
                    <button onClick={()=> onHandleRemove(item.id)}>Delete</button>
                    <Link to={`edit/${item.id}`}>Edit</Link>
                </div>
            </td>
            </tr>
        ))}
    </tbody>
  </table>
  <table></table>
    </div>

    </>
  )
}

export default AdminList
