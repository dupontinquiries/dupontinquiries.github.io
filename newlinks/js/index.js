

var links = {"data": [
  {
     "name":"Instagram",
     "color":"pink",
     "icon":"instagram",
     "url":"https://www.instagram.com/yo.k.thats.crazy/"
  },
  {
      "name":"Spotify",
      "color":"green",
      "icon":"music",
      "url":"https://open.spotify.com/artist/3UZDsnAmnpGlFGlFyikvIt?si=UuOryZueRL2hSHIA4IRopg"
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
      "name":"BeatStars",
      "color":"red",
      "icon":"shopping",
      "url":"https://www.beatstars.com/yokthatscrazy"
   },
   {
      "name":"COVID-19 Fundraiser",
      "color":"yellow",
      "icon":"rocket",
      "url":"https://www.gofundme.com/f/fund-the-rocket"
   }
]}

var items = {"data": [
  {
    "name": "Spotify",
    "description": "Listen to songs from The Kitchen and featured artists.",
    "image": "images/spotify.jpg",
    "link": "https://open.spotify.com/artist/3UZDsnAmnpGlFGlFyikvIt?si=UuOryZueRL2hSHIA4IRopg",
    "songDemo" : false
  },
  {
    "name": "Apple Music",
    "description": "Listen to songs from The Kitchen and featured artists.",
    "image": "images/applemusic.png",
    "link": "https://music.apple.com/us/artist/the-kitchen/1480129249",
    "songDemo" : false
  },
  {
    "name": "YouTube",
    "description": "Music videos & more await.",
    "image": "images/youtube.png",
    "link": "https://www.youtube.com/channel/UCw7YTR6oSIan42thJCtWC9g",
    "songDemo" : false
  },
  {
    "name": "BeatStars",
    "description": "Pick up some fire beats.",
    "image": "images/beatstars.jpg",
    "link": "https://www.beatstars.com/yokthatscrazy",
    "songDemo" : false
  },
  {
    "name": "COVID-19 Fundraiser",
    "description": "Support The Rocket Initiative, our fight against COVID-19.",
    "image": "images/avengers.jpg",
    "link": "https://www.beatstars.com/yokthatscrazy",
    "songDemo" : false
  },
  {
    "name": "The Kitchen",
    "description": "Coming soon!",
    "image": "images/people/thekitchen.jpg",
    "link": "https://www.instagram.com/yo.k.thats.crazy/",
    "songDemo" : false
  },
  {
    "name": "TripLit",
    "description": "Coming soon!",
    "image": "images/people/triplit.jpg",
    "link": "https://www.instagram.com/triplit_official/",
    "songDemo" : false
  },
  {
    "name": "SJ",
    "description": "Coming soon!",
    "image": "images/people/sj.jpg",
    "link": "https://www.instagram.com/sj.menon/",
    "songDemo" : false
  },
  {
    "name": "Run Up",
    "description": "The Kitchen - Run Up (feat. SJ) is available on all platforms.",
    "image": "images/songs/runup.jpg",
    "link": "https://open.spotify.com/track/3rwRLRQdAqNFmc5mG4wsa2?si=y-2z5-zOR4SZ2U2WjgTRww",
    "songDemo" : true,
    "audioFile" : "audio/runup.mp3"
  },
  {
    "name": "Rho",
    "description": "The Kitchen - Rho (feat. SJ) is available on all platforms.",
    "image": "images/songs/rho.jpg",
    "link": "https://open.spotify.com/track/12VX4vJ4T1JhFMN3BirYzu?si=d0QBFUS3Tv29ye6YkE8kvw",
    "songDemo" : true,
    "audioFile" : "audio/rho.mp3"
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
    "name": "Bars",
    "description": "The Kitchen - Bars (feat. SJ) is available on all platforms.",
    "image": "images/songs/bars.jpg",
    "link": "https://open.spotify.com/track/5iMD9mnkWyIcJDoACq3B8W?si=SmAfOUCMQCeWBWgHrjwt8g",
    "songDemo" : true,
    "audioFile" : "audio/bars.mp3"
  },
  {
    "name": "Known",
    "description": "The Kitchen - Known (feat. SJ) is available on all platforms.",
    "image": "images/songs/known.jpg",
    "link": "https://open.spotify.com/track/0us3QPqtjr5N0vnMFxvI3y?si=nSSM8oLQQM2PeSxNUsZxhw",
    "songDemo" : true,
    "audioFile" : "audio/known.mp3"
  },
  {
    "name": "I Don't Know You Tell Me",
    "description": "Eric Weir's debut album, I Don't Know You Tell Me, is available on all platforms.",
    "image": "images/songs/idkytm.jpg",
    "link": "https://open.spotify.com/album/2d4iFet1Qw8vCQmcNm75iT?si=eZUu2PrbTLuT6cw_YqPClw",
    "songDemo" : true,
    "audioFile" : "audio/idkytm.mp3"
  }
]
}

var html = "";
for ( var i = 0; i < links.data.length; ++i ) {
  var it = links.data[i];

  // // // //

  console.log(it.name);
  html += "<div class=\"links waves-effect\"><a href=" + it.url + " class=\"black-text valign-wrapper\" target=\"_blank\"><i class=\"link_icon mdi mdi-" + it.icon + "\" style=\"color: " + it.color + "\"></i>&nbsp; " + it.name + "</a></div>";

  // // // //
}
document.getElementById("socialLinkContent").innerHTML = html;

html = "";
for ( var i = 0; i < items.data.length; ++i ) {

  var it = items.data[i];
  // // // //

  console.log(it.name);
  if ( it.songDemo ) {
    html += "<div class=\"col s12 m6 l6\"><div class=\"card hoverable\"><div class=\"card-image waves-effect waves-block waves-light\"><img class=\"activator\" src=" + it.image + "></div><div class=\"card-content\"><span class=\"card-title activator grey-text text-darken-4\">" + it.name + "<i class=\"material-icons right\">keyboard_arrow_up</i></span><p><a href=" + it.link + " target=\"_blank\">Visit</a></p></div><div class=\"card-reveal\"><span class=\"card-title grey-text text-darken-4\">" + it.name + "<i class=\"material-icons right\">close</i></span><p>" + it.description;
    html += "<br>" + "<p><audio controls><source src=\"" + it.audioFile + "\" type=\"audio/mpeg\">Your browser does not support the audio element.</audio></p>" + "</p></div></div></div>";
  } else {
    html += "<div class=\"col s12 m6 l6\"><div class=\"card hoverable\"><div class=\"card-image waves-effect waves-block waves-light\"><img class=\"activator\" src=" + it.image + "></div><div class=\"card-content\"><span class=\"card-title activator grey-text text-darken-4\">" + it.name + "<i class=\"material-icons right\">keyboard_arrow_up</i></span><p><a href=" + it.link + " target=\"_blank\">Visit</a></p></div><div class=\"card-reveal\"><span class=\"card-title grey-text text-darken-4\">" + it.name + "<i class=\"material-icons right\">close</i></span><p>" + it.description + "</p></div></div></div>";
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

/*

var work = document.getElementById("portfolioItemContainer");
var workRequest = new XMLHttpRequest();

var link = document.getElementById("socialLinkContent");
var linkRequest = new XMLHttpRequest();

linkRequest.open("GET", "json/links.json", true);
linkRequest.onreadystatechange = function () {
    if (linkRequest.readyState === 4) {
        if (linkRequest.status === 200 || linkRequest.status == 0) {
            var html = "";
            JSON.parse(linkRequest.responseText).forEach(function (link) {
                console.log(link.name);
                html += "<div class=\"links waves-effect\"><a href=" + link.url + " class=\"black-text valign-wrapper\" target=\"_blank\"><i class=\"link_icon mdi mdi-" + link.icon + "\" style=\"color: " + link.color + "\"></i>&nbsp; " + link.name + "</a></div>";
            });
            link.innerHTML = html;
        }
    }
};
linkRequest.send(null);

workRequest.open("GET", "json/items.json", true);
workRequest.onreadystatechange = function () {
    if (workRequest.readyState === 4) {
        if (workRequest.status === 200 || workRequest.status == 0) {
            var html = "";
            JSON.parse(workRequest.responseText).forEach(function (work) {
                console.log(work.name);
                if ( link.songDemo ) {
                  html += "<div class=\"col s12 m6 l6\"><div class=\"card hoverable\"><div class=\"card-image waves-effect waves-block waves-light\"><img class=\"activator\" src=" + work.image + "></div><div class=\"card-content\"><span class=\"card-title activator grey-text text-darken-4\">" + work.name + "<i class=\"material-icons right\">keyboard_arrow_up</i></span><p><a href=" + work.link + " target=\"_blank\">Visit</a></p></div><div class=\"card-reveal\"><span class=\"card-title grey-text text-darken-4\">" + work.name + "<i class=\"material-icons right\">close</i></span><p>" + work.description + "<br>" + link.songDemoURL + "</p></div></div></div>";
                } else {
                  html += "<div class=\"col s12 m6 l6\"><div class=\"card hoverable\"><div class=\"card-image waves-effect waves-block waves-light\"><img class=\"activator\" src=" + work.image + "></div><div class=\"card-content\"><span class=\"card-title activator grey-text text-darken-4\">" + work.name + "<i class=\"material-icons right\">keyboard_arrow_up</i></span><p><a href=" + work.link + " target=\"_blank\">Visit</a></p></div><div class=\"card-reveal\"><span class=\"card-title grey-text text-darken-4\">" + work.name + "<i class=\"material-icons right\">close</i></span><p>" + work.description + "</p></div></div></div>";
                }
            });
            work.innerHTML = html;
        }
    }
};
workRequest.send(null);

*/
