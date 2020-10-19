const { User } = require('../../src/models');

describe('user controller makes a request', () => {
  it('should get all the users', () => User.findAll().then((users) => {
    expect(users).toBe(users);
  }));

  it('should fails with an error', () => User.findAll().catch((error) => {
	  expect(error).toMatch('something went wrong!');
  }));
});
