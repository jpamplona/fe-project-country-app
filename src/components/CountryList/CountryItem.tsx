import React from 'react';
import { Link } from 'react-router-dom';
import ProgressiveImage from 'react-progressive-graceful-image';

interface IProps {
  code: string,
  name: string,
  time_zones: Array<string>,
  calling_codes: Array<string>,
  flag: string
}

const CountryItem: React.FC<IProps> = ({
  code,
  name,
  time_zones,
  calling_codes,
  flag
}: IProps) => {

  return(
    <li className='country-item'>
      <Link to={`/${name}`} className='country-item__link'>
        <div className='country-item__details'>
          <h2 className='country-item__details__data'>{code}</h2>
          <h2 className='country-item__details__data'>{name}</h2>
          <p className='country-item__details__data'>{time_zones.splice(0, 2).join('/')}</p>
          <p className='country-item__details__data'>{calling_codes.join('/')}</p>
        </div>
        <figure className='country-item__figure'>
          <ProgressiveImage src={flag} placeholder={`${window.location.origin}/loading-flag.jpg`}>
            { (src) => <img src={src} alt={`${name}'s flag`} className='country-item__flag' /> }
          </ProgressiveImage>
        </figure>
      </Link>
    </li>
  );
}

export default CountryItem;