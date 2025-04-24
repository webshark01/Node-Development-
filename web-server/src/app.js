const path = require('path')
const express = require('express')

const app = express()

const rootdirpath = path.join(__dirname, '../public')
app.use(express.static(rootdirpath))

// app.get('', (req, res) => {
//     res.send('Hello Express!')
// }) // yani k jb koe hamari app k home(root) route py request krta h yani home(root) page kholta h,
// // req: its an object containing info about the req that is made on our server

app.get('/Weather', (req, res) => {
    res.send({
        forecast: 'It is hot',
        location: 'Lahore'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})