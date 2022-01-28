const computeAge = require("../src/computeAge")

test('condition mois pas passé', () => {
    birthday = new Date(2000, 6, 4);
    currentDate = new Date(2022, 0, 28);
    expect(computeAge(birthday, currentDate)).toBe(21);
})

test('condition mois passé', () => {
    birthday = new Date(2000, 6, 4);
    currentDate = new Date(2022, 8, 25);
    expect(computeAge(birthday, currentDate)).toBe(22);
})

test('condition jour pas passé', () => {
    birthday = new Date(2000, 6, 4);
    currentDate = new Date(2022, 6, 2);
    expect(computeAge(birthday, currentDate)).toBe(21);
})

test('condition jour passé', () => {
    birthday = new Date(2000, 6, 4);
    currentDate = new Date(2022, 6, 14);
    expect(computeAge(birthday, currentDate)).toBe(22);
})

test('condition jour d anniversaire', () => {
    birthday = new Date(2000, 6, 4);
    currentDate = new Date(2022, 6, 4);
    expect(computeAge(birthday, currentDate)).toBe(22);
})