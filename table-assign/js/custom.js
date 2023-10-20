// Making A Table Assignment
// isaac morris


 
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

// locate the table:
const tab = document.querySelector("#bhangra");

// declare a string to hold the inner html.
let contents = "<tbody>";

// populate function
populateTable = function() {
  // ChatGPT located that I needed to empty contents by
  // starting this function with -> contents = "<tbody>";
contents = "<tbody>";
contents += `
   <tr>
     <th>Name</th>
     <th>Year of Birth</th>
     <th>Link</th>
   </tr>
   `;

// now loop to make the data-rows:
artists.forEach(artist => {
 contents += "<tr>";
 contents += `<td>${artist.name}</td>`;
 contents += `<td>${artist.birthYear}</td>`;
 contents += `<td><a href="${artist.link} target = "_blank">${artist.link}</a></td>`;
 contents += "</tr>"
});

// close out the table body:
contents += "</tbody>";

// now make contents be the inner html of
// the table:
tab.innerHTML = contents;
// ChatGPT also helped by helping me group artists.forEach and
// the following lines into the populateTable function
}


populateTable(artists);



// now deal with event listeners
// first, find buttons
const nameButton = document.querySelector("#name-button");
const yearButton = document.querySelector("#year-button");
const rowButton = document.querySelector("#row-button");

// next, add eventlisteners:
nameButton.addEventListener("click", sortByName);
yearButton.addEventListener("click", sortByYear);
rowButton.addEventListener("click", randomRow);

// declare listener-functions

function sortByName() {
  // first create new array that is the
  // artists array, sorted by artist-name
let sortedArray = [artists.sort(function (a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
})];

  // repopulate the table using that
  // new array
  populateTable(sortedArray);

  // freecodecamp.org and developer.mozilla.org
  // helped me further understand sort method
}


function sortByYear() {
let sortedArray = [artists.sort(function (a, b) {
  if (a.birthYear < b.birthYear) {
    return -1;
  }
  if (a.birthYear > b.birthYear) {
    return 1;
  }
  return 0;
})];

  populateTable(sortedArray);
}


function randomRow() {
let sortedArray = [artists.sort((a, b) => 0.5 - Math.random())];
// method found on dev community website: dev.to
  populateTable(sortedArray);
}