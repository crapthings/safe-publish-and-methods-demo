Meteor.safeMethods({
  test() {
    return 'hello world'
  }
})

Meteor.safeMethods.rules = ({
  test() {
    console.log(this)
    const { username } = Meteor.user()
    if (username === 'demo')
      throw new Meteor.Error('demo can\'t invoke test')
  }
})

if (!Meteor.users.findOne({ username: 'demo' })) {
  Accounts.createUser({ username: 'demo', password: 'demo' })
}

//
