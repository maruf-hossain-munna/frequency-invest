import Image from 'next/image';
import React from 'react';
import reasonOne from '../../../public/images/reasonOne.png';
import ReasonCard from './ReasonCard';

const Reasons = () => {
    return (
        <div className=' bg-[#02060C] text-white py-24'>
            <div className='lg:max-w-[1180px] mx-auto w-full lg:px-0 px-4'>
                <h2 className='text-center lg:text-4xl text-2xl font-semibold mb-14'>3 RAZONES PARA INVERTIR CON FREQUENCY </h2>

                {/* Reson Card Component */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                    <ReasonCard 
                        icon='/images/reasonOne.png'
                        title='Tecnologia de punta:'
                        description=' Usamos IA de vanguardia desarrollada por expertos para brindarte una plataforma de inversion que se destaca por su capacidad para ofrecer resultados aun en momentos complejos del mercado.'
                    />
                    <ReasonCard 
                        icon='/images/reasonTwo.png'
                        title='Tecnologia de punta:'
                        description=' Usamos IA de vanguardia desarrollada por expertos para brindarte una plataforma de inversion que se destaca por su capacidad para ofrecer resultados aun en momentos complejos del mercado.'
                    />
                    <ReasonCard 
                        icon='/images/reasonThree.png'
                        title='Tecnologia de punta:'
                        description=' Usamos IA de vanguardia desarrollada por expertos para brindarte una plataforma de inversion que se destaca por su capacidad para ofrecer resultados aun en momentos complejos del mercado.'
                    />
                </div>

            </div>
        </div>
    );
};

export default Reasons;