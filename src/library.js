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
    var stock = library.shelves[genre].length;

    for (var i = 0; i < library.shelves.length; i++) {
    var totalStock = library.shelves[i].length;
      if (genre === undefined && library === undefined) {
      return `There are a total of ${totalStock} books at the ${library.name}.`
    }
  

    
  
  }
  return `There are a total of ${stock} ${genre} books at the ${library.name}.`;
  // q: why does undefined get returned in my code?


  // a: because the for loop is never run if the genre is undefined.
  }


module.exports = {
   createLibrary,
   addBook,
   checkoutBook,
   takeStock
};