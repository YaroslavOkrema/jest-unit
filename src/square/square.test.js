const square = require("./square.js");

describe("squre", () => {
    let mokValue;
    //Перед кожним тестом
    beforeEach(() => {
        // Додати в бд
    })
    //Один раз
    beforeAll(() => {
    })

    test("Коректне значення", () => {
        /*expect(square(2)).toBe(4);
        expect(square(2)).toBeLessThan(5);
        expect(square(2)).toBeGreaterThan(3);
        expect(square(2)).not.toBeUndefined();*/
        const spyMathPow = jest.spyOn(Math, "pow");
        square(2);
        expect(spyMathPow).toBeCalledTimes(1);
    })

    test("Коректне значення", () => {
        const spyMathPow = jest.spyOn(Math, "pow");
        square(1);
        expect(spyMathPow).toBeCalledTimes(0);
    })

    afterEach(() => {
        jest.clearAllMocks()
    });
    afterAll(() => {

    });
})