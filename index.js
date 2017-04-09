const alexaSkillKit = require('alexa-skill-kit')
const intent = require('./lib/Intents')

exports.handler = function(event, context) {
	alexaSkillKit(event, context, parsedMessage => {
	    // console.log(JSON.stringify(parsedMessage))
	    return intent(parsedMessage)
	})
}