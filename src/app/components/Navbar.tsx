import Image from 'next/image';
import React from 'react';
import logo from '../../../public/images/logo.png';

const Navbar = () => {
    return (
        <nav className=' h-20 lg:px-16 px-4 flex items-center justify-between bg-[#030B15]'>
            <div>
                <Image
                 src={logo}
                 alt='logo'
                 className='lg:w-full w-40'
                />
            </div>

            <div>
                <button className=' text-white lg:text-xl text-sm bg-[#00BCC1] font-[700] lg:px-7 px-3 lg:py-3 py-2 rounded-md hover:bg-transparent border-[1px] border-[#00BCC1]'>GET STARTED</button>
            </div>
        </nav>
    );
};

export default Navbar;