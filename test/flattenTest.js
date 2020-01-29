const flattened = [0, 1, 2, 3, 4, 5]
const testCases = [
  [0, [1], 2, [3, 4, [5]]],
  [0, 1, [2, [3, 4]], 5],
  'haha',
  [[0], 1, 2, [3, 4], 5],
  [[[0]], 1, 2, 3,[[[4, 5]]]],
  12345,
  [0, 1, 2, 3, 4, 5]
]

describe('Flatten', () => {

  testCases.forEach(testCase => {
    // test cases all flatten to [0, 1, 2, 3, 4, 5] or they are undefined
    const expectedResult = Array.isArray(testCase) ? flattened : undefined

    it(`${JSON.stringify(testCase)} should equal ${JSON.stringify(expectedResult)}`, () => {
      const result = flatten(testCase)
      expect(result).to.deep.equal(expectedResult)
    })
  })

})
