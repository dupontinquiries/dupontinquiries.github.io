//items.data = shuffle(items.data);

function shuffle(arr) {
    for (var i = 0; i < arr.length; i++) {
      // get random index
      var j = i + Math.floor(Math.random() * (arr.length - i));
      // shuffle
      var temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
      console.log(i + ", " + j);
    }
    return arr;
}

// functions
  // generate a card
  // generate a list of random exercises
  // generating an autoscrolling list of workout names
  // play background music
