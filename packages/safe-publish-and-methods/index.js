const CONFIG = {
  unblockPublish: true,
}

Meteor.safeMethods = function (methods) {
  const _methods = {}

  _.each(methods, (method, methodName) => {
    _methods[methodName] = function () {
      if (!this.userId)
        throw new Meteor.Error('unauthorized-method', 'The user must be logged in to invoke method')

      const rules = Meteor.safeMethods.rules
      rules && rules[methodName] && rules[methodName].apply(this, arguments)

      return method.apply(this, arguments)
    }
  })

  Meteor.methods(_methods)
}

Meteor.safePublish = function (name, func) {
  Meteor.publish(name, function () {
    if (!this.userId)
      throw new Meteor.Error('unauthorized-publication', 'The user must be logged in to subscribe publication')

    CONFIG.unblockPublish && this.unblock && this.unblock()

    const rules = Meteor.safePublish.rules
    rules && rules[name] && rules[name].apply(this, arguments)

    return func.apply(this, arguments)
  })
}
