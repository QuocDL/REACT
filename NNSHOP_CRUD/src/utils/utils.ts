import { useSearchParams } from "react-router-dom";

export function useQueryParams(){
   const [searchParams] = useSearchParams()
   const searchParamsObject= Object.fromEntries([...searchParams])
   return searchParamsObject
}