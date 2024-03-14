import React from 'react'
import { Product } from '../interfaces/products'
export type ProductCardProps = {
    product: Product;
};

const Productcard: React.FC<ProductCardProps> = ({product}) => {
  return (
    <div>
       <div className="pannel">
                        <a href="#" className="pannel_media">
                            <img className="img_pannel" src={product.image} alt="" />
                        </a>
                        <div className="pannel_content">
                            <h3 className="pannel_title">{product.title}</h3>
                            <p className="pannel_desc">{product.desc}</p>
                            <div className="pannel_action">
                                <span className="card_date">{product.date}</span>
                                <a className="card_more" href={`read/${product.id}`}>Read more</a>
                            </div>
                        </div>
        </div>
    </div>
  )
}

export default Productcard
