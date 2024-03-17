import { useContext, useEffect } from 'react'
import '../style/Form.scss'
import { ProductContext } from '../context/ProductContextProvider'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'



type FormValue = {
    title: string
    category: string
    image: string
    price: number
    oldprice: number
}
const FormProduct = () => {
    const {dispatch} = useContext(ProductContext)
    const {id} = useParams()
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm<FormValue>()

    const navigate = useNavigate()

    const onSubmit: SubmitHandler<FormValue> = async(data) =>{
       if(!id){
         try {
            await axios.post(`http://localhost:3000/products`, data);
             dispatch({type: "ADD_PRODUCTS", payload: data})
             navigate('/admin')
        } catch (error) {
            console.log(error)
        }
       }else{
            try {
            await axios.put(`http://localhost:3000/products/${id}`, data);
             dispatch({type: "EDIT_PRODUCT", payload: data})
             navigate('/admin')
            } catch (error) {
                console.log(error)
            }
       }
       
        console.log(data)
    }

    useEffect(()=>{
        if(id){
            (async()=>{
                const {data} = await axios.get(`http://localhost:3000/products/${id}`)
                reset(data)
            })()
        }
    },[id, reset])

  return (
    <>
      <div className='container'>
        <div className="form_inner">
            <h1>{id ? "Update Product" : "Add Product"}</h1>
            <form onSubmit={handleSubmit(onSubmit)} action="">
                <div className="inputType">
                        <label>title</label>
                        <input  type="text" {...register('title', {required: true})} />
                        {errors.title && <span className='error'>This field is required</span>}
                </div>
                 <div className="inputType">
                        <label>Category</label>
                        <input  type="text" {...register('category', {required: true})}/>
                        {errors.category && <span className='error'>This field is required</span>}
                </div>
                  <div className="inputType">
                        <label>Image</label>
                        <input  type="text" {...register('image', {required: true})} />
                        {errors.image && <span className='error'>This field is required</span>}
                </div>
                 <div className="inputType">
                        <label>Price</label>
                        <input  type="number" {...register('price', {required: true})} />
                        {errors.price && <span className='error'>This field is required</span>}
                </div>
                 <div className="inputType">
                        <label>Old price</label>
                        <input  type="number" {...register('oldprice')} />
                </div>
                <div className='div_btn'>
                      <button type='submit' className='button'>{id ? "Update Product" : "Add Product"}</button>
                </div>
            </form>
        </div>
      </div>
    </>
  )
}

export default FormProduct
