import { Users } from '../users';

describe('Users', () => {
  test('users.all gets users ', async () => {
    const users = await Users.all();
    users.forEach(user => {
      expect(typeof user.name).toBe('string');
    });
  });
});
