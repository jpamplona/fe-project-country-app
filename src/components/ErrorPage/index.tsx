import React from 'react';
import { Link } from 'react-router-dom';
import { ErrorPageWrap } from './styles';

const ErrorPage: React.FC = () => {
  return (
    <ErrorPageWrap
      style={{
        backgroundImage: `url('${window.location.origin}/galaxy-bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className='error-code'>
        <span className='error-code__digit'>4</span>
        <img
          src={`${window.location.origin}/earth512.png`}
          alt='sad earth'
          className='error-code__earth'
        />
        <span className='error-code__digit'>4</span>
      </div>
      <p className='error-message'>Ooops! It seems like you're lost. Go back to Earth.</p>
      <Link to={'/'}>
        <button className='btn-back'>
          Go Back
        </button>
      </Link>
    </ErrorPageWrap>
  )
}

export default ErrorPage;
