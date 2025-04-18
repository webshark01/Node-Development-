const fs = require('fs')

// fs.writeFileSync('1-json.json', 'okay')
const DataBuffer = fs.readFileSync('1-json.json') // GIVES VALUE IN BINARY
const DataJSON = DataBuffer.toString()
const Data = JSON.parse(DataJSON)
Data.name = 'SAIF'
Data.age = 22
const NewDataJSON = JSON.stringify(Data)

fs.writeFileSync('1-json.json', NewDataJSON)
