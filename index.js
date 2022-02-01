const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const fs = require('fs')

app.use('/static', express.static(path.join(__dirname, 'ui')))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/data', (req, res) => {
    let responseData = "";
    try {
        const data = fs.readFileSync("./data.json", 'utf8')
        console.log(data)
        responseData = data;
    } catch (err) {
        console.error(err);
        responseData = err;
    }
    res.send(responseData);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})