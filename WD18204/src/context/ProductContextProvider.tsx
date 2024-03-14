import { createContext, useEffect, useState } from "react"
import { Product } from "../interfaces/products"
import axios from "axios"

export const ProductContext = createContext({} as 
    {products: Product[], 
    handleRemove: asyncDelete,
    handleSubmitAdd: asyncAdd,
    handleSubmitEdit: asyncAdd
    }
    )
type asyncAdd = (product: Product) => Promise<void>
type asyncDelete = (id: unknown) => Promise<void>

const ProductContextProvider = ({children}: {children: React.ReactNode}) => {
   const [products, setProducts] = useState<Product[]>([])

    useEffect(()=>{
        (async()=>{
            try {
                const {data} = await axios.get(`http://localhost:3000/products`)
                console.log(data)
                setProducts(data)
            } catch (error) {
                console.log(error)
            }
        })()
    },[])
    const handleRemove: asyncDelete = async(id: unknown)=>{
        try {
            if(confirm('Are you sure to delete?')){
            await axios.delete(`http://localhost:3000/products/${id}`)
            setProducts(products.filter((item)=> item.id !== id))
        }
        } catch (error) {
            console.log(error)
        }
    }
    const handleSubmitAdd = async(product: Product)=>{
        try {
              const {data} = await axios.post(`http://localhost:3000/products`, product)
            setProducts([...products, data])
        } catch (error) {
            console.log(error)
        }
    }
    const handleSubmitEdit = async(product: Product)=>{
        try {
            axios.put(`http://localhost:3000/products/${product.id}`, product)
            setProducts(products.map(item=> item.id === product.id ? product : item))
        } catch (error) {
            console.log(error)
        }
    } 

  return (
    <div>
      <ProductContext.Provider value={{products, handleRemove, handleSubmitAdd, handleSubmitEdit}}>
        {children}
      </ProductContext.Provider>
    </div>
  )
}

export default ProductContextProvider
