import axios from 'axios';
import { Users } from '../users';
jest.mock('axios', () => ({
  get: () => Promise.resolve({ data: [{ name: 'Mark' }, { name: 'Anthony' }] }),
}));
test('users.all should get users', () => {
  // axios.get.mockResolvedValue(response);

  // axios.get.mockImplementation(() => Promise.resolve(response));
  const response = { data: [{ name: 'Mark' }, { name: 'Anthony' }] };

  return Users.all().then(users => expect(users).toEqual(response.data));
});
