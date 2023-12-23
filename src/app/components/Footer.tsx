import React from 'react';
import logo from '../../../public/images/logo.png';
import Image from 'next/image';

const Footer = () => {
    return (
        <div className='lg:h-[200px]  h-[150px] items-center bg-[#030A15] flex justify-center'>
            <Image
                 src={logo}
                 alt='logo'
                 className=''
                />
        </div>
    );
};

export default Footer;