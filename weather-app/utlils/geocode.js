const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic2FpZnVkZW15IiwiYSI6ImNtOXBxM3B0czBybTgycm9nb2w2cGpvdWgifQ.7MaU0r8cxvwiQ31sfUVCzQ&limit=1'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to the internet.', undefined)
        }
        else if (response.body.features.length === 0) {
            callback('Unable to find the location. Try another location.', undefined)
        }
        else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })

}

module.exports = geocode