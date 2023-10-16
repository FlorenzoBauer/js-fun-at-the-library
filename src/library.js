function createLibrary(name) {
  return {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  };

}
function addBook(library, book) {
  library.shelves[book.genre].push(book);
}
function checkoutBook(library, book, genre) {
  for (var i = 0; i < library.shelves[genre].length; i++) {
    if (library.shelves[genre][i].title === book) {
      library.shelves[genre].splice(i, 1);
      return `You have now checked out ${book} from the ${library.name}.`;
    }
  }
  return `Sorry, there are currently no copies of ${book} available at the ${library.name}.`;
}
function takeStock(library, genre ) {  
  if (!genre) {
    // return "There are a total of 3 books at the Denver Public Library."
    var totalStock = 0;
    var shelves = Object.keys(library.shelves);
    console.log(shelves);

    for (var i = 0; i < shelves.length; i++) {
      var shelfName = shelves[i]; // fantasy
      var numberOfBooksOnShelf = library.shelves[shelfName].length;
      totalStock += numberOfBooksOnShelf;
      // totalStock = totalStock + numberOfBooksOnShelfs;
    }
    return `There are a total of ${totalStock} books at the ${library.name}.`
  }

  var stock = library.shelves[genre].length;
  return `There are a total of ${stock} ${genre} books at the ${library.name}.`;
}

module.exports = {
   createLibrary,
   addBook,
   checkoutBook,
   takeStock
};