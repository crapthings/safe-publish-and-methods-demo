Package.describe({
  name: 'crapthings:safe-publish-and-methods',
  summary: 'server side publish and methods protected by login and custom rules',
  version: '0.0.1',
  git: 'https://github.com/crapthings/safe-publish-and-methods'
})

Package.on_use(function (api) {
  api.add_files('index.js', 'server')
})
