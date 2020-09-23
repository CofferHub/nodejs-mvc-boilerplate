const sum = require('./sum');

describe('sum function', () => {
  it('sums up two integers', () => {
    expect(sum(1, 2)).toEqual(3);
  });
});
