const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let cappedTutorials = tutorials.map((title) => {
    title.split(" ");
  return title.split(" ").map((word) => word.charAt(0).toUpperCase() + word.substring(1)).join(" ")
})
  return cappedTutorials;
}

/*const words = tutorials.map((title) => title.split(" "));
const bigWords = words.map(title => title.map((word) => word.charAt(0).toUpperCase() + word.substring(1)));

const bigTitles = bigWords.map((titles) => titles.join(" "));*/
//My breaking things down into separate functions

/*const titleCased = () => {
  return tutorials;
}*/
//The original 