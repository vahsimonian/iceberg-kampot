import React from 'react'
import './product-card.css'

const ProductCard = ({ item }) => {
  return (
    <div className='single__product'>
      <div className='product__img'>
        <img src={item.imgUrl} alt='product' className='w-100' />
      </div>

      <div className='product__content'>
        <div className='rating text-center'>
          <span>
            <i className='ri-star-fill'></i>
          </span>
          <span>
            <i className='ri-star-fill'></i>
          </span>
          <span>
            <i className='ri-star-fill'></i>
          </span>
          <span>
            <i className='ri-star-fill'></i>
          </span>
          <span>
            <i className='ri-star-fill'></i>
          </span>
        </div>
        <h6>{item.title}</h6>
        <div className='d-flex align-items-center justify-content-between'>
          <span className='price d-flex align-items-center'>
            Price: $ <span>{item.price}</span>
          </span>
          <span className='shopping__icon'>
            <i className='ri-shopping-cart-line'></i>
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
