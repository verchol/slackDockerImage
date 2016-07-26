var Slack = require('slack-node');

webhookUri = process.env.channelUrl  ;

var SlackSender = function(webhook, channel, msg, callback){

slack = new Slack();
slack.setWebhook(webhook);

var extraData = (msg.extraData) ? "\nExtra Data:" + msg.extraData : "";
// slack emoji
slack.webhook({
  channel: channel || "#build",
  username: "codefresh",
  //icon_emoji: ":ghost:",
  icon_emoji: msg.emoji || 	":codefresh:",
  //" ,"http://icons.iconarchive.com/icons/rokey/popo-emotions/128/after-boom-icon.png",
  text: msg.text + extraData|| "build passed",
}, function(err, response) {
  console.log(response);
  if (!err && response && response.statusCode === 404)
       err = new Error(response.status);

  callback(err, response);
});

}

module.exports = SlackSender;

/*
// URL image
slack.webhook({
  channel: "#build",
  username: "webhookbot",
  icon_emoji: "http://icons.iconarchive.com/icons/rokey/popo-emotions/128/after-boom-icon.png",
  text: "test message, test message"
}, function(err, response) {
  console.log(response);
});
*/
