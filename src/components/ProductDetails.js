import React, { Component } from 'react'
import { ProductConsumer } from '../context'
import { Link } from 'react-router-dom'
import { ButtonContainer } from './Button'

export default class ProductDetails extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart
          } = value.detailProduct
          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              <div className="row">
                <div className="mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="product" />
                </div>
                <div className="mx-auto col-md-6 my-3">
                  <h1>Model: {title}</h1>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    Made By: <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-title">
                    <strong>
                      Price: <span>$</span>{price}
                    </strong>
                  </h4>
                  <p className="font-weight-bold mt-3 mb-0">
                    Info:
                  </p>
                  <p className="text-muted">
                    {info}
                  </p>
                  {/* buttons */}
                  <div className="">
                    <Link to="/">
                      <ButtonContainer>
                        back to products
                      </ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart
                      disabled={inCart ? true : false }
                      onClick={() => {
                        value.addToCart(id)
                        value.openModal(id)
                      }}
                      >
                      {inCart ? 'In Cart' : 'add to cart'}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}
