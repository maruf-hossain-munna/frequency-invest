import Image from 'next/image';
import React, { FC } from 'react';


interface ReasonCard {
    icon : string,
    title : string,
    description : string,
};

const ReasonCard : FC <ReasonCard> = ({icon, title, description}) => {
    return (
        <div className='flex flex-col items-center text-center border-[1px] border-[#4FE0B6] rounded-xl px-6 py-8 reasonCard'>
            <Image 
                src={icon}
                alt='Icon'
                width={70}
                height={70}
            />
            <h4 className='text-xl mt-5'>{title} </h4>
            <p className='text-xs mt-2'> {description} </p>
        </div>
    );
};

export default ReasonCard;