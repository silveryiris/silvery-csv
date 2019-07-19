# silvery-csv
Convert simple csv file and string to array

# Install
````
npm i silvery-csv
````

# Usage

````javascript

import SilveryCSV from "silvery-csv"
const csv = new SilveryCSV()

const str =  `
                a , b , c
                1 , 2 , 3
                4 , 5 , 6
             `

const result = csv.csvToArray(str)
console.log(result)

/*
{
  header: [ 'a', 'b', 'c' ],
  data: [ [ '1', '2', '3' ], [ '4', '5', '6' ] ]
}
*/

````

## splitCsv(csvString)


````javascript
import SilveryCSV from "silvery-csv"
const csv = new SilveryCSV()

const str =  `
                a , b , c
                1 , 2 , 3
                4 , 5 , 6
             `

const result = csv.splitCsv(str)
console.log(result)

/*
The element will not trim.

[
  'a , b , c',
  '                1 , 2 , 3',
  '                4 , 5 , 6'
]
*/

````

## csvRowToArray(csvString) 

````javascript
import SilveryCSV from "silvery-csv"
const csv = new SilveryCSV()

const str = `
              a , b , c
              1 , 2 , 3
              4 , 5 , 6
            `
            
const rows = csv.splitCsv(str)
const result = rows.map(r => csv.csvRowToArray(r))
console.log(result)

/*
[ [ 'a', 'b', 'c' ], [ '1', '2', '3' ], [ '4', '5', '6' ] ]
*/
````

# Config
Default config is `{ withHeader = true, trim = true }`
You can pass it on the constructor

````javascript
// with header and trim value
const csv = new SilveryCSV()

// no header and trim value
const csvNoHeader = new SilveryCSV({ withHeader: false })

// no header and not trim value
const csvNoHeaderAndTrim = new SilveryCSV({ withHeader: false, trim: false })
````

# Test

````
npm test
````

# License

See [license file.](https://github.com/silveryiris/cache-that/blob/master/LICENSE)

