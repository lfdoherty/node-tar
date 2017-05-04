const Parse = require('../../lib/parse.js')
const path = require('path')
const file = process.argv[2] || path.resolve(__dirname, '../npm.tar')
const fs = require('fs')
const data = fs.readFileSync(file)

const start = process.hrtime()
const p = new Parse()
p.on('entry', entry => entry.resume())
p.on('end', _ => {
  const end = process.hrtime(start)
  console.log(end[0]*1e3 + end[1]/1e6)
})
p.end(data)
