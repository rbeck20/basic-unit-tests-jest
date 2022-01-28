const mergeSortedArrays = require("../src/mergeSortedArrays")

test('tableaux bien triés', () => {
    t1 = [1, 3, 5];
    t2 = [2, 4];
    expect(mergeSortedArrays(t1, t2)).toStrictEqual([1, 2, 3, 4, 5]);
})

test('longueur de tableaux correcte', () => {
    t1 = [1, 3, 5];
    t2 = [2, 4];
    expect(mergeSortedArrays(t1, t2).length).toBe(5);
})

test('première valeur correcte', () => {
    t1 = [1, 3, 5];
    t2 = [2, 4];
    expect(mergeSortedArrays(t1, t2)[0]).toBe(1);
})

test('dernière valeur correcte', () => {
    t1 = [1, 3, 5];
    t2 = [2, 4];
    expect(mergeSortedArrays(t1, t2)[mergeSortedArrays(t1, t2).length-1]).toBe(5);
})

test('première valeur inférieure à la deuxième', () => {
    t1 = [1, 3, 5];
    t2 = [2, 4];
    expect(mergeSortedArrays(t1, t2)[0] < mergeSortedArrays(t1, t2)[1]).toBe(true);
})

test('dernière valeur supérieure à l avant-dernière', () => {
    t1 = [1, 3, 5];
    t2 = [2, 4];
    expect(mergeSortedArrays(t1, t2)[mergeSortedArrays(t1, t2).length-1]
        > mergeSortedArrays(t1, t2)[mergeSortedArrays(t1, t2).length-2]).toBe(true);
})
