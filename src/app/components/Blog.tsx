import Image from 'next/image';
import React from 'react';
import blog1 from '../../../public/images/blog1.png';
import blog2 from '../../../public/images/blog2.png';
import blog3 from '../../../public/images/blog3.png';

const Blog = () => {
    return (
        <div className='  bg-[#02060C] py-20'>
            <div className='lg:max-w-[1180px] mx-auto w-full px-4 lg:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                <Image
                    src={blog1}
                    alt='Blog post'
                    className=''
                />
                <Image
                    src={blog2}
                    alt='Blog post'
                    className=''
                />
                <Image
                    src={blog3}
                    alt='Blog post'
                    className=''
                />
            </div>
        </div>
    );
};

export default Blog;