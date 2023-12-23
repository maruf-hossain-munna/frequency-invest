import React, { FC } from 'react';

interface IinvestCard {
    label: number | string;
    title: string;
    subTitle: string;
}

const InvestCard: FC<IinvestCard> = ({ label, title, subTitle }) => {
    return (
        <div className='investCard text-center'>
            <h3 className='textStroke text-[70px]'> {label} </h3>
            <h4 className='text-sm md:text-xl font-extrabold'> {title} </h4>
            <p className='text-center text-xs md:text-base font-light'> {subTitle} </p>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="43"
                height="32"
                fill="none"
                viewBox="0 0 43 32"
                className='absolute top-0 left-0'
            >
                <path
                    fill="#00BCC1"
                    d="M0 3.09a3 3 0 013-3h40l-5 2.5-16 11-11 7.5-5.833 4.374a2 2 0 00-.305.283l-3.204 3.661c-.105.12-.224.227-.35.325-.228.175-.601.484-.808.767-.257.353-.5 1-.5 1V3.09z"
                ></path>
            </svg>
        </div>
    );
};

export default InvestCard;