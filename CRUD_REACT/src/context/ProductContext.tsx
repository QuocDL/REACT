import { createContext, useEffect, useState } from 'react'
import { Product } from '../interfaces/Products';
import axios from 'axios';

export const ProductContext = createContext({} as {products: Product[], handleRemove: any});



const ProductContextProvider = ({children}: {children: React.ReactNode}) => {

    const [products, setProducts] = useState<Product[]>([])

   useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(` http://localhost:3000/products`);
                setProducts(data);
            } catch (error) {console.log(error)}
        })();
    }, []);

    const handleRemove = async(id: number)=>{
        try {
            if(confirm('Are you sure')){
                   await axios.delete(`http://localhost:3000/products/${id}`)
                   setProducts(products.filter((item) => item.id !== id))
            }
        } catch (error) {
            console.log(error)
        }
    }


  return (
    <div>
      <ProductContext.Provider value={{products, handleRemove}}>
            {children}
      </ProductContext.Provider>
    </div>
  )
}

export default ProductContextProvider
