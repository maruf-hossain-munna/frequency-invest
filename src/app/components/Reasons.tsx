import Image from 'next/image';
import React from 'react';
import reasonOne from '../../../public/images/reasonOne.png';

const Reasons = () => {
    return (
        <div className=' bg-[#02060C] text-white py-20'>
            <div className='w-[1200px] mx-auto'>
                <h2 className='text-center text-4xl font-semibold mb-14'>3 RAZONES PARA INVERTIR CON FREQUENCY </h2>

                <div className='flex justify-center gap-12'>
                    <div className='w-[300px] reasonCard border-[1px] border-[#4FE0B6] text-center rounded-xl px-6 py-7 flex flex-col items-center'>
                        <Image
                            src={reasonOne}
                            alt='one'
                            className='mb-5 '
                        />
                        <h4 className='text-xl'>Tecnologia de punta:</h4>
                        <p className='text-xs mt-2'>  Usamos IA de vanguardia desarrollada por expertos para brindarte una plataforma de inversion que se destaca por su capacidad para ofrecer resultados aun en momentos complejos
                            del mercado.</p>
                    </div>

                    <div className='w-[300px] reasonCard border-[1px] border-[#4FE0B6] text-center rounded-xl px-6 py-7 flex flex-col items-center'>
                        <Image
                            src={reasonOne}
                            alt='one'
                            className='mb-5 '
                        />
                        <h4 className='text-xl'>Tecnologia de punta:</h4>
                        <p className='text-xs mt-2'>  Usamos IA de vanguardia desarrollada por expertos para brindarte una plataforma de inversion que se destaca por su capacidad para ofrecer resultados aun en momentos complejos
                            del mercado.</p>
                    </div>

                    <div className='w-[300px] reasonCard border-[1px] border-[#4FE0B6] text-center rounded-xl px-6 py-7 flex flex-col items-center'>
                        <Image
                            src={reasonOne}
                            alt='one'
                            className='mb-5 '
                        />
                        <h4 className='text-xl'>Tecnologia de punta:</h4>
                        <p className='text-xs mt-2'>  Usamos IA de vanguardia desarrollada por expertos para brindarte una plataforma de inversion que se destaca por su capacidad para ofrecer resultados aun en momentos complejos
                            del mercado.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reasons;