import React from 'react'
import '../styles/home.css'
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/travel.png'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import Subtitle from './../shared/Subtitle';
import worldImg from './../assets/images/world.png';
import ServiceList from '../services/ServiceList';
import SearchBar from '../shared/SearchBar';
import FeaturedTour from '../components/Featured-tours/FeaturedTour';
import exper from '../assets/images/experience.png'
import Mansonry from '../components/image-gallery/Mansonry';
import Testimonial from '../components/Testimonal/Testimonial';
import Newsletter from '../shared/Newletter';
const Home = () => {
  return <>
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className='hero__content'>
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle className="sub" subtitle={'Travel far enough,you meet yourself.'} />
                <img src={worldImg} alt="" />
              </div>
              <h1>Traveling opens the door to creating{" "}
                <span className='highlight'>memories</span></h1>
              <p>Travel and tourism is the largest service industry in India.
                It provides heritage, cultural, medical, business and sports tourism.
                The main objective of this sector is to develop and promote tourism, maintain competitiveness of India as tourist destination and improve and expand existing tourism products to ensure employment generation and economic growth.
                In this section, we provide information about various tourist destinations, modes of travel,
                accommodation and approved travel agents.</p>
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box mt-5">
              <img src={heroImg} alt="" />
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box hero__video-box mt-4">
              <video src={heroVideo} alt="" controls autoPlay={"autoplay"} preload='auto' loop />
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box ">
              <img src={heroImg02} alt="" />
            </div>
          </Col>
          <SearchBar />
        </Row>
      </Container>
    </section>
    <section>
      <Container>
        <Row>
          <Col lg='3'>
            <h5 className="services__subtitle">what we serve</h5>
            <h2 className='services__title'>We offer out best services</h2>
          </Col>
          <ServiceList />
        </Row>
      </Container>
    </section>
    {/*=========================================Featurd tour section start ===============================*/}
    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
            <Subtitle subtitle={"Explore"} />
            <h2 className="featured__tour-title">Our featured tours</h2>
          </Col>
          <FeaturedTour/>
        </Row>
      </Container>
    </section>
    {/*=========================================Featurd tour section end ===============================*/}
    {/*============================expience section start========================================*/}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="experience__content">
              <Subtitle subtitle={'Exprience'}/>
              <h2>with our all experience <br/> We will serve you
              </h2>
              <p>
              A tourism or travel website serves as 
              <br/>an information hub for prospective travelers planning a getaway. 
              </p>
            </div>
          <div className="counter__wrapper d-flex align-items-center gap-5">
            <div className="counter__box">
              <span>12k+</span>
              <h6>Successful Trip</h6>
            </div>
            <div className="counter__box">
              <span>2k+</span>
              <h6>Regular clients</h6>
            </div>
            <div className="counter__box">
              <span>15</span>
              <h6>Year experience</h6>
            </div>
          </div>
          </Col>
          <Col lg='6'>
            <div className="experience__img">
              <img src={exper} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    {/*============================expience section end========================================*/}
    {/*============================gallery section start========================================*/}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Gallery'}/>
              <h2 className='gallery__title'>
                Visit our customers tour gallery
                </h2>
            </Col>
            <Col lg='12'>
              <Mansonry/>
            </Col>
          </Row>
        </Container>
      </section>
    {/*===========================gallery section end========================================*/}
    {/*===========================testimonial section start========================================*/}
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Nature shoots'}/>
            <h2 className="testimonial__title">What a wonderful places</h2>
          </Col>
          <Col lg='12'>
            <Testimonial/>
          </Col>
        </Row>
      </Container>
    </section>
    {/*===========================testimonial section end========================================*/}
    <Newsletter/>

  </>
}

export default Home;