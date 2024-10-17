/**
 * Verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

//------------------------------------------------------------------------------
// Fastar

/** Íslenskir sérhljóðar */
const CONSONANTS = 'bcdfghjklmnpqrstvwxz'.split('');

/** Íslenskir samhljóðar */
const VOWELS = 'aeiouyáéýúíóöæ'.split('');

//------------------------------------------------------------------------------
// Hjálparföll

/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns `true` ef `str` er strengur, annars `false`.
 */
// Skilgreinum anonymous fall og bindum við breytuna `isString`
const isString = (str) => typeof str === 'string';

// Prófum fallið
console.assert(isString('hi') === true, 'isString: skilar `true` fyrir streng');
console.assert(isString(42) === false, 'isString: skilar `false` fyrir tölu');
console.assert(isString(null) === false, 'isString: skilar `false` fyrir null');

console.assert(longest("hi my name is liam") === "name", 'longest: returns `name` for a String');
console.assert(longest(99) === null, 'longest: returns `null` for a number');

console.assert(shortest("hi I am liam") === "I", 'shortest: returns `I` for a String');
console.assert(shortest(false) === null, 'shortest: returns `null` for a boolean');

console.assert(reverse("hello how are you?") === "?uoy era woh olleh", 'reverse: returns `?uoy era woh olleh` for a String');
console.assert(reverse(100.01) === null, 'reverse: returns `null` for a decimal number');

console.assert(palindrome("racecar") === true, 'palindrome: returns `true` for a String');
console.assert(palindrome("where are my shoes susan") === false, 'palindrome: returns `false` for a String');

console.assert(vowels("have a nice day") === 7, 'vowels: returns `7` for a String');
console.assert(vowels(7) === 0, 'vowels: returns `0` for a number');

console.assert(consonants("have a nice day") === 5, 'consonants: returns `5` for a String');
console.assert(consonants(5) === 0, 'consonants: returns `0` for a number');


/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng, skipt upp með
 * gefnum afmkarkara (separator).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
function split(str, separator = ' ') {
  if (!isString(str)) {
    return [];
  }

  return str.split(separator);
}

//------------------------------------------------------------------------------
// Grunnföll sem skilgreina á


/**
 * A function that reads in a string of words and puts out the longest word 
 * in the string of words
 * @param {string} str a string of words 
 * @returns {string} a string that is the longest word from the input 
 * or the null if a string is not passed in 
 * 
 */
function longest(str) {
  if(!isString(str)){
    return null;
  }
  
  let longestWord = "";
  let longestLength = 0;
  let words =  [];
  words = split(str);

  for (let i = 0; i < words.length ; i++ ){
    if ( words[i].length > longestLength){
      longestLength = words[i].length;
      longestWord = words[i];
    }
  }

  return longestWord;
}


/**
 * A function that reads in a string of words and puts out the shortest word 
 * in the string of words
 * @param {string} str a string of words 
 * @returns {string} a string that is the shortest word from the input 
 * or the null if a string is not passed in 
 * 
 */
function shortest(str) {
  if(!isString(str)){
    return null;
  }

  let shortest;
  let shortestLength = 0;
  let words =  [];
  words = split(str);

  shortest = words[0];
  shortestLength = words[0].length;

  for (let i = 0; i < words.length ; i++ ){
    if (words[i])
    if ( words[i].length < shortestLength){
      shortestLength = words[i].length;
      shortest = words[i];
    }
  }

  return shortest;
}


/**
 * A function that reads in a string and puts out the 
 * reverse (by character) string 
 * @param {string} str a string
 * @returns {string} a string that is the reverse of str 
 * or the null if a string is not passed in 
 */
function reverse(str) {
  if(!isString(str)){
    return null;
  }
  
  let forwardArray = [];
  let reverseArray = [];
  let reverseString = "";
  forwardArray = split(str,"");

  for(let i = 0 ; i < forwardArray.length ; i++){
    reverseArray[forwardArray.length - i - 1] = forwardArray[i];
  }

  for(let i = 0 ; i < reverseArray.length ; i++){
    reverseString = reverseString.concat(reverseArray[i]);
  }

  return reverseString;
}


/**
 * checks if a string is a palindrome (same forwards and backwards)
 * @param {string} str a string
 * @returns {boolean} returns `true` if the string is a palindrome and `false` if
 * it is not a palindrome or if a non string or an empty string is passed in
 */
function palindrome(str) {
  if(!isString(str)){
    return false;
  }
  if (str == ""){
    return false;
  }

  let forwardArray = [];
  let reverseArray = [];
  forwardArray = split(str,"");
  reverseArray = split(reverse(str),"");

  for ( let i = 0 ; i < forwardArray.length ; i++ ){
    if ( forwardArray[i].toLowerCase() !== reverseArray[i].toLowerCase()){
      return false;
    }
  }
  
  return true;
}


/**
 * A function that reads in a string and puts out 
 * the number of vowels in the string
 * @param {string} str a string
 * @returns {int} an integer number that is 
 * the number of vowels in str 
 */
function vowels(str) {
  if(!isString(str)){
    return 0;
  }

  let forwardArray = [];
  forwardArray = split(str,"");
  let numberOfVowels = 0;

  for (let letter = 0 ; letter < forwardArray.length ; letter++){
    for (let vowel = 0 ; vowel < VOWELS.length ; vowel++){
      if (forwardArray[letter] == VOWELS[vowel]){
        numberOfVowels++;
      }
    }
  }

  return numberOfVowels;
}


/**
 * A function that reads in a string and puts out 
 * the number of consonants in the string
 * @param {string} str a string
 * @returns {int} an integer number that is 
 * the number of consonants in str 
 */
function consonants(str) {
  if(!isString(str)){
    return 0;
  }

  let forwardArray = [];
  forwardArray = split(str,"");
  let numberOfConsonants = 0;

  for (let letter = 0 ; letter < forwardArray.length ; letter++){
    for (let consonant = 0 ; consonant < CONSONANTS.length ; consonant++){
      if (forwardArray[letter] == CONSONANTS[consonant]){
        numberOfConsonants++;
      }
    }
  }

  return numberOfConsonants;
}

//------------------------------------------------------------------------------
// Leiðbeint ferli

/**
 * this function pompts that user to enter a string and then outputs the data 
 * about the string then asks them if they would like to do it again
 */
function start() {
  let again = true;
  alert("Sláðu inn streng með nokkrum orðum til að fá upplýsinger um:\n-Lengsta orðið.\n-Stysta orðið.\n-Strenginn snúið við.\n-Fjölda sérhljóða í streng.\n-Fjölda samhljóða í streng.\n-Hvort strengurinn sé samhverfur.");
  do{
    let str = prompt("Sláðu inn streng með nokkrum orðum");
    alert("Lengsta orðið er: " +longest(str)+ "\nStysta orðið er: " +shortest(str)+ "\nStrengurinn snúinn við: " +reverse(str)+ "\nFjöldi sérhljóða í streng: " +vowels(str)+ "\nFjöldi samhljóða í streng: " +consonants(str)+ "\nStrengurinn er samhverfeur: " +palindrome(str));
    again = confirm("Vilttu prófa aftur?");
  }while(again)
  
}
