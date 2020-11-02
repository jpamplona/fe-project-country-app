import React from 'react';
import { VectorMap } from 'react-jvectormap';

interface IProps {
  selectedCountry: string,
  className?: string,
}

const Map: React.FC<IProps> = ({ selectedCountry }: IProps) => {
  return(
    <VectorMap
      map={'world_mill'}
      backgroundColor='transparent'
      zoomOnScroll={true}
      containerStyle={{
        width: '100%',
        height: '520px'
      }}
      containerClassName='map'
      regionStyle={{
        initial: {
          fill: '#e4e4e4',
          'fill-opacity': 0.9,
          stroke: 'none',
          'stroke-width': 0,
          'stroke-opacity': 0
        },
        hover: {
          fill: '#e4e4e4',
          'fill-opacity': 0.8,
          cursor: 'pointer'
        },
        selected: {
          fill: '#45C8FA'
        },
      }}
      selectedRegions={[selectedCountry]}
      regionsSelectable={false}
    />
  )
}

export default Map;