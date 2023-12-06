import React from 'react';
import one from '../../../public/images/one.png';
import two from '../../../public/images/two.png';
import three from '../../../public/images/three.png';
import upperArrow from '../../../public/images/upperArrow.png';
import lowerArrow from '../../../public/images/lowerArrow.png';
import heroEffect2 from '../../../public/images/heroEffect2.png';
import Image from 'next/image';

const StartInvesting = () => {
    return (
        <div className='bg-[#02060C] startInvestBg pt-40 pb-36 text-white'>
            <Image 
                src={heroEffect2}
                alt='Background effect'
                height={550}
                className='heroEffect2'
            />
            
            <h2 className='text-[48px] font-[950] text-center '>CÓMO EMPEZAR A INVERTIR</h2>


            {/* Card Component */}

            <div className='w-[1000px] mx-auto mt-28'>
                <Image
                    src={upperArrow}
                    alt='Upper Arrow'
                    className='ml-[500px]'
                    width={350}
                />

                <div className='flex justify-center gap-10 text-center'>
                    <div className='w-[330px] border-[1px] border-[#4FE0B6] rounded-xl px-6 py-5 flex flex-col items-center'>
                        <Image
                            src={one}
                            alt='one'
                            className='mb-5 mt-3'
                        />
                        <h4 className='text-xl'>Completá el formulario de contacto.</h4>
                        <p className='text-xs mt-2'>Llená algunos datos para que podamos contactarte.</p>
                    </div>

                    <div className='w-[330px] border-[1px] border-[#4FE0B6] rounded-xl px-6 py-5 flex flex-col items-center'>
                        <Image
                            src={two}
                            alt='one'
                            className='mb-5 mt-3 '
                        />
                        <h4 className='text-xl'>Respondé algunas preguntas.</h4>
                        <p className='text-xs mt-2'>Necesitamos saber tus objetivos , y tu perfíl como inversor.</p>
                    </div>

                    <div className='w-[330px] border-[1px] border-[#4FE0B6] rounded-xl px-6 py-5 flex flex-col items-center'>
                        <Image
                            src={three}
                            alt='one'
                            className='mb-5 mt-3'
                        />
                        <h4 className='text-xl'>Empezá a invertir.</h4>
                        <p className='text-xs mt-2'>Crearemos un plan de inversión automático basado en tu perfil.</p>
                    </div>

                </div>

                <Image
                    src={lowerArrow}
                    alt='lower Arrow'
                    className='ml-40'
                    width={350}
                />
            </div>

            <div className=' w-[400px] mx-auto mt-24'>
                <button
                    className=' text-white bg-[#00BCC1] text-[32px] font-[900] w-full  lg:py-2 py-2 rounded-md hover:bg-transparent border-[1px] border-[#00BCC1]'
                >Empezá a invertir</button>
            </div>
        </div>
    );
};

export default StartInvesting;