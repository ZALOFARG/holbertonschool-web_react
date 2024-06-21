import { getFullYear, getFooterCopy, getLatestNotification } from './utils'

describe('testing the functions of utils.js', () => {
  it('getFullYear to return the current year', () => {
    expect(getFullYear()).toBe(new Date().getFullYear());
  })

  it('getFooterCopy to return the correct string based on the argument being "true"', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
  })

  it('getFooterCopy to return the correct string based on the argument being "true"', () => {
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
  })

  it('getLatestNotifications to return the correct string', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
  })
})