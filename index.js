const { Bot } = require('tock-node');

 

const bot = new Bot('7282df31-ec40-4492-ae09-204ac11507eb', 'https://demo-bot.tock.ai/io/xavierdecazenove/test1727/web');

 



 

bot.addStory('salutation', bot => {

  bot.send('Hello World!');

});

bot.addStory('reponseoui', bot => {

  bot.send('vous avez répondu oui');

});


 

  bot.addStory('meteo', ({ send }) => {

    send('il pleut');

  });

