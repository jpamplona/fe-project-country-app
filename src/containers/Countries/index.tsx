import React, { useEffect, useState } from 'react';
import { CountryList, ErrorBoundary, Loading } from '../../components';
import CountryService from '../../services/country';
import Country from '../../types/country';
import styled from 'styled-components';
import { BiSearchAlt2 } from "react-icons/bi";

import { connect } from 'react-redux';

import { setCountries } from './actions';

const FilterBar = styled.input`
  position: relative;
  width: 100%;
  margin-top: 10px;
  padding: 10px 15px 10px 40px;
  border: 1px solid var(--color-primary);
  border-radius: 10px;
  background-color: transparent;
  color: var(--color-accent);
  transition: border .3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  outline: none;


  :hover {
    border: 3px solid var(--color-primary);
  }

  :focus {
    border: 3px solid var(--color-primary);
  }
`

interface IProps {
  countries: Country[],
  setCountries: Function
}

const Countries: React.FC<IProps> = (props: IProps) => {
  const initialState: Country[] = [];
  const [filteredCountries, setFilteredCountries] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadCountries = async () => {
      setIsLoading(true);
      const countries = await CountryService.getAll();

      // set local state
      setFilteredCountries(countries);

      // set global state
      props.setCountries(countries);
      setIsLoading(false);
    }

    loadCountries();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleFilter = e => {
    const filterValue = e.target.value || '';

    if (filterValue === '' || filterValue === undefined) {
      setFilteredCountries(props.countries);
    }
    else {
      const newList = props.countries.filter(
        country => (country.name.toLowerCase()).includes(filterValue.toLowerCase())
      )
      setFilteredCountries(newList);
    }
  }

  return(
    <ErrorBoundary>
       {
          isLoading
            ? <Loading />
            : <div style={{
                padding: '10px'
              }}>
                <BiSearchAlt2
                  color='#45C8FA'
                  size='1.5em'
                  style={{
                    position: 'absolute',
                    top: '28px',
                    left: '20px',
                  }}
                />
                <FilterBar
                  type='text'
                  placeholder='Filter Countries by Name'
                  onChange={handleFilter}
                />
                <CountryList countries={filteredCountries} />
              </div>
      }
    </ErrorBoundary>
  );
}

const mapStateToPros = state => ({
  countries: state.countries
});

const mapDispatchToProps = dispatch => ({
  setCountries: data => (dispatch(setCountries(data)))
})

export default connect(mapStateToPros, mapDispatchToProps)(Countries);