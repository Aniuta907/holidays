"use strict";

///1 Find The Parity Outlier
// https://www.codewars.com/kata/reviews/565349bca24428f2870000a9/groups/5e1086764ebc2000015beb74
function findOutlier(integers) {
  function getEven(num) {
    return num.filter(function(e) {
      return !(e & 1);
    });
  }

  function getOdd(num) {
    return num.filter(function(e) {
      return e & 1;
    });
  }

  const oddArr = getOdd(integers);
  const evenArr = getEven(integers);
  if (oddArr.length == 1) return oddArr[0];
  else return evenArr[0];
}

///2 Exes and Ohs
// https://www.codewars.com/kata/reviews/55908ab5932c2fc59f000070/groups/5e108c4b4ebc2000015bebdf
function XO(str) {
  const newStr = str.toLowerCase();
  function count(sp) {
    return newStr.split(sp).length - 1;
  }
  return count("x") == count("o");
}

///3 Shortest Word
// https://www.codewars.com/kata/reviews/57cec2caf0fe9cd5df000072/groups/5e10916f8c89df0001218c89
function findShort(s) {
  const words = s.split(" ");
  let min = words[0].length;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length < min) {
      min = words[i].length;
    }
  }
  return min;
}

///4 Vowel Count
// I can't send a link to my solution, maybe because i used 'refactor'
// my profile: https://www.codewars.com/users/Aniuta907/completed_solutions
function isVowel(char) {
  return "aeiou".includes(char);
}

function getCount(str) {
  return str
    .split("")
    .reduce((sum, char) => (isVowel(char) ? sum + 1 : sum), 0);
}

///5 List Filtering
// https://www.codewars.com/kata/reviews/5411f7ec17dc0b7b7e000231/groups/560e9bef7d00de12620000c9
function filter_list(l) {
  return l.filter(item => typeof item === "number");
}

///6 Isograms
// https://www.codewars.com/kata/reviews/54cd002407ba21e38f00000f/groups/5e11dc9fbb26620001ace9e0
function isIsogram(str) {
  const newStr = str.toLowerCase();
  function isSingleLetter(sp) {
    return newStr.split(sp).length - 1 == 1;
  }
  let arr = newStr.split("");
  return arr.every(isSingleLetter);
}

///7 Jaden Casing Strings
// https://www.codewars.com/kata/reviews/5390bac547d09b7da40006fd/groups/5e10e3064ebc2000015bf285
String.prototype.toJadenCase = function() {
  let words = this.split(" ");
  let newWords = words.map(function(word) {
    return word[0].toUpperCase() + word.slice(1);
  });
  return newWords.join(" ");
};
