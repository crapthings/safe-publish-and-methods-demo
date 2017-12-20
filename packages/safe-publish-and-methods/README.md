### WHY

> some app require login to use any publicaitons and methods, you always write check this.userId inside every pub, method and throw error. by using this u can write less code.

### INSTALL

```bash
meteor add crapthings:safe-publish-and-methods
```

### NOTICE

> you can install publish unblock to get better performance, its safe to unblock every publications.

```bash
meteor add meteorhacks:unblock
```

* https://github.com/meteorhacks/unblock

* https://github.com/meteorhacks/unblock/issues/2#issuecomment-60660140

### API

```javascript
Meteor.safeMethods(methods)
```

* http://docs.meteor.com/api/methods.html#Meteor-methods

```javascript
Meteor.safePublish(name, func, unblock = true)
```

* http://docs.meteor.com/api/pubsub.html#Meteor-publish

if something wrong with unblock just set unblock to false
Meteor.safePublish(name, func, false)

examples

```javascript
Meteor.safeMethods({
  test() {
    return 'test'
  }
})
```

```javascript
Meteor.safePublish('test', function (opt) {
  console.log(Meteor.user())
  return this.ready()
})
```
