import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ProductContext } from '../context/ProductContextProvider'
import { Product } from '../interfaces/products'

const AdminProductList = () => {
    const {products, handleRemove} = useContext(ProductContext)
  return (
    <div>
      <div className='mt-[5%] px-5'>
      <Link to={"/admin/add"}>
        <button className="mb-4 text-[2.2rem] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Create New Product
        </button>
      </Link>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-[2rem] text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-[1.2rem] text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                image
              </th>
               <th scope="col" className="px-6 py-3">
                desc
              </th>
               <th scope="col" className="px-6 py-3">
                date
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product: Product, index: number) => (
              <tr
                key={index}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {product.title}
                </th>
                <td className="px-6 py-4"><img width={50} src={product.image} alt="" /></td>
                <td className="px-6 py-4 items-center"><p className='h-[50px] overflow-auto'>{product.desc}</p></td>
                <td className="px-6 py-4 items-center">{product.date}</td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <Link to={`/admin/${product.id}`}>
                      <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                        Edit
                      </button>
                    </Link>

                    <button
                      onClick={() => handleRemove(product.id)}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}

export default AdminProductList
