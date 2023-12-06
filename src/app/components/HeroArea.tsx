import React from 'react';
import heroBg from '../../../public/images/heroBg.png';
import Image from 'next/image';
import heroEffect from '../../../public/images/heroLight.png';
import heroEffect2 from '../../../public/images/heroEffect2.png';

const HeroArea = () => {
    return (
        <div className='bg-[#02060C] text-white z-0'>
            <Image 
                src={heroEffect}
                alt='Background effect'
                className='mt-[-100px] z-0'
            />
            <div className={`w-[700px] mx-auto heroBg py-6 pt-28 px-2 text-center mt-[-400px] items-center`}>
                <h2 className='text-[65px] font-bold mt-[-50px]'>INVERSIOES, <br /> PERO FACIL</h2>
                <h4 className='text-[25px] font-[900] font-nexa'>La combinacion perfecta entre inteligencia artificial y humana al servicio de  tus inversiones.</h4>
            </div>
        </div>
    );
};

export default HeroArea;