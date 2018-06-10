import React from 'react';
import Slider from 'react-slick';

class ImageSlider extends React.Component {
  state = {
    images: [
      {
        url: '/main-images/DSC_1233.jpg',
        ratio: "portrait"
      },
      {
        url: '/main-images/insta+april11.jpg',
        ratio: "portrait"
      },
      {
        url: '/main-images/McM_Jrnl_Feb17-1312.jpg',
        ratio: "landscape"
      },
      {
        url: '/main-images/Palma+Swimsuit+-+Polyamide+-+Mimosa+-+SS18+-81090027.jpg',
        ratio: "portrait"
      },
      {
        url: '/main-images/Rick-8184-2k.jpg',
        ratio: "portrait"
      },
      {
        url: '/main-images/Rick.jpg',
        ratio: "landscape"
      },
      {
        url: '/main-images/Sabina+Schreder2.jpg',
        ratio: "landscape"
      },
    ],
    settings: {
      arrows: true,
      autoplay: false,
      autoplaySpeed: 3000,
      dots: false,
      infinite: false,
      speed: 200,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      swipe: true,
      fade: true,
      centerMode: true,
    }
  }


  render() {
    return (
      <div className="slider-container">
        <Slider {...this.state.settings}>
          {this.state.images.map(image => <img className={`image-${image.ratio}`} key={image.url} src={image.url} alt=""/>)}
        </Slider>
      </div>
    );
  }
};

export default ImageSlider;