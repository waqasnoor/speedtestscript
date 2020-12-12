const R = require("ramda");
module.exports = function getFunction(title) {
  switch (title) {
    case "numberToString":
      return function numberToString(x) {
        return "" + x;
      };

    case "triple":
      return function triple(x) {
        //return x multiplied by 3
        return x * 3;
      };

    case "floatToInt":
      return function floatToInt(x) {
        // x is a float
        // return x as a truncated int
        return parseInt(x);
      };

    case "isOdd":
      return function isOdd(x) {
        // x is an integer.
        // return true if the number is odd and false if it is even
        return x % 2 === 1;
      };

    case "squareRoot":
      return function squareRoot(x) {
        //return square root of x
        return Math.sqrt(x);
      };

    case "cubeSurfaceArea":
      return function cubeSurfaceArea(x) {
        // x is the length of the cube's sides
        // return the surface area of the cube, round the result to 4 digits
        return parseFloat((6 * x * x).toFixed(4));
      };

    case "reverseString":
      return function reverseString(x) {
        // x is a string. rearrange the string from the last to the first character
        return x.split("").reverse().join("");
      };

    case "removeFirstThree":
      return function removeFirstThree(x) {
        // x is an array
        // return an array removing the first 3 elements on x
        return x.slice(3);
      };

    case "stringToNumber":
      return function stringToNumber(x) {
        // x is a string that contains a number
        // return x as a number
        return parseFloat(x);
      };

    case "dateRank":
      return function dateRank(x) {
        // x is a date in 2019 as string (example: "06/30/2019")
        // return the rank of the day in 2019 (i.e. "09/01/2019" translates to 244)

        var now = new Date(x);
        var start = new Date(now.getFullYear(), 0, 0);
        var diff = now - start;
        var oneDay = 1000 * 60 * 60 * 24;
        var day = Math.floor(diff / oneDay);
        return day;
      };

    case "swapHalves":
      return function swapHalves(x) {
        //x is a string. Cut x in half and move the second half to the beginning
        //'1234' will become '3412', '12345' will become '34512'
        return "" + x.slice(x.length / 2) + x.slice(0, x.length / 2);
      };

    case "getFileExtension":
      return function getFileExtension(x) {
        // x is a string (representing a file name)
        // return the file extension (everything after the last dot)
        const path = x.split(".");
        if (path.length > 1) {
          return path[path.length - 1];
        }
        return "";
      };

    case "sphereVolume":
      return function sphereVolume(x) {
        // x is radius of a sphere
        // return the volume of the sphere, round the result to 4 digits
        return parseFloat(((Math.pow(x, 3) * 4 * Math.PI) / 3).toFixed(4));
      };

    case "hasOnlyVowels":
      return function hasOnlyVowels(x) {
        // x is a string. return true if every char in the string is an english vowel

        return x.split("").reduce((soFar, a) => {
          const u = a.toUpperCase();
          return (
            soFar && (u == "A" || u == "E" || u == "I" || u == "O" || u == "U")
          );
        }, true);
      };

    case "flatten":
      return function flatten(x) {
        // x is an arbitrarily nested, multidimensional array.
        // return x flattened (all items in 1 dimension)
        return R.flatten(x);
      };

    case "oddElements":
    case "returnOddElements":
      return function oddElements(x) {
        // x is an array of at least 2 unique elements
        // return the elements that are on odd positions in the array
        const newArray = [];
        for (let i = 0; i < x.length; i += 2) {
          newArray.push(x[i]);
        }
        return newArray;
      };

    case "sortingType":
      return function sortingType(x) {
        // x is an array of at least 2 unique members
        // return 0 if it's not sorted, 1 if it's ascending, -1 if it's descending
        const sortedArray = [...x].sort(function (a, b) {
          return a - b;
        });
        const reverse = [...sortedArray].reverse();
        if (JSON.stringify(x) === JSON.stringify(sortedArray)) {
          return 1;
        }
        if (JSON.stringify(x) === JSON.stringify(reverse)) {
          return -1;
        }
        return 0;
      };

    case "invertCase":
      return function invertCase(x) {
        // x is a string. turn lower

        return x
          .split("")
          .map((a) => {
            return a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase();
          })
          .join("");
      };

    case "capitalizeFirstLetters":
      return function capitalizeFirstLetters(x) {
        // x is a string. Make each first letter of each space-separated word upper
        // example: "this is a string" -> "This Is A String"

        return x
          .split(" ")
          .map((s) => {
            return "" + s.charAt(0).toUpperCase() + s.slice(1);
          })
          .join(" ");
      };

    case "toCamelCase":
    case "convert_to_camel_case":
      return function toCamelCase(x) {
        // x is a string using kebab-
        // return the same string using camel
        const arr = R.split("-", R.replace(/\_/g, "-", x));
        console.log({ arr });

        //  x.replaceAll("_", "-").split("-");
        return [
          arr[0],
          ...arr.slice(1).map((s) => {
            return "" + s.charAt(0).toUpperCase() + s.slice(1);
          }),
        ].join("");
      };

    case "mostFrequentItem":
      return function mostFrequentItem(x) {
        // x is an array of at least 1 item.
        // return the most frequent item (there will always be just one).

        const sortedX = [...x].sort((a, b) => a - b);
        const [mostCount, maxEle] = sortedX.reduce(
          (soFar, curr) => {
            const [maxCount, maxEle, currentCount, currentEle] = soFar;

            let _currentCount = currentCount;
            if (curr === currentEle) {
              _currentCount += 1;
            } else {
              _currentCount = 1;
            }

            if (_currentCount > maxCount) {
              return [_currentCount, curr, _currentCount, curr];
            } else {
              return [maxCount, maxEle, _currentCount, curr];
            }
          },
          [0, sortedX[0], 0, sortedX[0]]
        );
        return maxEle;
      };

    case "isBalanced":
      return function isBalanced(x) {
        // x is a string. return whether its parentheses are balanced
        // that is, whether every opening ( has a closing )

        const stack = [];
        let outOfOrder = false;
        x.split("").forEach((s) => {
          if (s === "(") {
            stack.push(x);
          } else if (s === ")") {
            if (stack.length) {
              stack.pop();
            } else {
              outOfOrder = true;
            }
          }
        });
        return stack.length === 0 && outOfOrder === false;
      };

    case "hasBalancePoint":
      return function hasBalancePoint(x) {
        // x is an array of numbers. return whether there is an index where the sum
        // before (excluding) it is equal to the sum after (including) it.
        let balanceFlag = false;
        if (x.length === 1) {
          return true;
        }
        for (let i = 1; i < x.length; i++) {
          const firstHalf = x.slice(0, i);
          const secondHalf = x.slice(i);
          const firstSum = firstHalf.reduce((sum, current) => {
            return sum + current;
          }, 0);

          const secondSum = secondHalf.reduce((sum, current) => {
            return sum + current;
          }, 0);
          if (firstSum === secondSum) {
            balanceFlag = true;
            break;
          }
        }
        return balanceFlag;
      };

    case "doubleIndex":
      return function doubleIndex(x) {
        // x is an array of numbers. Return elements on the array, where the value is equal to their index doubled.
        // [3, 2, 4, 6, 7] returns [2, 4, 6] (having the indices 1, 2, 3)

        const values = [];
        for (let i = 0; i < x.length; i++) {
          const val = x[i];
          if (val === i * 2) {
            values.push(val);
          }
        }
        return values;
      };

    case "longestString":
      return function longestString(x) {
        // x is an array of strings
        // return the longest string on x

        const _longestString = x.reduce((longest, current) => {
          if (current.length > longest.length) {
            return current;
          }
          return longest;
        }, x[0]);
        return _longestString;
      };

    case "primeFactors":
      return function primeFactors(x) {
        // x is an integer
        // return an array of all its prime factors
        // Example: if x=12 then return [2,2,3]
        function isPrime(num) {
          if (num === 2) {
            return true;
          } else if (num > 1) {
            for (var i = 2; i < num; i++) {
              if (num % i !== 0) {
                return true;
              } else if (num === i * i) {
                return false;
              } else {
                return false;
              }
            }
          } else {
            return false;
          }
        }
        const factors = [];
        let currentDiviser = 2;
        let currentNumber = x;

        for (; currentNumber > 1; ) {
          if (currentNumber % currentDiviser === 0) {
            factors.push(currentDiviser);
            currentNumber = currentNumber / currentDiviser;
          } else {
            currentDiviser++;
          }
        }
        return factors.filter(isPrime).sort((a, b) => a - b);
      };
    default:
      console.log("Not found", title);
  }
};
