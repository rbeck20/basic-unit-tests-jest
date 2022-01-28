const mergeSortedArrays = require("../src/mergeSortedArrays")

test('tableaux bien triés', () => {
    t1 = [1, 3, 5];
    t2 = [2, 4];
    expect(mergeSortedArrays(t1, t2)).toBe([1, 2, 3, 4, 5]);
})
