const characterNames = require("../../src/datasets/characterNames.json");
const orderCharactersByPopularity = require("../../src/arrayFilteringMappingAndSorting");

describe("Array filtering mapping and sorting method", () => {
    const expectedResult = [
        {name: "Audrey II", count: 4},
        {name: "Emmett Brown", count: 4},
        {name: "Alex Murphy", count: 3},
        {name: "Ace Ventura", count: 2},
        {name: "Jack Slater", count: 2},
        {name: "007", count: 1},
        {name: "Bob", count: 1},
        {name: "Inspector Clouseau", count: 1},
        {name: "Stanley Ipkiss", count: 1}
    ];

    const expectedNames = expectedResult.map((item) => item.name);
    const expectedCounts = expectedResult.map((item) => item.count);

    test("it should group the occurrences of names", () => {
        const names = orderCharactersByPopularity(characterNames).map((item) => item.name);
        expect(names).toEqual(expectedNames);
    });

    test("it should count the occurrences of names", () => {
        const counts = orderCharactersByPopularity(characterNames).map((item) => item.count);
        expect(counts).toEqual(expectedCounts);
    });

    test("it should order by the highest number of occurrences", () => {
        expect(orderCharactersByPopularity(characterNames)).toEqual(expectedResult);
    });
});
