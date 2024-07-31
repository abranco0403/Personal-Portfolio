import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const ArrowUp = ({ onClick, to, linkText }) => {
  const content = (
    <>
      {linkText}
      <span className='relative ml-2'>
        <FontAwesomeIcon 
          className='text-white absolute bottom-0 left-0 rotate-45 group-hover:-translate-y-1/2 group-hover:translate-x-1/2 transition duration-300' 
          icon={faArrowUp} 
        />
      </span>
    </>
  );

  return (
    <div className='group inline-flex items-center'>
      {to ? (
        <Link 
          to={to} 
          className='font-sans leading-[20px] capitalize text-stone-200 pb-[17px] group-hover:underline transition duration-300'
        >
          {content}
        </Link>
      ) : (
        <button 
          onClick={onClick}
          className='font-sans leading-[20px] capitalize text-stone-200 pb-[17px] group-hover:underline transition duration-300'
        >
          {content}
        </button>
      )}
    </div>
  );
};
