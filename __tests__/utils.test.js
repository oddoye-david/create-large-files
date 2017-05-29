const utils = require('../utils');

test('pads with zero when less than 10', () => {
  expect(utils.padWithZero(4)).toBe('04');
});

test('does not pad with zero when greater than 10', () => {
  expect(utils.padWithZero(15)).toBe('15');
});

test('returns the correct date string', () => {
  expect(utils.getDateString(new Date('2017-01-01T10:30'))).toBe('2017-01-01T10_30');
});