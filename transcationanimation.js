import React, { useState} from "react"
import './Home.css'
import ScrollTrigger from "react-scroll-trigger"
 import CompanyLogo from './rise.png'
import CompanyLogo1 from './find.png'
import CompanyLogo2 from './wheel.png'
import CompanyLogo3 from './rupee.png'
import CountUp from "react-countup"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


 function transactionanimation () { 

   const [counterOn, setCounterOn] = useState(false)
   const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <div className= 'style'>
      {/* <h2> Responsive </h2> */}
      <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
      <Slider {...settings}>
        <div className='card10'>
        <img className="pic"src={CompanyLogo} alt="BigCo Inc. logo"/>
        <h1 className="pics">{counterOn && <CountUp start={100} end={413}duration={2} delay={0}/>} </h1>
       <h1> Happy Corporates</h1>
        </div>
        <div className='card10 '>
         <img className="pic" src={CompanyLogo1} alt="BigCo Inc. logo"/>
        <h2 className="pics" >{counterOn && <CountUp start={3700} end={3762}duration={2} delay={0}/>} </h2>
       <h2>Individuals</h2>
        </div>
        <div className='card10 '>
        <img className="pic"src={CompanyLogo2} alt="BigCo Inc. logo"/>
        <h3 className="pics">{counterOn && <CountUp start={0} end={14}duration={2} delay={0}/>} </h3>
       <h3>Sectors</h3>
        </div>

        <div className='card10 '>
        <img  className="pic" src={CompanyLogo3} alt="BigCo Inc. logo"/>
        <h4 className="pics" >{counterOn && <CountUp start={6000} end={6176}duration={2} delay={0}/>} </h4> 
       <h4>Transcations</h4>
        </div>
         </Slider>
         </ScrollTrigger>
    </div>
  )
}
export default transactionanimation 

