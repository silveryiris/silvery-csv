import SilveryCSV from "../src/SilveryCSV.js"
import { expect } from "chai"

const testCSV = `
                  a,b ,c
                  somewhere, out , there
                `

describe("CSV string convert", () => {
  it("Can convert csv string to array", () => {
    const csv = new SilveryCSV()
    const { header, data } = csv.csvToArray(testCSV)

    expect(header).members(["a", "b", "c"])
    expect(data.length).to.equal(1)
    expect(data[0]).members(["somewhere", "out", "there"])
  })

  it("Can convert csv string to array without header", () => {
    const csvConfig = { withHeader: false }
    const csv = new SilveryCSV(csvConfig)
    const { header, data } = csv.csvToArray(testCSV)

    expect(header).members([])
    expect(data.length).to.equal(2)
    expect(data[0]).members(["a", "b", "c"])
    expect(data[1]).members(["somewhere", "out", "there"])
  })

  it("Can convert csv string to array and not to trim value", () => {
    const csvConfig = { trim: false }
    const csv = new SilveryCSV(csvConfig)
    const { header, data } = csv.csvToArray(testCSV)

    expect(header).members(["a", "b ", "c"])
    expect(data.length).to.equal(1)
    expect(data[0]).members(["                  somewhere", " out ", " there"])
  })
})
