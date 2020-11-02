import React from 'react';
import LazyLoad from 'react-lazyload';
import Loader from 'react-loader-spinner'
import CountryItem from './CountryItem';
import { CountryListWrap } from './styles';

interface Country {
  alpha3Code: string,
  name: string,
  timezones: Array<string>,
  callingCodes: Array<string>,
  flag: string
}

interface IProps {
  countries: Array<Country>
}

const CountryList: React.FC<IProps> = ({ countries }: IProps) => {
  return(
    countries?.length?
      <CountryListWrap>
        {
          countries.map(country => (
            <LazyLoad
              key={country.alpha3Code}
              placeholder={
                <Loader
                  type='Puff'
                  color={'var(--color-primary)'}
                  height={40}
                  width={40}
                />
              }
            >
              <CountryItem
                key={country.alpha3Code}
                code={country.alpha3Code}
                name={country.name}
                time_zones={country.timezones}
                calling_codes={country.callingCodes}
                flag={country.flag}
              />
            </LazyLoad>
          ))
        }
      </CountryListWrap>
      : <p>No Countries Found</p>
  );
}

export default CountryList;