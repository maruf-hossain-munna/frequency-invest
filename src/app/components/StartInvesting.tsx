import React from 'react';
import upperArrow from '../../../public/images/upperArrow.png';
import lowerArrow from '../../../public/images/lowerArrow.png';
import Image from 'next/image';
import InvestCard from './InvestCard';

const StartInvesting = () => {
    return (
        <div className='bg-[#02060C] startInvestBg pb-36 lg:pt-80 pt-20 text-white px-4 lg:px-0'>

            <h2 className='lg:text-[48px] text-2xl font-[950] text-center '>CÓMO EMPEZAR A INVERTIR</h2>

            {/* Card Component */}

            <div className='lg:max-w-[1000px] mx-auto lg:mt-20 mt-20'>
                <Image
                    src={upperArrow}
                    alt='Upper Arrow'
                    className='ml-[500px] hidden lg:block'
                    width={350}
                />
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    <InvestCard
                        label={1}
                        title='Completá el formulario de contacto.'
                        subTitle='Llená algunos datos para que podamos contactarte.'
                    />
                    <InvestCard
                        label={2}
                        title='Respondé algunas preguntas.'
                        subTitle='Necesitamos saber tus objetivos , y tu perfíl como inversor.'
                    />
                    <InvestCard
                        label={3}
                        title='Empezá a invertir.'
                        subTitle='Crearemos un plan de inversión automático basado en tu perfil.'
                    />

                </div>
                <Image
                    src={lowerArrow}
                    alt='lower Arrow'
                    className='ml-40 hidden lg:block'
                    width={350}
                />
            </div>

            <div className=' lg:max-w-[500px] w-full mx-auto lg:mt-24 mt-12'>
                <button
                    className=' text-white bg-[#00BCC1] lg:text-2xl text-xl font-[700] w-full  lg:py-2 py-2 rounded-md hover:bg-transparent border-[1px] border-[#00BCC1]'
                >Empezá a invertir</button>
            </div>
        </div>
    );
};

export default StartInvesting;