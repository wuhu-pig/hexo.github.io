var posts=["2024/08/27/202408267/","2024/08/27/20240827/","2024/08/27/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };