const mapArrToString = require("./mapArrToString");

describe("mapArrToString", () => {
    test("Коректне значення", () => {
        expect(mapArrToString([1, 2, 3])).toEqual(['1', '2', '3']);
    })
    test("Різні значення", () => {
        expect(mapArrToString([1, 2, 3, null, undefined, 'dasdas'])).toEqual(['1', '2', '3']);
    })
    test("Порожній масив", () => {
        expect(mapArrToString([])).toEqual([]);
    })
    test("Заперечення", () => {
        expect(mapArrToString([1, 2, 3])).not.toEqual([1, 2, 3, 4]);
    })
})