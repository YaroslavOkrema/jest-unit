const validateValue = require('./validateValue');

describe("validateValue", () => {
    test("Коректне значення", () => {
        expect(validateValue(50)).toBe(true);
    })
    test("Менше коректного", () => {
        expect(validateValue(-1)).toBe(false);
    })
    test("Більше коректного", () => {
        expect(validateValue(101)).toBe(false);
    })
    test("Крайнє значення знизу", () => {
        expect(validateValue(0)).toBe(true);
    })
    test("Крайнє значення зверху", () => {
        expect(validateValue(100)).toBe(true);
    })
})