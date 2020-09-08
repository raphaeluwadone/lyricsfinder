// const api_url = "https://api.lyrics.ovh/v1/"

// const getLyrics = () => {
//     console.log(artist)
//   fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       document.getElementsByClassName("artist").value = "";
//       document.getElementsByClassName("song").value = "";
//     });
//     // .catch((err) => console.log(err));
// };

var finder = () => {
    var lyrics;
    var artiste = document.getElementById("artist").value
    var title = document.getElementById("song").value
    //   console.log(artist);
      fetch(`https://api.lyrics.ovh/v1/${artiste}/${title}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data.lyrics);
          lyrics = data.lyrics
          document.getElementById("songlyrics").innerHTML = lyrics;
          document.getElementsById("first-head").innerHTML = "Artist: "
          document.getElementById("second-head").innerHTML = "Title: ";
          document.getElementsByClassName("songtitle").innerHTML = title
          document.getElementsByClassName("artistname").innerHTML = artiste
          document.getElementsByClassName("b").classList.add("song-tag")
          document.getElementsByClassName("a").classList.add("name-tag");
        })
        .catch((err) => console.log(err.error))
      var artiste = document.getElementById("artist").value = ''
      var title = document.getElementById("song").value = ''
      
    
}

// var btn = document.querySelector(".finder")


// console.log(art)
// var title = document.getElementsByClassName("song").value

// btn.addEventListener("click", getLyrics)