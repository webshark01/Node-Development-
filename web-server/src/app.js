const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

//define paths for express config
const rootdirpath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//setup handlebars engine and views location here we use the paths defined
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)


//setup static directory to serve
app.use(express.static(rootdirpath))


app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Saif Rehman'
    })
})

app.get('/About', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Saif Rehman'
    })
})



app.get('/Help', (req,res) =>{
    res.render('help', {
        helpmessage: 'This is the help message.',
        title: 'Help',
        name: 'Andrew Mead'
    })
})


app.get('/Weather', (req, res) => {
    res.send({
        forecast: 'It is hot',
        location: 'Lahore'
    })
})

//* wildcard ka matlab hota hai: "koi bhi route jo upar match nahi hua." yani user ny aisa koe bhi route
//  dydia jo uper match ni hua. Ye har us route ko match krta h jo match nahi hota uper. isliye agr help/* ko neechy rkhein 
// to wo help tk ay ga hi ni wo phly hi match kr jaye ga * k sath or chala jaye ga

app.get('/help/*', (req,res) => {
    res.render('404',{
        error: 'Help article not found',
        name: 'Saif Rehman'
    })
})

app.get('*', (req, res) =>{
    res.render('404', {
        error: 'Page not Found',
        name: 'Saif Rehman'
    })
})


app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})