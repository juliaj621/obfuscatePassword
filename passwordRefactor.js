const output = process.argv.slice(2);

const obfuscate = (string) => {
  let newString = "";
  for (let x = 0; x < string.length; x++) {
    if (string[x] === "a") {
      newString += "4";
    } else if (string[x] === "e") {
      newString += "3";
    } else if (string[x] === "o") {
      newString += "0";
    } else if (string[x] === "l") {
      newString += "1";
    } else {
      newString += string[x];
    }
  }
  return newString;
};

console.log(obfuscate(output[0]));