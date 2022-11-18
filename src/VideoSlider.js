import './VideoSlider.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick'
import data from './video-thumbnail-data.json'

function VideoSlider(){
    let settings = {
        dots: true,
        inifinte: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    
    const videoThumbnail = data.map((video) => {
        return (
            <a className='slide' href={video.link} target="_blank" rel="noopener" key = {Math.random()}>
                <div className='slide-div' style={{ backgroundImage:`url(${video.img})`}} ></div>
                    <p>{video.title}</p>
            </a>
        )
    })

    return (
        <div className='slider-super-cont'>
            <Slider {...settings} className='slidercont'>
                {videoThumbnail}
            </Slider>
        </div>
    )
}

export default VideoSlider;