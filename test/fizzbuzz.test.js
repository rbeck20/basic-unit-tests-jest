const fizzBuzz = require("../src/fizzbuzz")

test('fizzBuzz-divisible-3', () => {
    expect(fizzBuzz(6)).toBe('Fizz');
})

test('fizzBuzz-divisible-5', () => {
    expect(fizzBuzz(10)).toBe('Buzz');
})

test('fizzBuzz-divisible-5-3', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
})

test('fizzBuzz-return-nothing-not-divisible', () => {
    expect(fizzBuzz(14)).toBe('');
})


