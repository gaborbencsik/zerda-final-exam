
'use strinct';

let myArray = ["abc", "ijk", "xyz"];

function changeLetter(string) {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "b") {
      newString += "i";
    } else if (string[i] === "i") {
      newString += "b";
    } else if (string[i] === "c") {
      newString += "x";
    } else if (string[i] === "x") {
      newString += "c";
    } else if (string[i] === "y") {
      newString += "k";
    } else if (string[i] === "k") {
      newString += "y";
    } else {
      newString += string[i];
    }
  }
  return newString;
};

function changeLetter2(string) {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    switch (string[i]) {
      case "b":
        newString += "i";
        break;
      case "i":
        newString += "b";
        break;
      case "x":
        newString += "c";
        break;
      case "c":
        newString += "x";
        break;
      case "k":
        newString += "y";
        break;
      case "y":
        newString += "k";
        break;
      default:
        newString += string[i];
    }
  }
  return newString;
};

function changeLettersInArray (array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    // newArray.push(changeLetter(array[i]));
    newArray.push(changeLetter2(array[i]));
  }
  return newArray;
};

console.log(changeLettersInArray(myArray));
