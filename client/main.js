Meteor.logout()
Meteor.call('test')
Meteor.loginWithPassword('demo', 'demo')
Tracker.autorun(function () {
  if (!Meteor.userId())
    return
  Meteor.call('test', (err, resp) => {
    console.log(resp)
  })
})
