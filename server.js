const express = require('express')
const app = express()
const port = 3000

app.post('/UserInput', function(req, res) {
    console.log(req.query)
    res.send('Hello World!')
})

app.get('/', function(req, res) {
    res.send('Server Running.....')
})

app.listen(port, () => console.log(`Server listening on port ${port}!`))