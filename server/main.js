Meteor.safeMethods({
  test() {
    return 'hello world'
  }
})

if (!Meteor.users.findOne({ username: 'demo' })) {
  Accounts.createUser({ username: 'demo', password: 'demo' })
}
