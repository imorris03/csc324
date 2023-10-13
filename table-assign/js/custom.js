// Making A Table Assignment
// isaac morris


 // The array of objects, one object for each artist.
 
 const artists = [
   {
     name: "Ms Scandalous",
     birthYear: 1985,
     link: "https://www.youtube.com/watch?v=2FPivlfvxu0"
   },
   {
    name: "Juggy D",
    birthYear: 1981,
    link: "https://www.youtube.com/watch?v=1jAc_-FVjdI"
  },
  {
    name: "Sukhbir Singh",
    birthYear: 1969,
    link: "https://www.youtube.com/watch?v=HiprNF9Jad0"
  },
  {
    name: "Abrar-ul-Haq",
    birthYear: 1989,
    link: "https://www.youtube.com/watch?v=-lnnVIP7FEc"
  },
  {
    name: "Rishi Rich",
    birthYear: 1970,
    link: "https://www.youtube.com/watch?v=O95-w2gACuA"
  }
 ]

 const tableDiv = document.querySelector("#bhangra");

 let songStuff = "";
 artists.forEach(function (artist) {
   songStuff += "<tr>";
   songStuff += `<td>${artist.name}</td>`;
   songStuff += `<td>${artist.birthYear}</td>`;
   songStuff += `<td><a href="${artist.link}" target="_blank">Watch</a></td>`;
   songStuff += "</tr>";
   // chat gpt helped organize this code
   // before, i was mixing up tr's and td's
 });
songStuff = songStuff + "</tr>";

tableDiv.innerHTML = songStuff;

