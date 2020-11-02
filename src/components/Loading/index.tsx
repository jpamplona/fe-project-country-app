import React from 'react';
import { LoadingWrap } from './styles';

const Loading: React.FC = () => {
  return (
    <LoadingWrap
      style={{
        backgroundImage: `url('${window.location.origin}/galaxy-bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <img
        src={`${window.location.origin}/earth512.png`}
        alt='earth'
        className='img-globe absolute-center'
      />
      <img
        src={`${window.location.origin}/magnifying-glass.png`}
        alt='magnifying glass'
        className='img-magnifying-glass absolute-center'
      />
    </LoadingWrap>
  )
}

export default Loading;