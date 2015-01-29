Tinytest.add('SimpleBlogDisqus - Loads disqus', function (test, completed) {
  var $div = $('<div>');
  Blaze.render(Template['simpleBlogDisqus'], $div.get(0));
  Meteor.setTimeout(function(){
    test.equal(typeof(DISQUS), Object, 'Expected disqus to be defined');
    completed();
  },5000);
});
