const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.weatherstack.com/current?access_key=5fafe8918a8444419c6f16a5a55c8130&query=' + latitude + ',' + longitude + '&units=m'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to the Weather Stack API.', undefined)
        }
        else if (response.body.error) {
            callback('Unable to Find the location!', undefined)
        }
        else {
            callback(undefined, response.body.current.weather_descriptions[0] + '.It is currently ' + response.body.current.temperature + ' Degrees out. It feels like ' + response.body.current.feelslike)
        }
    })
}

module.exports = forecast
