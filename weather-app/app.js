const request = require('request')

const url ='https://api.weatherstack.com/current?access_key=5fafe8918a8444419c6f16a5a55c8130&query=37.8267,-122.4233&units=f'

request({url:url, json: true}, (error, response)=>{ //1st arguemnt option object, 2nd function to run 
    console.log(response.body.current.weather_descriptions[0] + '. It is currently '+ response.body.current.temperature + ' F out. It feels like ' + response.body.current.feelslike)
})

const url2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2FpZnVkZW15IiwiYSI6ImNtOXBxM3B0czBybTgycm9nb2w2cGpvdWgifQ.7MaU0r8cxvwiQ31sfUVCzQ&limit=1'

request({url: url2, json:true}, (error, response)=>{
    const latitude = response.body.features[0].center[0]
    const longitute = response.body.features[0].center[1]
    console.log(latitude, longitute)
}
)
