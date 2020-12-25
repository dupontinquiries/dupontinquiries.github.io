var data = {
  "push-up": [ 4, 0, "chest" ],
  "u push-up": [ 0, 0, "chest" ],
  "archer push-up": [ 0, 0, "chest" ],
  "typewriter push-up": [ 0, 0, "chest" ],
  "explosive push-up": [ 0, 0, "chest" ],
  "one-handed push-up": [ 0, 0, "chest" ],
  "finger push-up": [ 0, 0, "chest & fingers" ],
  "waist push-up": [ 0, 0, "chest" ],
  "planche push-up": [ 0, 0, "chest" ],
  "up-and-down plank": [ 0, 0, "chest & core" ],
  "wide push-up": [ 0, 0, "chest" ],
  "narrow push-up": [ 0, 0, "chest" ],
  "pec fly push-up": [ 0, 0, "chest" ],
  "feet on wall push-up": [ 0, 0, "chest & shoulders" ],
  "sideways push-up": [ 0, 0, "arms & core" ],
  "hantstand push-up": [ 0, 0, "arms & shoulders" ],
  "handstand": [ 0, 0, "arms & shoulders" ],
  "down dog push-up": [ 5, 0, "shoulders" ],
  "incline push-up": [ 5, 0, "shoulders" ],
  "upside-down pull-up": [ 5, 0, "arms & back" ],
  "upside-down chin-up": [ 5, 0, "arms & back" ],
  "inclined pull-up": [ 4, 12, "back" ],
  "inclined chin-up": [ 4, 12, "arms" ],
  "one-arm inclined chin-up": [ 5, 0, "arms" ],
  "one-arm inclined pull-up": [ 5, 0, "back" ],
  "wide pull-up": [ 0, 0, "back" ],
  "muscle-up": [ 9, 1, "full body" ],
  "pull-up": [ 6, 7, "back" ],
  "one arm pull-up": [ 10, 1, "arms & back" ],
  "one arm chin-up": [ 10, 1, "arms & back" ],
  "l-sit pull-up": [ 7, 5, "back & core" ],
  "chin-up": [ 5, 8, "arms & back" ],
  "behind-the-back pull-up": [ 0, 0, "arms & back", "bar" ],
  "front lever pull-up": [ 0, 0, "arms & back", "bar" ],
  "high pull-up": [ 0, 0, "arms & back", "bar" ],
  "slow pull-up": [ 0, 0, "arms & back", "bar" ],
  "commando pull-up": [ 0, 0, "arms & back", "bar" ],
  "neutral-grip pull-up": [ 6, 0, "arms & back", "bar" ],
  "pull-through pull-up": [ 0, 0, "arms & back", "bar" ],
  "narrow pull-up": [ 5, 0, "arms & back", "bar" ],
  "explosive pull-up": [ 7, 0, "arms & back", "bar" ],
  "typewriter pull-up": [ 5, 0, "arms & back", "bar" ],
  "jump-negative pull-up": [ 4, 0, "arms & back", "bar" ],
  "archer pull-up": [ 7, 0, "arms & back", "bar" ],
  "grip-switch pull-up": [ 6, 0, "arms & back", "bar" ],
  "alternating grip-switch pull-up": [ 6, 0, "arms & back", "bar" ],
  "one-arm negative pull-up": [ 7, 0, "arms & back", "bar" ],
  "one-arm negative chin-up": [ 7, 0, "arms & back", "bar" ],
  "l-sit hold on bar": [ 6, 0, "full body", "bar" ],
  "l-sit hold on floor": [ 6, 0, "full body", "none" ],
  "crunch": [ 4, 0, "core", "none" ],
  "plank": [ 5, 0, "core", "none" ],
  "weighted plank": [ 6, 0, "core", "none" ],
  "v-up": [ 4, 15 ],
  "v-up on bar": [ 8, 5 ],
  "crunch on bar": [ 4, 15 ],
  "static pull-up crunch": [ 5, 10 ],
  "ab circles on bar": [ 0, 0, "testToken" ],
  "squat": [ 3, 0, "none" ],
  "weighted squat": [ 5, 0, "squat" ],
  "jump squat": [ 4, 0, "squat" ],
  "one leg balance": [ 2, 0, "squat" ],
  "one leg toe touch": [ 3, 0, "one leg balance" ],
  "pistol squat": [ 6, 0, "weighted squat" ],
  "hamstring raise": [ 3, 0, "none" ],
  "calf raise": [ 0, 0, "none" ],
  "weighted calf raise": [ 0, 0, "calf raise" ],
  "bulgarian squat": [ 0, 0, "jump squat" ],
  "dead lift": [ 0, 0, "hamstring raise" ],
  "box jump": [ 5, 100, "jump squat" ]
}

var n_workouts = 6;

function build (data, arr, n) {
  var tmp = new Array();
  for (var i = 0; i < n; i++) {
    // get unique random index
    var j = -1;
    var k = -1;
    var b = 0;
    while (j == -1 && b < data.length) {
      j = k;
      k = Math.floor(Math.random() * (data.length - 1));
      for (var a = 0; a < tmp.length; a++) {
        if (k == tmp[a]) {
          k = -1;
          break;
        }
      }
      ++b;
    }
    // add random
    tmp.push(j);
    arr.push(data[j]);
  }
  return arr;
}

function newWorkout () {
  var items = new Array();
  items = build(Object.keys(data), items, n_workouts);
  var html = "";
  for ( var i = 0; i < items.length; ++i ) {
    var it = items[i];
    html += "<div class=\"col s12 m6 l6\"><div class=\"card hoverable\"><div class=\"card-image waves-effect waves-block waves-light\"></div<div class=\"card-content\"><span class=\"card-title activator grey-text text-darken-4\">"
     + it + "</span><p class = \"right spaced\">" + (data[it][0] == 0 || data[it].length < 1 ? "n/a" : data[it][0]) + "</p><p class = \"right spaced\">" + (data[it][2] == "testToken" || data[it].length < 3 ? "n/a" : data[it][2]) + "</p></div></div></div>";

     /*
     html += "<div class=\"col s12 m6 l6\"><div class=\"card hoverable\"><div class=\"card-image waves-effect waves-block waves-light\"><img class=\"activator\" src="
      + "images/" + it + "></div<div class=\"card-content\"><span class=\"card-title activator grey-text text-darken-4\">"
      + it + "</span><p class = \"right\">" + data[it][0] + "</p><p>" + data[it][2] + "</p></div></div></div>";
     */
  }
  document.getElementById("portfolioItemContainer").innerHTML = html;
}

function add () {
  ++n_workouts;
  newWorkout();
}

function sub () {
  if (n_workouts == 1) return;
  --n_workouts;
  newWorkout();
}

newWorkout();
