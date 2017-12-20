Meteor.safeMethods = function (methods) {
  const _methods = {}

  _.each(methods, (method, methodName) => {
    _methods[methodName] = function () {
      if (!this.userId)
        throw new Meteor.Error('unauthorized-method', 'The user must be logged in to invoke method')

      return method.apply(this, arguments)
    }
  })

  Meteor.methods(_methods)
}

Meteor.safePublish = function (name, func, unblock = true) {
  Meteor.publish(name, function () {
    if (!this.userId)
      throw new Meteor.Error('unauthorized-publication', 'The user must be logged in to subscribe publication')

    unblock && this.unblock && this.unblock()

    return func.apply(this, arguments)
  })
}
