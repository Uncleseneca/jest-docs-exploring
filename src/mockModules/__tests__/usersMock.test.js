import axios from 'axios';
import { Users } from '../users';

jest.mock('axios');

test('users.all should get users', () => {
  const response = { data: [{ name: 'Mark' }, { name: 'Anthony' }] };
  axios.get.mockResolvedValue(response);
  // axios.get.mockImplementation(() => Promise.resolve(response));

  return Users.all().then(users => expect(users).toEqual(response.data));
});
