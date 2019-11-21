const { Bot } = require('tock-node');

 

const bot = new Bot('4d14a95a-1182-483f-8b6a-1e7756d9f8c0', 'https://demo-bot.tock.ai/io/christophenguyen79/new_assistant/web');

 



 

bot.addStory('salutation', bot => {

  bot.send('Hello World!');

});

bot.addStory('reponseoui', bot => {

  bot.send('vous avez répondu oui');

});


 

  bot.addStory('meteo', ({ send }) => {

    send('il pleut');

  });