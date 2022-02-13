
const hostname = '127.0.0.1';
const port = 25565;

const express = require('express');
const res = require('express/lib/response');
const app = express()

app.use('/test', express.static('frontend'));

app.get('/', (req, res) => {
    //res.send('Hello World!')
    res.redirect(301, "/test")
})
app.get("/saber", (req, res) => {
    res.redirect(301, "/test/saber.html")
})
app.get("/imc", (req, res) => { 
    res.redirect(301, "/test/BMI.html")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})