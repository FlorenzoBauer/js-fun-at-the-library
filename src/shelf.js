function shelfBook(book, shelf){
  if (shelf.length > 2){
    return 
  }

  shelf.unshift(book);

//   var same = false;

// for (var i = 0; i < sciFiShelf.length; i++){
//   if (sciFiShelf.length >= 3) {
//     same = true;
//     break;
//   }

// }
// if (!same) {
//   sciFiShelf.unshift(book);
// }
// return sciFiShelf;
}

function unshelfBook(book, shelf){

  for (var i = 0; i < shelf.length; i++){
  var bname = book;


    if (bname === shelf[i].title) {
   shelf.splice(i, 1);
    } 

}
return shelf;
}
function listTitles(shelf){
  var titles = [];
  for (var i = 0; i < shelf.length; i++){
    titles.push(shelf[i].title);
  }
  return titles.join(", ");
}

function searchShelf(shelf, book){
  var same = false;
  for (var i = 0; i < shelf.length; i++){
    if (shelf[i].title === book) {
      same = true;
    }
  }
  return same;
}
module.exports = {
   shelfBook,
   unshelfBook,
  listTitles,
   searchShelf
};