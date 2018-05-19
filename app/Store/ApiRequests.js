import axios from 'axios';

export default class Api {
  static getNewsAPI() {
    return axios.get('http://18.219.35.208:8000/api/news?page=1')
  }
  static getTournamentsAPI() {
    return axios.get('http://18.219.35.208:8000/api/tournaments?page=1')
  }
}