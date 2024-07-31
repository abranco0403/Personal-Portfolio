import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const ArrowLeft = ({ onClick, to, linkText }) => {
  const content = (
    <>
      <span className='relative ml-2'>
        <FontAwesomeIcon 
          className='text-white bottom-0 left-0 mr-4 group-hover:-translate-x-1/2 transition duration-300' 
          icon={faArrowLeft } 
        />
      </span>
      {linkText}
      
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
