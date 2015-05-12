var BOOK_HEIGHT = 100;

function Book(elementId) {
  this.elementId = elementId;
  this.height = BOOK_HEIGHT;
}

var booksById = ["#one", "#two", "#three", "#four", "#five", "#six", "#seven", "#eight", "#nine", "#ten"];

var books = [];

for (i = 0; i < booksById.length; i++) {
  books[i] = new Book(booksById[i]);
}

for (var i = 0; i < books.length; i++) {
  books[i].height = Math.floor(Math.random() * BOOK_HEIGHT);
};


// assign random css heights to every book

for (i = 0; i < books.length; i++) {
  $(books[i].elementId).height(books[i].height);
}

