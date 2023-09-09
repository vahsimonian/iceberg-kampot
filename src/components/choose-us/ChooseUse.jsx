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

            <div className='features'>
              <div className='feature1'>
                <div className='single__feature'>
                  <span>
                    <i className='ri-truck-line'></i>
                  </span>

                  <h6>Free Home Delivery</h6>
                  <p>Quick, reliable, doorstep convenience awaits.</p>
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
