import React from 'react'
import './popular-menu.css'

import { Col, Container, Row } from 'reactstrap'
import { popularMenuFood } from '../../assets/fake-data/products'
import ProductCard from '../product-card/ProductCard'

const PopularMenu = () => {
  return (
    <section className='pt-0'>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
            <h2 className='popular__menu-title'>Popular food menu</h2>
          </Col>

          {popularMenuFood.map((item) => (
            <Col lg='4' key={item.id} className='mb-5'>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default PopularMenu
