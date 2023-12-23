import React from 'react';
import heroBg from '../../../public/images/heroBg.png';
import Image from 'next/image';

const HeroArea = () => {
    return (
        <div className='bg-[#02060C] text-white '>
            <div className={`lg:max-w-[700px] relative px-2 w-full mx-auto heroBg lg:pb-24 pb-0 lg:pt-44 pt-[420px] text-center flex flex-col items-center`}>
                <div className='lg:mt-0 mt-[-320px]'>
                    <h2 className='lg:text-7xl text-5xl font-[950] lg:mt-[-60px]'>INVERSIOES, <br /> PERO FACIL</h2>
                    <h4 className='lg:text-2xl text-lg font-[700] mt-6'>La combinacion perfecta entre inteligencia artificial y humana al servicio de  tus inversiones.</h4>
                </div>
            </div>
        </div>
    );
};

export default HeroArea;