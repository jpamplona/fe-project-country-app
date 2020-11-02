import { Countries, ViewCountry } from './containers';

// we will organize all our routes here to maintain SoC and clean code
const routes = [
  {
    key: 'Countries',
    exact: true,
    path: '/',
    component: Countries
  },
  {
    key: 'Country',
    exact: true,
    path: '/:name',
    component: ViewCountry
  }
]

export default routes;