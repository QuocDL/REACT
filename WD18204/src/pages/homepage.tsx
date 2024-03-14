import { useContext } from "react"
import { ProductContext } from "../context/ProductContextProvider"
import Productcard from "../components/Productcard"
import { Product } from "../interfaces/products"



export const HomePage = ()=>{
    const {products} = useContext(ProductContext)
    return(
    <>
        <section className="homepage">
            <div className="container">
                <div className="homepage_inner">
                    <div className="homepage_content">
                        <h1 className="content_title">
                            Make better coffee <img className="coffe_img" src="./public/image 6.png" alt="" />
                        </h1>
                        <p className="content_desc">why learn how to blog?</p>
                    </div>
                    <div className="homepage_media">
                        <img className="homepage_img" src="./public/croods 1.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
        <section className="card_latest">
            <div className="container">
                <div className="card_latest_inner">
                    <div className="card_content">
                        <h2 className="card_title">
                            long established
                        </h2>
                        <p className="card_desc">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....
                        </p>
                        <div className="card_action">
                            <span className="card_date">May 20th 2020</span>
                            <a className="card_more" href="">Read more</a>
                        </div>
                    </div>
                    <div className="card_media">
                        <img className="card_media_img" src="./public/image 1.png" alt="" />
                    </div>
                </div>
            </div>
        </section>  
        <section className="card_pannel">
            <div className="container">
                <div className="pannel_inner">
                   {products.map((item: Product, index: number)=>(
                    <Productcard key={index} product={item}/>
                   ))}
                </div>
            </div>
        </section>
        <section className="highlight">
            <div className="container">
                <div className="hight_inner">
                    <div className="hightlight_content">
                        <h2 className="hightlight_title">What is Lorem Ipsum?</h2>
                        <p className="hightlight_desc">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution...</p>
                        <div className="highlight_action">
                            <span className="">May 20</span>
                            <a className="hightlight_read" href="">Read more</a>
                        </div>
                    </div>
                    <div className="hightlight_media">
                        <img className="hightlight_img" src="./public/image 7.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
        <div className="container">
            <div className="more_btn_inner">
                <button className="btn_more">See more <img src="./public/btn.svg" alt="" /></button>
            </div>
        </div>
    </>
    )
}