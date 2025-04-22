const geocode = require('./utlils/geocode')
const forecast = require('./utlils/forecast')

const input = process.argv[2]
if (!input)
{
    return console.log('Please provide a location.')
}

geocode(input, (error, data) => { //we call it anonymous funtion iska koe naam ni hota direct implementation hoti h
    if (error) {
        return console.log(error)
    }

    forecast(data.latitude, data.longitude, (error, forecastdata) => {
        if (error) {
            return console.log(error)
        }
        console.log(data.location)
        console.log(forecastdata)
    })
})