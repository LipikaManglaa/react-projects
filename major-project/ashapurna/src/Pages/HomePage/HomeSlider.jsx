import React from 'react'
import Slider from 'react-slick';

export default function HomeSlider({sliderData}) {

    let settings = {
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
   <>
     <Slider {...settings}>
        {
            sliderData.length>=1
            ?
            sliderData[0].sData.map((v,i)=>{
                            return(
               
              <div key={i}>
                
            <img src={sliderData[0].imagePath+v.image} class="d-block w-100" title={v.title} alt={v.alt_image_text
}/>
            </div>
                  
                )
            })
            
            :
            ""

        }
                       
                      
                        </Slider>
                    
   </>
  )
}
