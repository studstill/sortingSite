/****************************************
  BOOKS - Create and size
*****************************************/

// define BOOK_HEIGHT constant
var BOOK_HEIGHT = 100;

// create an array with each book's element id
var booksById = ["#one", "#two", "#three", "#four", "#five", "#six", "#seven", "#eight", "#nine", "#ten"];

// create Book class constructor
function Book(elementId) {
  this.elementId = elementId;
  this.height = BOOK_HEIGHT;
}

// create an empty array to populate with new book objects
var books = [];

// create a new book object for each book html element
for (i = 0; i < booksById.length; i++) {
  books[i] = new Book(booksById[i]);
}

// randomly generate each book's height
// + 100 is to add additional height on the page
for (var i = 0; i < books.length; i++) {
  books[i].height = Math.floor(Math.random() * BOOK_HEIGHT + 80);
};


// assign each book's generated height to its respective css value
for (i = 0; i < books.length; i++) {
  $(books[i].elementId).height(books[i].height);
}

/****************************************
  BOOKS - Implement bubble sort.
*****************************************/

var booksLength = books.length;

function sortBooks() {
  for (i = booksLength; i >= 0; i--) {
    for (j = 0, k = 1; j < booksLength - 1; j++, k++) {
      if (books[j].height > books[k].height) {

        // do the actual sorting
        var temp = books[j].height;
        books[j].height = books[k].height;
        books[k].height = temp;

        // change css properties with sorted values
        $(books[j].elementId).height(books[j].height);
        $(books[k].elementId).height(books[k].height);

      }
    }
  }
}

/****************************************
  BOOKS - Execute sort on click
*****************************************/

$('#button').click(function() {
  sortBooks();
});



