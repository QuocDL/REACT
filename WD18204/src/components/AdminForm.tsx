import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContextProvider";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


type FormValue = {
    title: string;
    desc: string;
    image: string;
    date: string
}
const AdminForm = () => {
    const [isEditMode, setMode] = useState(false)
    const {id } = useParams()
    const {handleSubmitAdd, handleSubmitEdit} = useContext(ProductContext)
    const{
        register,
        handleSubmit,
        formState: { errors},
        reset
    } =  useForm<FormValue>()

    const navigate = useNavigate();

    const onSubmit: SubmitHandler<FormValue> = (data) =>{
        if(isEditMode === false){
            handleSubmitAdd(data)
        }else{
            handleSubmitEdit(data)
        }
        navigate('/admin')
    }
    useEffect(()=>{
        if(id){
            (async()=>{
                const {data} = await axios.get(`http://localhost:3000/products/${id}`)
                reset(data)
                setMode(true)
            })();
            console.log(isEditMode)
        }else{
            console.log(isEditMode)
        }
    }, [id, isEditMode, reset])
   
  return (
    <div>
      <section className="h-screen dark:bg-gray-900">
      <div className="mx-auto max-w-4xl lg:py-16">
        <h2  className="mb-4 text-[4rem] font-bold text-gray-900 dark:text-white">
          {isEditMode ? "Update Product" : "Create Product"}
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block mb-2 text-[2rem] font-medium text-gray-900 dark:text-white"
              >
                Product Title
              </label>
              <input
                type="text"
                {...register("title", {required: true})}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-[2.1rem] rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type product title"
              />
              {errors.title && <span className="text-red-500 text-[1.6rem]">This field is required</span>}
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block mb-2 text-[2rem] font-medium text-gray-900 dark:text-white"
              >
                Product Image
              </label>
              <input
                type="text"
                {...register("image", {required: true})}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-[2.1rem] rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type product Image"
              />
                {errors.image && <span className="text-red-500 text-[1.6rem]">This field is required</span>}

            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block mb-2 text-[2rem] font-medium text-gray-900 dark:text-white"
              >
                Date
              </label>
              <input
                type="text"
                 {...register("date", {required: true})}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-[2.1rem] rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type product date"
              />
                            {errors.date && <span className="text-red-500 text-[1.6rem]">This field is required</span>}

            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="description"
                className="block mb-2 text-[2rem] font-medium text-gray-900 dark:text-white"
              >
                Description
              </label>
              <textarea
                 {...register("desc", {required: true})}
                
                className="bg-gray-50 border border-gray-300 text-gray-900 text-[2.1rem] rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Your description here"
              ></textarea>
                            {errors.desc && <span className="text-red-500 text-[1.6rem]">This field is required</span>}

            </div>
    
          </div>
          <button
            type="submit"
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white text-[4rem] font-bold py-2 px-4 rounded"
          >
             {isEditMode ? "Update Product" : "Create Product"}
          </button>
        </form>
      </div>
    </section>
    </div>
  )
}

export default AdminForm
