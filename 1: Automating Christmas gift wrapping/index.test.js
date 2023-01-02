const { wrapping } = require("./index")

test("Return type should to be an Array", () => {
    const gifts = []
    const expectedOutput = Array
    expect(wrapping(gifts)).toBeInstanceOf(expectedOutput)
})

test("Multiple inputs should to be wrapped in multiple items", () => {
    const gifts = ["cat", "game", "socks"]
    const expectedOutput = [
        "*****\n*cat*\n*****",
        "******\n*game*\n******",
        "*******\n*socks*\n*******",
    ]
    expect(wrapping(gifts)).toStrictEqual(expectedOutput)
})

test("Single input should to be wrapped in single item", () => {
    const gifts = ["midu"]
    const expectedOutput = ["******\n*midu*\n******"]
    expect(wrapping(gifts)).toStrictEqual(expectedOutput)
})

test("Single character should to be correctly wrapped", () => {
    const gifts = ["a"]
    const expectedOutput = ["***\n*a*\n***"]
    expect(wrapping(gifts)).toStrictEqual(expectedOutput)
})

test("Empty input should to end in empty output", () => {
    const gifts = []
    const expectedOutput = []
    expect(wrapping(gifts)).toStrictEqual(expectedOutput)
})
