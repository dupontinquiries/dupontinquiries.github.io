

var links = {"data": [
  {
    "name":"The Kitchen",
    "color":"orange",
    "icon":"home",
    "url":"https://dupontinquiries.github.io/thekitchen"
  },
  {
     "name":"Instagram",
     "color":"pink",
     "icon":"instagram",
     "url":"https://www.instagram.com/triplit_official"
  },
  {
      "name":"Spotify",
      "color":"green",
      "icon":"music",
      "url":"https://open.spotify.com/artist/3L1H7asE9rUOGpLZcRQodt?si=R1b346NESFCWJetW3LzfBg"
   },
   {
      "name":"Apple Music",
      "color":"purple",
      "icon":"apple",
      "url":"https://music.apple.com/us/artist/the-kitchen/1480129249"
   },
   {
      "name":"YouTube",
      "color":"red",
      "icon":"video",
      "url":"https://www.youtube.com/channel/UCw7YTR6oSIan42thJCtWC9g"
   },
   {
     "name":"COVID-19 Fundraiser",
     "color":"brown",
     "icon":"rocket",
     "url":"https://www.gofundme.com/f/fund-the-rocket"
   }
]}

var items = {"data": [
  {
    "name": "TripLit",
    "description": "Coming soon!",
    "image": "images/people/triplit.jpg",
    "link": "https://www.instagram.com/triplit_official/",
    "songDemo" : false
  },
  {
    "name": "All My Life",
    "description": "The Kitchen - All My Life (feat. TripLit) is available on all platforms.",
    "image": "images/songs/allmylife.jpg",
    "link": "https://open.spotify.com/track/2XfOcve72EWAVC4PBVQs1D?si=h0csgpFOR5eQtV_mQDgL-g",
    "songDemo" : true,
    "audioFile" : "audio/aml.mp3"
  },
  {
    "name": "REVOLUTION",
    "description": "TripLit - REVOLUTION coming January 2021.",
    "image": "images/album.jpg",
    "link": "",
    "songDemo" : false,
    "embed": false
  }
]
}

var html = "";
for ( var i = 0; i < links.data.length; ++i ) {
  var it = links.data[i];

  // // // //

  //console.log(it.name);
  html += "<div class=\"links waves-effect\"><a href=" + it.url + " class=\"black-text valign-wrapper\" target=\"_blank\"><i class=\"link_icon mdi mdi-" + it.icon + "\" style=\"color: " + it.color + "\"></i>&nbsp; " + it.name + "</a></div>";

  // // // //
}
document.getElementById("socialLinkContent").innerHTML = html;

html = "";
for ( var i = 0; i < items.data.length; ++i ) {

  var it = items.data[i];
  // // // //

  //console.log(it.name);
  if ( it.songDemo ) {
    html += "<div class=\"col s12 m6 l6\"><div class=\"card hoverable\"><div class=\"card-image waves-effect waves-block waves-light\"><img class=\"activator\" src=" + it.image + "></div><div class=\"card-content\"><span class=\"card-title activator grey-text text-darken-4\">" + it.name + "<i class=\"material-icons right\">keyboard_arrow_up</i></span><p><a href=" + it.link + " target=\"_blank\">Listen</a></p></div><div class=\"card-reveal\"><span class=\"card-title grey-text text-darken-4\">" + it.name + "<i class=\"material-icons right\">close</i></span><p>" + it.description;
    html += "<br>" + "<p><audio controls><source src=\"" + it.audioFile + "\" type=\"audio/mpeg\">Your browser does not support the audio element.</audio></p>" + "</p></div></div></div>";
  } else {
    //var extravisit = "<p><a href=" + it.link + " target=\"_blank\">Visit</a></p>";
    var extravisit = "";
    html += "<div class=\"col s12 m6 l6\"><div class=\"card hoverable\"><div class=\"card-image waves-effect waves-block waves-light\"><img class=\"activator\" src=" + it.image + "></div><div class=\"card-content\"><span class=\"card-title activator grey-text text-darken-4\">" + it.name + "<i class=\"material-icons right\">keyboard_arrow_up</i></span><p><a href=" + it.link + " target=\"_blank\">Visit</a></p></div><div class=\"card-reveal\"><span class=\"card-title grey-text text-darken-4\">" + it.name + "<i class=\"material-icons right\">close</i></span><p>" + it.description + "</p>" + extravisit + "</div></div></div>";
  }

  // // // //

}
document.getElementById("portfolioItemContainer").innerHTML = html;

document.addEventListener('play', function(e){
    var audios = document.getElementsByTagName('audio');
    for(var i = 0, len = audios.length; i < len;i++){
        if(audios[i] != e.target){
            audios[i].pause();
        }
    }
}, true);
