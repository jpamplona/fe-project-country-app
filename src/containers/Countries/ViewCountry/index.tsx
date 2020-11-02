import React, { Fragment, useState, useEffect } from 'react';
import Country from '../../../types/country';

import { connect } from 'react-redux';
import ServiceCountry from '../../../services/country';

import { Map, LabelGroup, ErrorBoundary, Loading } from '../../../components';
import { CountryWrap } from './styles';

interface IProps {
  match: {
    params: any
  },
  history: {
    goBack: Function
  },
  countries: Country[]
}

const ViewCountry: React.FC<IProps> = ({ match, history }: IProps) => {
  const { name } = match.params;
  const [country, setCountry] = useState<Country>();
  const [isFindingCountry, setIsFindingCountry] = useState(false);
  const [isMapShown, setIsMapShown] = useState(false);

  useEffect(() => {
    const loadCountry = async () => {
      const country: Country = await ServiceCountry.getOneByName(name);

      setCountry(country);
    }

    loadCountry();
  }, [name])

  const toggleMapStatus = () => {
    setIsMapShown(!isMapShown);

    if (!isMapShown) {
      setIsFindingCountry(true);

      setTimeout(() => {
        setIsFindingCountry(false);
      }, 3000);
    }
  }

  const showMap = (countryCode) => {
    return (
      <div className='map-container'>
        <Map selectedCountry={countryCode} className='map'/>
        <button
          className='button button--normal'
          onClick={toggleMapStatus}
        >Hide Map</button>
      </div>
    )
  }

  return(
    <ErrorBoundary>
      <CountryWrap>
        {
          country ?
            isMapShown ?
              isFindingCountry ? <Loading /> : showMap(country.alpha2Code)
              : <Fragment>
                  <div className='country-container'>
                    <figure className='country-figure'>
                      <img className='country-flag' src={country.flag} alt={`$  {country.name}'s flag`}/>
                    </figure>
                    <div className='country-description'>
                      <div className='country-description__divider'>
                        <LabelGroup label={'Code'} value={country.alpha3Code}/>
                        <LabelGroup label={'Name'} value={country.name}/>
                        <LabelGroup label={'Region'} value={country.region} />
                        <LabelGroup label={'Subregion'} value={country.subregion} />
                        <LabelGroup label={'Area'} value={country.area}/>
                      </div>
                      <div className='country-description__divider'>
                        <LabelGroup label={'Population'} value={country.population}/>
                        <LabelGroup label={'Gini'} value={country.gini} />
                        <LabelGroup label={'Currencies'} value={country.currencies.map(currency => currency.code).join('/') } />
                        <LabelGroup label={'Timezones'} value={country.timezones.join('/')}/>
                        <LabelGroup label={'Calling Codes'} value={country.callingCodes.join('/')}/>
                      </div>
                    </div>
                  </div>
                  <div className='controls-container'>
                    <button className='button button--primary' onClick={toggleMapStatus}>Show on the Map</button>
                    <button className='button button--normal' onClick={() => history.goBack()}>Back</button>
                  </div>
                </Fragment>
              : <Loading />
        }
      </CountryWrap>
    </ErrorBoundary>
  )
}

const mapStateToProps = state => ({
  countries: state.countries
})

export default connect(mapStateToProps)(ViewCountry);