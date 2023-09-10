import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import './testimonials.css'

import testimonials from '../../assets/images/review1.png'

import Slider from 'react-slick'

const Testimonials = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }

  return (
    <section>
      <Container>
        <Row>
          <Col lg='8' sm='12' md='12' className='m-auto'>
            <div className='slider__wrapper d-flex gap-5 align-items-center'>
              <div className='slider__content w-50'>
                <h2 className='mb-4'>What our customers are saying</h2>
                <Slider {...settings}>
                  <div>
                    <div className='single__testimoial'>
                      <p className='review__content'>
                        " Exceptional service, meticulous attention to detail,
                        and outstanding customer support. iceBerg Kampot
                        exceeded my expectations. Highly recommended for their
                        quality work and professionalism."
                      </p>

                      <h6>Joh Doe</h6>
                      <p>Web Developer</p>
                    </div>
                  </div>

                  <div>
                    <div className='single__testimoial'>
                      <p className='review__content'>
                        Outstanding service and top-notch craftsmanship! iceBerg
                        Kampot delivered beyond expectations. Their dedication
                        to quality and excellent communication sets them apart.
                        Highly recommended
                      </p>

                      <h6>Vanessa Shmoe</h6>
                      <p>Graphic Designer</p>
                    </div>
                  </div>
                  <div>
                    <div className='single__testimoial'>
                      <p className='review__content'>
                        Absolutely delighted with [Company Name]'s exceptional
                        service! Their attention to detail and commitment to
                        customer satisfaction are unmatched. Highly recommend
                        their top-quality work and professionalism
                      </p>

                      <h6>Sako Pako</h6>
                      <p>Project Manager</p>
                    </div>
                  </div>
                </Slider>
              </div>

              <div className='slider__img w-50'>
                <img src={testimonials} alt='some' />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Testimonials
