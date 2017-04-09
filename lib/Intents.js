const weather = require('yahoo-weather')

module.exports = function(parsedMessage) {
	if (parsedMessage.type === 'IntentRequest' && parsedMessage.intent.name === 'GetWeather')
        return weather(parsedMessage.intent.slots.Location.value)
          .then(info => info.item)
          .then(item => item.condition)
          .then(condition => {
            //console.log('info', condition)
            return `It is currently ${condition.text} with ${condition.temp} degrees in ${parsedMessage.intent.slots.Location.value}`
          })
          .catch(() => {
            return `Hm, I can't find any weather data for ${parsedMessage.intent.slots.Location.value}.`
          })
}
