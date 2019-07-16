class SilveryCSV {
  constructor({ withHeader = true, trim = true } = {}) {
    this.withHeader = withHeader
    this.trim = trim
  }

  splitCsv(csvString) {
    // seperate raw to lines
    const rows = csvString.trim().split(/\r\n|\n|\r/)

    // remove empty line if exists
    const result = rows.filter(row => row !== "")

    return result
  }

  // https://stackoverflow.com/questions/23582276/
  csvRowToArray(csvString) {
    const splitCommasRegex = /,(?=(?:(?:[^"]*"){2})*[^"]*$)/
    const fields = csvString.split(splitCommasRegex)

    // keep the undefined
    const result = fields.map(column => {
      const value = column.replace(/^"|"$/gm, "")

      if (!value || !value.length || (!value.match(/\S+/g) || value.match(/""/g))) {
        return null
      } else {
        return this.trim ? value.trim() : value
      }
    })

    return result
  }

  csvToArray(csvString) {
    const rows = this.splitCsv(csvString)
    let headerRow = []
    let dataRows = rows

    if (this.withHeader === true) {
      headerRow = rows.slice(0, 1)
      dataRows = rows.slice(1)
    }

    const [[headerArray], dataArray] = [
      headerRow.map(r => this.csvRowToArray(r)),
      dataRows.map(r => this.csvRowToArray(r))
    ]

    const result = { header: headerArray || [], data: dataArray }

    return result
  }
}

export default SilveryCSV
