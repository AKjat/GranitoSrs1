import React from 'react';
import ImageGallery from 'react-image-gallery';
import '../Slide/Slide.css';
// import cal1 from '../../images/p-calendar.jpeg'

const images = [
    {
      original: 'https://images.unsplash.com/photo-1633526543814-9718c8922b7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1633526543814-9718c8922b7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      original: 'https://images.unsplash.com/photo-1516179257071-71a54dbb4853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1516179257071-71a54dbb4853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];
const Slide = () =>{
    return(
        <div className="slide-container">
            <ImageGallery  items={images} autoPlay={true} showBullets={true} additionalClass={'image'} showThumbnails={false}/>
        </div>
    )
}

export default Slide;