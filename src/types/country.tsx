interface Currency {
  code: string,
  name: string,
  symbol: string,
}

export default interface Country {
  alpha2Code: string,
  alpha3Code: string,
  name: string,
  capital: string,
  region: string,
  subregion: string,
  population: string,
  area: number,
  gini: number,
  currencies: Array<Currency>
  timezones: Array<string>,
  callingCodes: Array<string>,
  flag: string
}