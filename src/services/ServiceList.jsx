import React from 'react'
import ServiceCard  from './ServiceCard'
import {Col} from "reactstrap";
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'
const servicesData=[
  {
  imgUrl: weatherImg,
  title: "Calculate Weather",
  desc: "The prediction of what the atmosphere will be like in a particular place by using technology and scientific knowledge to make weather observations. "
  },
  {
    imgUrl: guideImg,
    title:"Best Tour Guide",
    desc: "The prediction of what the atmosphere will be like in a particular place by using technology and scientific knowledge to make weather observations. "
  },
  {
    imgUrl: customizationImg,
    title :"Customization",
    desc: "The prediction of what the atmosphere will be like in a particular place by using technology and scientific knowledge to make weather observations. "
  }

]
const ServiceList = () => {
  return <>
  {
    servicesData.map((item,index)=>(
      <Col lg="3" md='6' sm='12' className='mb-4' key={index}>
        <ServiceCard item={item}/>
      </Col>
    ))
  }  
  </>
}
export default ServiceList