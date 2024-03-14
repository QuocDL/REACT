import  { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Product } from '../interfaces/Products'

const ProductDetail = () => {
    const {id} = useParams()
    const [product, setData] = useState<Product>() 

    useEffect(()=>{
        (async()=>{
            const {data} = await axios.get(`http://localhost:3000/products/${id}`)
            setData(data)
            document.title = `${data.title}`
        })();

    },[id])
  return (
    <div className='flex gap-[10%]'>
        <div>
            <img src={product?.image} alt="" />
        </div>
        <div>
            <h1>{product?.title}</h1>
            <p>{product?.description}</p>
            <button className='bg-blue-500 px-5 rounded-md text-white py-1'>{product?.price}</button>
        </div>
    </div>
  )
}

export default ProductDetail
