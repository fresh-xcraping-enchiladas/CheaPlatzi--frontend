const text = 'Hello Jest'

test('Should contain a specific word', () => {
  expect(text).toMatch(/Jest/)
})