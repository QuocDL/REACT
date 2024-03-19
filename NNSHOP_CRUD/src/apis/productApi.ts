import { IProduct } from "../interfaces/IProduct"
import http from "../utils/http"

export const getProducts =  (page: number | string, limit: number | string)=>{
   http.get<IProduct[]>('products', {
      params:{
         _page: page,
         _limit: limit
      }
   })
}