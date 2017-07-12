console.log("favSong");

var favSong  = {
order: 1,
song: "ONE DAY",
artist: "Matisyahu"

};

var fav2Song  = {
order: 2,
song: "sunshine",
artist: "Matisyahu"

};

var fav3Song  ={
order: 3,
song: "bufalo soldier",
artist: "Matisyahu"
};

console.log(favSongs);
var tbody = document.querySelector("tbody");
for(var i in favSongs) {
  var tr = document.createElement("tr");
  if(j == 'link'){

    td1.innerText = favsongs[i][j];
  }

  for (var j in favSongs[i]) {
    var td1 = document.createElement("td");
    td1.innerText = favSongs[i][j];
    tr.appendChild(td1);
  }
  tbody.appendChild(tr);



 tbody.addEventLisener('click', function()












}
