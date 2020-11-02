import axios from 'axios';

const protocol = 'https';
const host = 'restcountries.eu';
const apiVersion = 'v2';

const countryAPI = {
  baseURL: `${protocol}://${host}/rest/${apiVersion}`,
  headers: {
    'Content-type': 'application/json'
  }
}

export default axios.create(countryAPI);