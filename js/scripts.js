var romanNumerals = function(number) {
  var numerals = ""
  var reverseNumerals = ""
  var input_number = number
  var numberString = input_number.toString()

do {
  if (numberString.charAt(numberString.length-3) === "9") {
    numerals+=("CM")
    input_number -= 900
    numberString = input_number.toString()
  } else if (numberString.charAt(numberString.length-3) === "4") {
    numerals+=("DM")
    input_number -= 400
    numberString = input_number.toString()
  } else
            do {if (input_number % 1000 === 0) {
                  reverseNumerals+=("M");
                  input_number -= 1000;
                } else if (input_number % 500 === 0) {
                  reverseNumerals+=("D");
                  input_number -= 500;
                } else if (input_number % 100 === 0) {
                  reverseNumerals+=("C");
                  input_number -= 100;
                } else if (input_number % 50 === 0) {
                  reverseNumerals+=("L");
                  input_number -= 50;
                } else if (input_number % 10 === 0) {
                  reverseNumerals+=("X");
                  input_number -= 10;
                } else if (input_number % 5 === 0) {
                  reverseNumerals+=("V");
                  input_number -= 5;
                } else if (input_number % 1 === 0) {
                  reverseNumerals+=("I");
                  input_number-= 1
                  }
                }
          while (input_number>0);

  }
  while (input_number>0);


return numerals + (reverseNumerals.split("").reverse().join(""));
};
