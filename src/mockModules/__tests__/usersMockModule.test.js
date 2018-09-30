import axios from 'axios';
import { Users } from '../users';

test('users.all should get users', () => {
  return Users.all().then(users =>
    expect(users).toEqual([{ name: 'Mark' }, { name: 'Anthony' }])
  );
});
