
var Slack  = require('./slack');
var assert = require('assert');

var webhook = process.env.CHANNEL_URL || "https://hooks.slack.com/services/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";
var text = process.env.MSG_TEXT;
var emoji   = process.env.MSG_EMOJI;
var channel = process.env.SLACK_CHANNEL || "build";

assert(webhook);
assert(text);
assert(channel);


Slack(webhook, channel, {text: text, emoji:emoji}, (err, response)=>{
  console.log(err);

  if (err)
    return process.exit(1);

  process.exit();
});
