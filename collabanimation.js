import React from 'react'
import Slider from 'react-slick'
import './Home.css'
import CompanyLo1 from './image001.png'
import CompanyLo2 from './image002.png'
import CompanyLo3 from './image003.png'
import CompanyLo4 from './image004.png'
import CompanyLo5 from './image005.png'
import CompanyLo6 from './image006.png'


function Collabanimation() {

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
      <div >
        {/* <h2> Responsive </h2> */}
        <Slider {...settings}>
          <div className='card15'>
          <img src={CompanyLo1} alt="BigCo Inc. logo"/>
          </div>
          <div className='card15'>
          <img src={CompanyLo2} alt="BigCo Inc. logo"/>
          </div>
          <div className='card15'>
          <img src={CompanyLo3} alt="BigCo Inc. logo" />
          </div>
          <div className='card15'>
          <img src={CompanyLo4} alt="BigCo Inc. logo"/>
          </div>
          <div className='card15'>
          <img src={CompanyLo5} alt="BigCo Inc. logo"/>
          </div>
          <div className='card15'>
          <img src={CompanyLo6} alt="BigCo Inc. logo"/>
          </div>
           </Slider>
      </div>
    )
  }
  
  export default Collabanimation