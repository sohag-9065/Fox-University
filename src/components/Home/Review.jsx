
import img1 from '../../assets/staffs/teacher-1.jpg.webp'
import img2 from '../../assets/staffs/teacher-2.jpg.webp'
import img3 from '../../assets/staffs/teacher-3.jpg.webp'
import img4 from '../../assets/staffs/teacher-4.jpg.webp'
import img5 from '../../assets/staffs/teacher-6.jpg.webp'
import Slider from "react-slick";
import './revie.css';
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

const images = [img1, img2, img3, img4, img5];

function SampleNextArrow() {
    return (
        <div
            style={{ display: "none" }}
        />
    );
}



const Review = () => {

    const [slideIndex, setSlideIndex] = useState(0)

    const settings = {
        dots: true,
        infinite: true,
        centerMode: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        centerPadding: "300px",

        autoplaySpeed: 2000,
        nextArrow: <SampleNextArrow />,
        beforeChange: (current, next) => setSlideIndex(next),
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    centerPadding: "200px",
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    centerPadding: "100px",
                }
            },
            {
                breakpoint: 600,
                settings: {
                    centerPadding: "0px",
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerPadding: "0px",
                }
            }
        ]


    };
    return (
        <div className=' max-w-[1300px] px-8  mx-auto my-20'>
            <h2 className='text-center px-6 text-2xl md:text-5xl font-extrabold mb-10 text-[#333333]'>Student Says About Us</h2>
            <p className='text-center px-6 max-w-[700px] mx-auto mb-20 text-[#B0B0B0]' >Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
            <div className='w-full '>
                <Slider {...settings}>

                    {
                        images.map((img, index) => (
                            <div key={index} className={` ${index === slideIndex ? " slide slide-active  " : " slide slide-de "}   w-full mb-10 `}>
                                <div className='flex justify-center items-center'>

                                    <img src={img} alt="" className='h-28 w-28 rounded-full ml-10' />

                                    <div className='ml-4 md:ml-10 relative'>
                                        <FontAwesomeIcon icon={faQuoteLeft} className='text-[60px] md:text-[150px] opacity-10 absolute top-0 left-0' />
                                        <p className='pt-4 md:pt-8 sm:pt-16 md:mr-32 md:text-xl'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                        
                                        <h2 className='pt-4 md:pt-8 md:text-xl font-bold'>Henry Dee</h2>
                                        <p>Mother</p>
                                    </div>
                                </div>


                            </div>
                        ))
                    }

                </Slider>
            </div>
        </div>
    );
};

export default Review;