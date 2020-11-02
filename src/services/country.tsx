import api from '../httpCommon';

class CountryService {
  getAll = () => {
    return api.get('/all')
      .then(res => {
        return res.data;
      })
      .catch(e => {
        return e;
      });
  }

  getOneByName = name => {
    return api.get(`/name/${name}`)
      .then(res => {
        return res.data[0];
      })
      .catch(e => {
        return e;
      });
  }
}

export default new CountryService();