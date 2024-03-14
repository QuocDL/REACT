import { useContext, useEffect } from 'react'
import { ProductContext } from '../context/ProductContext'
import { Product } from '../interfaces/Products'
import { Link } from 'react-router-dom'

const ProductList = () => {
  const {products, handleRemove} = useContext(ProductContext)
  useEffect(()=>{
    document.title = `${products.length} Sản phẩm`
  },[products])
    return (
   <div className="flex flex-col">
  <div className="-m-1.5 overflow-x-auto">
    <div className="p-1.5 min-w-full inline-block align-middle">
      <div className="overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead>
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
              >
                Age
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
              >
                Address
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {products.map((item: Product, index: number)=>(
                     <tr key={index}>
                    <td className="px-6 py-4  whitespace-nowrap text-sm font-medium text-gray-800 ">
                        {item.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 0">
                        <img src={item.image} width={20} alt="" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                        {item.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                        <button
                        onClick={()=> handleRemove(item.id)}
                        type="button"
                        className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        >
                        Delete
                        </button>
                         <Link to={`${item.id}`}
                        className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        >
                        detail
                        </Link>
                    </td>
                    </tr>
                ))}            
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

  )
}

export default ProductList
