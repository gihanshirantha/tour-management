import React from 'react'
import imgGallery from './imgGallery'
import '../../Styles/home.css'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'

const ImageGallery = () => {
  return (<>
    <ResponsiveMasonry columnsCountBreakPoints={{350:1, 768:3, 992:4}}>
        <Masonry gutter='1.5rem'>
            {
                imgGallery.map((item,index)=>(
                    <img src={item} alt="" key={index} className="masonry_imag" data-aos="zoom-in" data-aos-duration='2500'
                    style={{width:"100%", display:"block", borderRadius:"20px" }}/>
                ))
            }
        </Masonry>

    </ResponsiveMasonry>
    </>
  );
}; 

export default ImageGallery