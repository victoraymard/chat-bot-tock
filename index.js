const { Bot, i18nText, suggestion } = require('tock-node');

 

const bot = new Bot('7282df31-ec40-4492-ae09-204ac11507eb', 'https://demo-bot.tock.ai/io/xavierdecazenove/test1727/web');

const imageCard = require('tock-node').imageCard;



 

bot.addStory('salutation', bot => {

  bot.send({
    type: "sentence",
    text: i18nText("Bonjour Jules !"),
  });
  bot.send({
    type: "sentence",
    text: i18nText("Tout à l’heure on est passé à côté de la ville de Chablis 😊"),
  });
  bot.send({
    type: "sentence",
    text: i18nText("Son vin est tellement connu, qu’il est devenu une expression au Etat-Unis pour dire verre de vin blanc 🍷😆"),
  });
  // bot.send({
  //   type: "card",
  //   ...imageCard("Title", "imageTrain/image1.png"),
  //   delay: 1000
  // });
  bot.send({
    type: "sentence",
    text: i18nText("Tu veux en savoir plus sur la région ?"),
    suggestions: [suggestion("On se connait?"),suggestion("Oui, pourquoi pas !")]
  });

});



bot.addStory('partie', bot => {

  bot.send({
    type: "sentence",
    text: i18nText("Super ! Voici un petit article très sympathique sur un événement de la région 😉"),
  });
   bot.send({
      type: "card",
     ...imageCard("", "imageTrain/chablis.jpg"),
  });
  bot.send({
    text: i18nText("J'espère que tu l'as aimé !"),
    type: "sentence",
    suggestions: [suggestion("Dis m’en plus !"),suggestion("On change de sujet 😊")]
  });
});

bot.addStory('jeu', bot => {

  bot.send({
    type: "sentence",
    text: i18nText("Ok ! "),
  });
  bot.send({
    type: "card",
    ...imageCard("", "imageTrain/toit.jpg"),
  });
  bot.send({
    text: i18nText("Devine de quelle ville proviennent ces toits ?"),
    type: "sentence",
    suggestions: [suggestion("Chalon-sur Saône"),suggestion("Beaune"),suggestion("Auxerre")]
  });

});

bot.addStory('arriver', bot => {

  bot.send({
    type: "sentence",
    text: i18nText("Bravo ! Tu m’épates, t’as gagné 32 points 💪"),
  });
  bot.send({
    type: "sentence",
    text: i18nText("Tu es 1er de ton wagon, mais 4ème du train … fais moi signe si tu veux améliorer ton score 😉"),
  });
  bot.send({
    type: "sentence",
    text: i18nText("Bon aller on est bientôt arrivé à Lyon 🤗 "),
  });

});