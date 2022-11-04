import {
  formatStringToLocaleDateString,
  formatStringToNumber,
} from './utilities';

describe('test format string to number function ', () => {
  it('should round up', () => {
    expect(formatStringToNumber('12.369789456')).toBe(12.37);
  });
  it('should return 0 if input is null', () => {
    expect(formatStringToNumber(null)).toBe(0);
  });
  it('should round down', () => {
    expect(formatStringToNumber('0.013')).toBe(0.01);
  });
});

describe('test format string to locale date string function ', () => {
  it('should format string to locale date string', () => {
    expect(formatStringToLocaleDateString('2021-10-27T00:00:00.000Z')).toBe(
      '27.10.2021',
    );
  });
  it('should return Invalid Date if input is not a string with date', () => {
    expect(formatStringToLocaleDateString('string')).toBe('Invalid Date');
  });
  it('should return Invalid Date if input date string is invalid', () => {
    expect(formatStringToLocaleDateString('2021-10-27T00:00:00.000А')).toBe(
      'Invalid Date',
    );
  });
  it('should return valid locale date string', () => {
    expect(formatStringToLocaleDateString('2021-10-27')).toBe('27.10.2021');
  });
  it('should return Invalid Date if date is non-existent', () => {
    expect(formatStringToLocaleDateString('2021-10-32')).toBe('Invalid Date');
  });
});
