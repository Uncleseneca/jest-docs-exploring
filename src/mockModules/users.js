import axios from 'axios';

export class Users {
  static all() {
    return axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(res => res.data);
  }
}
