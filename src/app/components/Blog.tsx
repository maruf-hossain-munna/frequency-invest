import Image from 'next/image';
import React from 'react';
import blog1 from '../../../public/images/blog1.png';
import blog2 from '../../../public/images/blog2.png';
import blog3 from '../../../public/images/blog3.png';

const Blog = () => {
    return (
        <div className='flex justify-center gap-12 bg-[#02060C] py-20'>
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
    );
};

export default Blog;