import Image from 'next/image';
import React from 'react';
import aboutUs from '../../../public/images/aboutUs.png';

const AboutUs = () => {
    return (
        <div className='bg-[#02060C] flex px-16 py-28'>
            <div className='w-2/3'>
                <Image
                    src={aboutUs}
                    alt='About Us'
                    className=''
                />
            </div>

            <div className='w-1/3 text-center text-white'>
                <div className='w-[330px] aboutCard px-8 py-12 rounded-3xl'>
                    <p className='text-lg z-20'>Somos un equipo apasionado por la tecnología, con la misión de hacer las inversiones accesibles para todos los que  quieran invertir.</p>
                    <p className='text-lg mt-11'>Estamos comprometidos a crear soluciones de inversión, que permitan a todos invertir de manera más simple.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;