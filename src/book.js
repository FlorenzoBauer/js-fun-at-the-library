function createTitle(title) {
  var titles = title;
  return "The " + titles;
}
function buildMainCharacter(name, age, pronouns){
  var ghoulCharacter = {
    
      name: name,
      age: age,
      pronouns: pronouns,
    }
  
  var bakerCharacter = 
    {
     name: name,
     age: age,
     pronouns: pronouns,
    }
  return ghoulCharacter, bakerCharacter;
}
function saveReview(input, reviews) {
  var same = false;

for (var i = 0; i < reviews.length; i++){
  if (reviews[i] === input) {
    same = true;
    break;
  }

}
if (!same) {
  reviews.push(input);
}
return reviews;
}
function calculatePageCount() {

}


module.exports = {
  createTitle,
   buildMainCharacter,
   saveReview,
   calculatePageCount,
  // writeBook,
  // editBook
}