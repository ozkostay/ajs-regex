import Validator from '../validator';

test('should Validator', () => {
  const person = new Validator('A533_-sh');
  expect(person.validateUsername()).toBe(true);
});
