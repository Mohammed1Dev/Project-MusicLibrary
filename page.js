// const express = require('express')

// const app = express()

// app.get('/', (req, res, next) => {
//     res.send('welcom')
// })
// app.get('/al',(req, res, next) => {
//     res.send('5ra')
// })
// app.all('/my', (req, res, next) => {
//     res.send('404')
// })

// app.listen(3000, () => console.log('fuck you'))


////////////////////////////////////////////////


//post in http
// const http = require('http')
// const body = require('body/form')

// http.createServer((req, res) => {
//     res.setHeader('Content-Type', 'text/html')

//     if (req.method === 'GET') {
        // res.write('<form action="/" method="POST">')
        // res.write('<input name="username">')
        // res.write('<input name="age">')
        // res.write('<input type="submit">')
        // res.write('</form>')
        // res.end()
//     }else if (req.method === 'POST') {

//         //tari9a lawla

//         // let body = []
//         // req.on('data', (chunk) => {
//         //     body.push(chunk)
//         // })
//         // req.on('end', () => {
//         //     body = Buffer.concat(body).toString()
//         //     console.log(body)
//         //     res.end('ok')
//         // })

//         // tari9a tanya

//         // body(req, (err, body) => {
//         //     console.log(body)
//         //     res.end('cool')
//         // })
//     }
// }).listen(3000, () => console.log('7ayyyyyyyyyy'))


//////////////////////////////////////

//post and get in express

// const express = require('express')
// const bodyParser = require('body-parser')
// const bodyParserr = bodyParser.urlencoded({
//     extended: true
// })
// const app = express()

// app.get('/', (req, res, next) => {
//     res.setHeader('Content-Type', 'text/html')
//     res.write('<form action="/" method="POST">')
//     res.write('<input name="username">')
//     res.write('<input name="age">')
//     res.write('<input type="submit">')
//     res.write('</form>')
//     res.end()
// })
// app.post('/', bodyParserr, (req, res, next) => {
//     console.log(req.body)
//     res.end('done')
// })
// app.listen(3000, () => console.log('fuck you'))
//////////////////////////////////////////////////////////////////

// Send html files

const express = require('express')
const path = require('path') // bach iT9ra f ay systm exploitation
const app = express()

app.use(express.static(path.join(__dirname, 'tof')))
app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'Accueil-LM.html'))
})


app.listen(3000, () => console.log('fuck you'))
