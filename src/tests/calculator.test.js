const { addition, subtraction, multiplication, division } = require('../calculator');

describe('calculator basic operations', () => {
  test('addition adds two numbers', () => {
    expect(addition(2, 3)).toBe(5);
  });

  test('subtraction subtracts the second number from the first', () => {
    expect(subtraction(10, 4)).toBe(6);
  });

  test('multiplication multiplies two numbers', () => {
    expect(multiplication(6, 7)).toBe(42);
  });

  test('division divides the first number by the second', () => {
    expect(division(20, 5)).toBe(4);
  });

  test('division throws on division by zero', () => {
    expect(() => division(8, 0)).toThrow('Cannot divide by zero');
  });
});
