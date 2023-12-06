import React from 'react';
import logo from '../../../public/images/logo.png';
import Image from 'next/image';

const Footer = () => {
    return (
        <div className='h-[300px] items-center bg-[#030A15] flex justify-center'>
            <Image
                 src={logo}
                 alt='logo'
                 className=''
                />
        </div>
    );
};

export default Footer;