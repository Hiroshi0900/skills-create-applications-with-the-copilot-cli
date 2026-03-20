const {
  addition,
  subtraction,
  multiplication,
  division,
  modulo,
  power,
  squareRoot,
} = require('../calculator');

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

  test('modulo returns the remainder after division', () => {
    expect(modulo(10, 3)).toBe(1);
  });

  test('modulo throws on division by zero', () => {
    expect(() => modulo(10, 0)).toThrow('Cannot modulo by zero');
  });

  test('power raises the base to the exponent', () => {
    expect(power(2, 5)).toBe(32);
  });

  test('square root returns the square root of a positive number', () => {
    expect(squareRoot(81)).toBe(9);
  });

  test('square root throws for negative numbers', () => {
    expect(() => squareRoot(-1)).toThrow('Cannot take square root of a negative number');
  });
});
