describe('testing slack', ()=>{
  var Slack = require('../slack');

  it('run slack with icon', (done)=>{
     var channel = "build";
     var msg = {emoji:":codefresh:", text: "test hook (from oleg)"}
     const webhook = "https://hooks.slack.com/services/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";
     Slack(webhook, channel, msg, (err, resp)=>{
       done();
     });
  });
  it('run slack with extra data', ()=>{

  })
})
