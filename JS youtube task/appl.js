var myapi='https://www.googleapis.com/youtube/v3/search?key=AIzaSyAzl7AyWqhS0B3NHJSewuqikF05PG0_FeI&type=video&part=snippet&maxResults=50&q=';
//var searchkey=document.getElementById("searchkey").value;
var submitButton=document.getElementById("submit");
//console.log(document.getElementById("searchkey").value);
submitButton.addEventListener('click',ButtonClicked);
function ButtonClicked(event)
{
    var pageno=0;
    document.getElementById("prepage").style.visibility = "hidden";
    document.getElementById("nxtpage").style.visibility = "visible";
    var searchkey=document.getElementById("search").value;
    var url=myapi+searchkey;
    fetch(url)
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      console.log(data);
      let output = "";
      let datum = data.items;
      let ind=0;
        for (i=ind;i<ind+10;i++) {
          post=datum[i]
          output =
          output +
          `<figure id="fig+${post.snippet.thumbnails.medium.url}">
            <div><div id="innerdiv"><iframe width="320" height="200" frameborder="0" src="https://www.youtube.com/embed/${post.id.videoId}"></iframe></div>
            <div> <p><b><a href="https://youtu.be/${post.id.videoId}">${post.snippet.title}</a></b></p></div> <div><p>${post.snippet.description}</p></div> 
            <div><p><b>Uploaded by:</b><a href="https://www.youtube.com/channel/${post.snippet.channelId}"> ${post.snippet.channelTitle}</a></p></div></div></figure>`;
          }
      ind=i;
      pageno++;
      document.getElementById("results").innerHTML = output;
      document.getElementById("no").innerHTML=pageno;
      output="";

    var NextPageButton=document.getElementById("nxtpage");
    NextPageButton.addEventListener('click',ButtonClicked1);
    function ButtonClicked1(event){
      document.getElementById("prepage").style.visibility = "visible";
      document.getElementById("nxtpage").style.visibility = "hidden";
      if(ind<40){
        var f=0;
        for (i=ind;i<ind+10;i++) {
            f=1;
            post=datum[i]
            output =
            output +
            `<figure id="fig+${post.snippet.thumbnails.medium.url}">
            <div><div id="innerdiv"><iframe width="320" height="200" frameborder="0" src="https://www.youtube.com/embed/${post.id.videoId}"></iframe></div>
            <div> <p><b><a href="https://youtu.be/${post.id.videoId}">${post.snippet.title}</a></b></p></div> <div><p>${post.snippet.description}</p></div> 
            <div><p><b>Uploaded by:</b><a href="https://www.youtube.com/channel/${post.snippet.channelId}"> ${post.snippet.channelTitle}</a></p></div></div></figure>`;
          }
        if(f==1)
          pageno++;
        ind=i;
        if(ind<40)
          document.getElementById("nxtpage").style.visibility = "visible";
        document.getElementById("results").innerHTML = output;
        document.getElementById("no").innerHTML=pageno;
        output="";
      }
    }

    var PrevPageButton=document.getElementById("prepage");
    PrevPageButton.addEventListener('click',ButtonClicked2);
    function ButtonClicked2(event){
        document.getElementById("nxtpage").style.visibility = "visible";
        document.getElementById("prepage").style.visibility = "hidden";
        var f=0;
        ind=ind-10;
        for (i=ind-10;i<=ind-1&&i>=0;i++) {
            f=1;
            post=datum[i]
            output =
            output +
            `<figure id="fig+${post.snippet.thumbnails.medium.url}">
            <div><div id="innerdiv"><iframe width="320" height="200" frameborder="0" src="https://www.youtube.com/embed/${post.id.videoId}"></iframe></div>
            <div> <p><b><a href="https://youtu.be/${post.id.videoId}">${post.snippet.title}</a></b></p></div> <div><p>${post.snippet.description}</p></div> 
            <div><p><b>Uploaded by:</b><a href="https://www.youtube.com/channel/${post.snippet.channelId}"> ${post.snippet.channelTitle}</a></p></div></div></figure>`;
        }
        if(f==1)
          pageno--;
        if(ind>10)
          document.getElementById("prepage").style.visibility = "visible";
        document.getElementById("results").innerHTML = output;
        document.getElementById("no").innerHTML=pageno;
        output="";
    }
});
}