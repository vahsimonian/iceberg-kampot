import React from 'react'

import { Container, Row, Col } from 'reactstrap'
import './choose-us.css'
import pastaImg from '../../assets/images/pasta.png'

const ChooseUse = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <img src={pastaImg} alt='pasta' className='w-100' />
          </Col>

          <Col lg='6'>
            <div className='choose__content'>
              <h4>Who we are?</h4>
              <h2>Take a look at the benefits we offer you</h2>
              <p>
                Discover a delightful culinary experience at our charming
                restaurant, where exquisite flavors and exceptional service
                await.
              </p>
            </div>

            <div className='features my-4'>
              <div className='feature1 d-flex align-items-center gap-5'>
                <div className='single__feature'>
                  <span>
                    <i className='ri-truck-line'></i>
                  </span>

                  <h6>Free Home Delivery</h6>
                  <p>Quick, reliable, doorstep convenience awaits.</p>
                </div>

                <div className='single__feature'>
                  <span className='feature__icon-two'>
                    <i class='ri-money-dollar-circle-line'></i>
                  </span>

                  <h6>Return & Refund</h6>
                  <p>Trust, responsibility, values, success.</p>
                </div>
              </div>

              <div className='feature1 mt-3 d-flex align-items-center gap-5'>
                <div className='single__feature'>
                  <span className='feature__icon-3'>
                    <i class='ri-secure-payment-line'></i>
                  </span>

                  <h6>Secure Payment</h6>
                  <p>Fast & secure! It has never been so close. yep</p>
                </div>

                <div className='single__feature'>
                  <span className='feature__icon-4'>
                    <i class='ri-24-hours-line'></i>
                  </span>

                  <h6>24/7 Hours Support</h6>
                  <p>Trust, responsibility, values, success.</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ChooseUse
