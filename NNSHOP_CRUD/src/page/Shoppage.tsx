import  { useContext, useEffect } from 'react'
import { ProductContext } from '../context/ProductContextProvider'
import axios from 'axios'
import { IProduct } from '../interfaces/IProduct'
import ProductCard from '../components/ProductCard'
import '../style/Shop.scss'

const Shoppage = () => {
    const {products, dispatch, formatVnd} = useContext(ProductContext)

    useEffect(()=>{
        (async()=>{
            try {
                const {data} = await axios.get(`http://localhost:3000/products`)
                dispatch({type: "SET_PRODUCTS", payload: data})
                document.title = `Sản Phẩm`
            } catch (error) {
                console.log(error)
            }
        })()
    },[])


  return (
    <>
      <>
  <section className="banner">
    <img src="./public/bannershop.png" alt="" className="banner__img" />
  </section>
  <section className="action-bar">
    <div className="container">
      <div className="action-bar_inner">
        <div className="action-bar_inner_left">
          <div className="action-bar_inner_left_filter">
            <div>
              <a href="">
                <img src="./img/option.png" alt="" />
              </a>
            </div>
            <a href="">
              <span>Filter</span>
            </a>
          </div>
          <div className="action-bar_inner_left_dot">
            <a href="">
              <img src="./img/dot.png" alt="" />
            </a>
          </div>
          <div className="action-bar_inner_left_viewlist">
            <a href="">
              <img src="./img/viewlist.png" alt="" />
            </a>
          </div>
          <div className="action-bar_inner_left_showing">
            <span>Showing 1-16 of 32 results</span>
          </div>
        </div>
        <div className="action-bar_inner_right">
          <div className="action-bar_inner_right_action">
            <span>Show</span>
            <span className="action-bar_inner_right_box">16</span>
          </div>
          <div className="action-bar_inner_right_action">
            <span>Short by</span>
            <span className="action-bar_inner_right_default">Default</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="products">
    <div className="container">
      <div className="product_inner">
        <div className="product_list">
            {products?.value?.map((item: IProduct, index: number)=>(
                <ProductCard key={index} product={item} formatVnd={formatVnd}/>
            ))}
        </div>
        <div className="product_action">
          <button className="product_action_active">1</button>
          <button className="product_action_btn">2</button>
          <button className="product_action_btn">3</button>
          <button className="product_action_btn">Next</button>
        </div>
      </div>
    </div>
  </section>
  <section className="role">
    <div className="role_inner">
      <div className="role_inner__box">
        <div className="role_inner__box__img">
          <img src="./img/trophy.png" alt="" />
        </div>
        <div className="ole_inner__box__text">
          <h4>High Quality</h4>
          <p>crafted from top materials</p>
        </div>
      </div>
      <div className="role_inner__box">
        <div className="role_inner__box__img">
          <img src="./img/guarantee.png" alt="" />
        </div>
        <div className="ole_inner__box__text">
          <h4>Warranty Protection</h4>
          <p>Over 2 years</p>
        </div>
      </div>
      <div className="role_inner__box">
        <div className="role_inner__box__img">
          <img src="./img/shipping.png" alt="" />
        </div>
        <div className="ole_inner__box__text">
          <h4>Free Shipping</h4>
          <p>Order over 150 $</p>
        </div>
      </div>
      <div className="role_inner__box">
        <div className="role_inner__box__img">
          <img src="./img/customer.png" alt="" />
        </div>
        <div className="ole_inner__box__text">
          <h4>24 / 7 Support</h4>
          <p>Dedicated support</p>
        </div>
      </div>
    </div>
  </section>
</>

    </>
  )
}

export default Shoppage
