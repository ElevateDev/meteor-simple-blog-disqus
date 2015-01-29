Blog.showAfterBody.push( Template.simpleBlogDisqus );

Template.simpleBlogDisqus.rendered = function(){
  if( !Blog.disqusShortname ){
    console.error( "DISQUS shortname not configured correctly");
  }else if( !window.DISQUS ){
    var disqus_identifier = Blog._showing.get();

    disqus_shortname = Blog.disqusShortname;
    disqus_identifier = Blog._showing.get();
    disqus_url = window.location.href;

    var dsq = document.createElement("script");
    dsq.type = "text/javascript";
    dsq.async = true;
    dsq.src = "//" + disqus_shortname + ".disqus.com/embed.js";
    (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild( dsq );
  }else{
    DISQUS.reset({
      reload: true,
      config: function () {  
        this.page.identifier = Blog._showing.get();
      }
    });
  }
}
