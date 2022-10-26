import {formatStringToDate, formatStringToNumber} from './utilities';

describe('test format string to number function ', () => {
    it('should round up', () => {
        expect(formatStringToNumber('12.369789456')).toBe(12.37)
    })
    it('should return 0 if input is null', () => {
        expect(formatStringToNumber(null)).toBe(0)
    });
    it('should round down', () => {
        expect(formatStringToNumber('0.013')).toBe(0.01)
    });
})

describe('test format string to locale date string function ', () => {
    it('should format date to locale', () => {
        expect(formatStringToDate('2021-10-27T00:00:00.000Z')).toBe("27.10.2021")
    })
})
