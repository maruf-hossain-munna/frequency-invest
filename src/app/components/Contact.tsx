import React from 'react';

const Contact = () => {
    return (
        <div className='contactsBg  bg-[#02060C] pt-40'>
            <div className='w-[400px] mx-auto text-white'>
                <h2 className='text-[#4FE0B6] text-center text-4xl font-semibold'>Contactanos</h2>
                <form className='flex flex-col gap-3 mt-20 mb-20'>
                    <div>
                        <p>Nombre </p>
                        <input type="text" name="Name" id="" className='w-full bg-[#0C2638] h-10 rounded-md' />
                    </div>
                    <div>
                        <p>Email </p>
                        <input type="email" name="email" id="" className='w-full bg-[#0C2638] h-10 rounded-md' />
                    </div>
                    <div>
                        <p>Consulta </p>
                        <input type="textarea" name="textarea" id="" className='w-full bg-[#0C2638] h-24 rounded-md' />
                    </div>

                    <div>
                        <button
                            className='mt-3 text-white bg-[#00BCC1] text-[22px] w-full  lg:py-2 py-2 rounded-md hover:bg-transparent border-[1px] border-[#00BCC1]'
                        >Contactanos</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;