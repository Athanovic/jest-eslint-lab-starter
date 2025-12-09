const { capitalizeWords, filterActiveUsers, logAction } = require('../index');

describe('capitalizeWords', () => {
  test('capitalizes every word in a normal sentence', () => {
    expect(capitalizeWords('hello world')).toBe('Hello World');
  });

  test('handles empty string', () => {
    expect(capitalizeWords('')).toBe('');
  });

  test('single-word string', () => {
    expect(capitalizeWords('hello')).toBe('Hello');
  });
});

describe('filterActiveUsers', () => {
  test('filters active users from mixed array', () => {
    const users = [
      { id: 1, active: true },
      { id: 2, active: false },
      { id: 3, active: true }
    ];
    expect(filterActiveUsers(users)).toEqual([
      { id: 1, active: true },
      { id: 3, active: true }
    ]);
  });

  test('returns empty array when all inactive', () => {
    const users = [
      { id: 1, active: false },
      { id: 2, active: false }
    ];
    expect(filterActiveUsers(users)).toEqual([]);
  });

  test('returns empty array when input array is empty', () => {
    expect(filterActiveUsers([])).toEqual([]);
  });
});

describe('logAction', () => {
  test('returns formatted log string', () => {
    expect(logAction('deleted file', 'alice')).toBe('alice: deleted file');
  });

  test('handles empty strings', () => {
    expect(logAction('', '')).toBe('');
  });
});
