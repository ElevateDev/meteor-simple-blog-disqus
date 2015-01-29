Package.describe({
  name: 'elevatedevdesign:simple-blog-disqus',
  summary: 'Package to add disqus to simple-blog',
  version: '0.0.1',
  git: 'https://github.com/ElevateDevelopmentAndDesign/meteor-simple-blog-disqus'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');
  
  api.use([
    'elevatedevdesign:simple-blog@0.0.7',
    'templating'
  ]);
 
  api.addFiles([
    'client/client.html',
    'client/client.js'
  ],'client');
});

Package.on_test(function (api) {
  api.use(['elevatedevdesign:simple-blog-disqus', 'tinytest', 'test-helpers', 'blaze'], ['client']);
  api.add_files('tests/client.js', ['client']);
});
