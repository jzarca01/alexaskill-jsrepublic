const weather = require('yahoo-weather')

function test(location) {
    return weather(location)
        .then(info => info.item)
        .then(item => item.condition)
        .then(condition => {
        //console.log('info', condition)
        return `It is currently ${condition.text} with ${condition.temp} degrees in ${location}`
        })
        .catch(() => {
        return `Hm, I can't find any weather data for ${location}.`
        })

}

test('amsterdam').then(result => console.log(result) );