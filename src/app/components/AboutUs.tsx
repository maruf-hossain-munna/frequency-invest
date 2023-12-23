import Image from 'next/image';
import React from 'react';
import aboutUs from '../../../public/images/aboutImg.png';
import rightArrow from '../../../public/images/rightArrow.png';

const AboutUs = () => {
    return (
        <div className='bg-[#02060C] flex lg:flex-row flex-col lg:px-16 px-4 pb-16 lg:py-28 gap-16 lg:gap-0'>
            <div className='lg:w-2/3 w-full flex items-center'>
                <div className=' '>
                    <Image
                        src={aboutUs}
                        alt='About Us'
                        className=''
                    />
                </div>
                <div className='hidden lg:block absolute left-[27%]'>
                    <Image
                        src={rightArrow}
                        alt='About Us'
                        className=''
                    />
                </div>
            </div>

            <div className='lg:w-1/3 w-full text-center text-white'>
                <div className='lg:w-[330px] w-full aboutCard lg:px-8 px-4 py-12 rounded-3xl'>
                    <p className='text-lg z-20'>Somos un equipo apasionado por la tecnología, con la misión de hacer las inversiones accesibles para todos los que  quieran invertir.</p>
                    <p className='text-lg mt-11'>Estamos comprometidos a crear soluciones de inversión, que permitan a todos invertir de manera más simple.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;