const getFunction = require("./tasks");

function getFunc(title) {
  let textToWrite = "String NOT FOUND";

  switch (title) {
    case "numberToString":
      textToWrite = `
box.numberToString = function numberToString(x) {
    return "" + x;
  };
  `;
      break;
    case "triple":
      textToWrite = `
  box.triple = function triple(x) {
    //return x multiplied by 3
    return x * 3;
  };
  `;
      break;
    case "floatToInt":
      textToWrite = `
  box.floatToInt = function floatToInt(x) {
    // x is a float
    // return x as a truncated int
    return parseInt(x);
  };
  `;
      break;
    case "isOdd":
      textToWrite = `
  box.isOdd = function isOdd(x) {
    // x is an integer.
    // return true if the number is odd and false if it is even
    return x % 2 === 1;
  };
  `;
      break;
    case "squareRoot":
      textToWrite = `
  box.squareRoot = function squareRoot(x) {
    //return square root of x
    return Math.sqrt(x);
  };
  `;
      break;
    case "cubeSurfaceArea":
      textToWrite = `
  box.cubeSurfaceArea = function cubeSurfaceArea(x) {
    // x is the length of the cube's sides
    // return the surface area of the cube, round the result to 4 digits
    return parseFloat((6 * x * x).toFixed(4));
  };
  `;
      break;
    case "reverseString":
      textToWrite = `
  box.reverseString = function reverseString(x) {
    // x is a string. rearrange the string from the last to the first character
    return x.split("").reverse().join("");
  };
  `;
      break;
    case "removeFirstThree":
      textToWrite = `
  box.removeFirstThree = function removeFirstThree(x) {
    // x is an array
    // return an array removing the first 3 elements on x
    return x.slice(3);
  };
  `;
      break;
    case "stringToNumber":
      textToWrite = `
  box.stringToNumber = function stringToNumber(x) {
    // x is a string that contains a number
    // return x as a number
    return parseFloat(x);
  };
  `;
      break;
    case "dateRank":
      textToWrite = `
  box.dateRank = function dateRank(x) {
    // x is a date in 2019 as string (example: "06/30/2019")
    // return the rank of the day in 2019 (i.e. "09/01/2019" translates to 244)

    var now = new Date(x);
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = now - start;
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);
    return day;
  };
  `;
      break;
    case "swapHalves":
      textToWrite = `
  box.swapHalves = function swapHalves(x) {
    //x is a string. Cut x in half and move the second half to the beginning
    //'1234' will become '3412', '12345' will become '34512'
    return "" + x.slice(x.length / 2) + x.slice(0, x.length / 2);
  };
  `;
      break;
    case "getFileExtension":
      textToWrite = `
  box.getFileExtension = function getFileExtension(x) {
    // x is a string (representing a file name)
    // return the file extension (everything after the last dot)
    const path = x.split(".");
    if (path.length > 1) {
      return path[path.length - 1];
    }
    return "";
  };
  `;
      break;
    case "sphereVolume":
      textToWrite = `
  box.sphereVolume = function sphereVolume(x) {
    // x is radius of a sphere
    // return the volume of the sphere, round the result to 4 digits
    return parseFloat(((Math.pow(x, 3) * 4 * Math.PI) / 3).toFixed(4));
  };
  `;
      break;
    case "hasOnlyVowels":
      textToWrite = `
    box.hasOnlyVowels = function hasOnlyVowels(x) {
      // x is a string. return true if every char in the string is an english vowel

      return x.split("").reduce((soFar, a) => {
        const u = a.toUpperCase();
        return soFar && (u == "A" || u == "E" || u == "I" || u == "O" || u == "U");
      }, true);
    };
  `;
      break;
    case "flatten":
      textToWrite = `
  box.flatten = function flatten(x) {
    // x is an arbitrarily nested, multidimensional array.
    // return x flattened (all items in 1 dimension)
    return x.flat(100);
  };
  `;
      break;
    case "oddElements":
      textToWrite = `
  box.oddElements = function oddElements(x) {
    // x is an array of at least 2 unique elements
    // return the elements that are on odd positions in the array
    const newArray = [];
    for (let i = 0; i < x.length; i += 2) {
      newArray.push(x[i]);
    }
    return newArray;
  };
  `;
      break;
    case "sortingType":
      textToWrite = `
  box.sortingType = function sortingType(x) {
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
  `;
      break;
    case "invertCase":
      textToWrite = `
    box.invertCase = function invertCase(x) {
      // x is a string. turn lower

      return x
        .split("")
        .map((a) => {
          return a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase();
        })
        .join("");
    };

  `;
      break;
    case "capitalizeFirstLetters":
      textToWrite = `
    box.capitalizeFirstLetters = function capitalizeFirstLetters(x) {
      // x is a string. Make each first letter of each space-separated word upper
      // example: "this is a string" -> "This Is A String"

      return x
        .split(" ")
        .map((s) => {
          return "" + s.charAt(0).toUpperCase() + s.slice(1);
        })
        .join(" ");
    };
  `;
      break;
    case "toCamelCase":
      textToWrite = `
    box.toCamelCase = function toCamelCase(x) {
      // x is a string using kebab-
      // return the same string using camel
      const arr = x.replaceAll("_", "-").split("-");
      return [
        arr[0],
        ...arr.slice(1).map((s) => {
          return "" + s.charAt(0).toUpperCase() + s.slice(1);
        }),
      ].join("");
    };

  `;
      break;
    case "mostFrequentItem":
      textToWrite = `
  box.mostFrequentItem = function mostFrequentItem(x) {
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
  `;
      break;
    case "isBalanced":
      textToWrite = `
  box.isBalanced = function isBalanced(x) {
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
  `;
      break;
    case "hasBalancePoint":
      textToWrite = `
  box.hasBalancePoint = function hasBalancePoint(x) {
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
  `;
      break;
    case "doubleIndex":
      textToWrite = `
  box.doubleIndex = function doubleIndex(x) {
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
  `;
      break;
    case "longestString":
      textToWrite = `
  box.longestString = function longestString(x) {
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
  `;
      break;
    case "primeFactors":
      textToWrite = `
  box.primeFactors = function primeFactors(x) {
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
  `;
      break;
  }
  return textToWrite;
  // console.log(`*****Copied****** ${title}`);

  // clipboardy.writeSync(textToWrite);
}

var entry;
var nextTask;
var attemptId;
const fetch = require("node-fetch");
async function startEntry() {
  try {
    const response = await fetch(
      "https://speedcoding.toptal.com/webappApi/entry?ch=22&acc=2434",
      {
        headers: {
          accept: "application/json, text/javascript, */*; q=0.01",
          "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
          "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "x-requested-with": "XMLHttpRequest",
          cookie:
            "__cfduid=d128295b97a933237d31695563b9bbe391607058296; _ga=GA1.2.1204939187.1607058336; __hstc=6380845.fef93dea088684b798ce582603e45e24.1607058339131.1607058339131.1607058339131.1; hubspotutk=fef93dea088684b798ce582603e45e24; _gid=GA1.2.2071809443.1607669332; _uetsid=ac2e1ab03bd411eb8674ab0c370622ad; _uetvid=57ff7a5035ee11eb95df410a4b4713c7; PHPSESSID=897ab18a0675f46a60e7f508b53a5d39; _gat_gtag_UA_153788370_1=1",
        },
        referrer: "https://speedcoding.toptal.com/challenge?ch=toptal-js-2020",
        referrerPolicy: "strict-origin-when-cross-origin",
        body:
          "challengeSlug=toptal-js-2020&email=waqasn2c@gmail.com&leaderboardName=Waqas+Noor&isConfirmedToBeContacted=1&countryAlpha2=PK",
        method: "POST",
        mode: "cors",
      }
    );

    return response.text().then((s) => {
      const parsed = JSON.parse(s);
      const data = parsed.data;
      entry = data.entry;
      nextTask = data.nextTask;
      attemptId = data.attemptId;

      attempNextQuestion();
    });
  } catch (Err) {
    console.log(Err);
    debugger;
  }
}
async function attempNextQuestion() {
  try {
    let tests = {};

    const task = getFunction(nextTask.slug);

    Object.keys(nextTask.tests_json).map((key) => {
      const result = task(...nextTask.tests_json[key].args);
      return (tests[key] = result);
    });
    const code = encodeURI(getFunc(nextTask.slug));

    let tests_json = encodeURI(JSON.stringify(tests));

    console.log("test", nextTask.slug);
    if (nextTask.slug === "stringToNumber") {
      if (/e\+/.test(tests_json)) {
        tests_json = tests_json.replace("e+", "e%2B");
      }
    }
    const body =
      "attempt_id=" +
      attemptId +
      "&entry_key=" +
      entry.entry_key +
      "&tests_json=" +
      tests_json +
      "&code=" +
      code;
    // const res = await fetch(
    //   "https://speedcoding.toptal.com/webappApi/entry/" +
    //     entry.id +
    //     "/attemptTask",
    //   {
    //     headers: {
    //       accept: "application/json, text/javascript, */*; q=0.01",
    //       "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
    //       "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    //       "sec-fetch-dest": "empty",
    //       "sec-fetch-mode": "cors",
    //       "sec-fetch-site": "same-origin",
    //       "x-requested-with": "XMLHttpRequest",
    //     },
    //     referrer: "https://speedcoding.toptal.com/challenge?ch=toptal-js-2020",
    //     referrerPolicy: "strict-origin-when-cross-origin",
    //     body,
    //     method: "POST",
    //     mode: "cors",
    //     credentials: "include",
    //   }
    // );

    const res = await fetch(
      "https://speedcoding.toptal.com/webappApi/entry/" +
        entry.id +
        "/attemptTask",
      {
        headers: {
          accept: "application/json, text/javascript, */*; q=0.01",
          "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
          "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "x-requested-with": "XMLHttpRequest",
          cookie:
            "__cfduid=d128295b97a933237d31695563b9bbe391607058296; _ga=GA1.2.1204939187.1607058336; __hstc=6380845.fef93dea088684b798ce582603e45e24.1607058339131.1607058339131.1607058339131.1; hubspotutk=fef93dea088684b798ce582603e45e24; _gid=GA1.2.2071809443.1607669332; PHPSESSID=636f31aef971868ddcc408c3cd92d444; _uetsid=ac2e1ab03bd411eb8674ab0c370622ad; _uetvid=57ff7a5035ee11eb95df410a4b4713c7; _gat_gtag_UA_153788370_1=1",
        },
        referrer: "https://speedcoding.toptal.com/challenge?ch=toptal-js-2020",
        referrerPolicy: "strict-origin-when-cross-origin",
        body: body,
        method: "POST",
        mode: "cors",
      }
    );
    return res.text().then((s) => {
      // console.log(s);
      const parsed = JSON.parse(s);
      const data = parsed.data;
      if (data.isChallengeEntryFinished) {
        console.log("Done ", data.totalPoints);
        return;
      }
      if (!data || !data.nextTask) {
        console.log({ s });
      }

      nextTask = data.nextTask;
      attemptId = data.attemptId;
      if (!data.isSuccess) {
        console.log("Test Failed");
      } else {
        console.log(" Test  cleared");
      }
      attempNextQuestion();
    });
  } catch (Err) {
    console.log(Err);
  }
}
startEntry();
async function run() {
  try {
    const res1 = await fetch(
      "https://speedcoding.toptal.com/webappApi/entry?ch=22&acc=2434",
      {
        headers: {
          accept: "application/json, text/javascript, */*; q=0.01",
          "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
          "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "x-requested-with": "XMLHttpRequest",
          cookie:
            "__cfduid=d128295b97a933237d31695563b9bbe391607058296; _ga=GA1.2.1204939187.1607058336; __hstc=6380845.fef93dea088684b798ce582603e45e24.1607058339131.1607058339131.1607058339131.1; hubspotutk=fef93dea088684b798ce582603e45e24; _gid=GA1.2.2071809443.1607669332; PHPSESSID=636f31aef971868ddcc408c3cd92d444; _uetsid=ac2e1ab03bd411eb8674ab0c370622ad; _uetvid=57ff7a5035ee11eb95df410a4b4713c7; _gat_gtag_UA_153788370_1=1",
        },
        referrer: "https://speedcoding.toptal.com/challenge?ch=toptal-js-2020",
        referrerPolicy: "strict-origin-when-cross-origin",
        body:
          "challengeSlug=toptal-js-2020&email=&leaderboardName=Waqas+Noor&isConfirmedToBeContacted=1&countryAlpha2=PK",
        method: "POST",
        mode: "cors",
      }
    );
    res1.text().then((body) => console.log(body));

    // console.log({
    //   res1: JSON.stringify(res1),
    //   data: res1.data,
    //   raw: res1,

    // });
    // const res2 = await fetch(
    //   "https://speedcoding.toptal.com/webappApi/entry?ch=22&acc=2434",
    //   {
    //     headers: {
    //       accept: "application/json, text/javascript, */*; q=0.01",
    //       "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
    //       "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    //       "sec-fetch-dest": "empty",
    //       "sec-fetch-mode": "cors",
    //       "sec-fetch-site": "same-origin",
    //       "x-requested-with": "XMLHttpRequest",
    //     },
    //     referrer: "https://speedcoding.toptal.com/challenge?ch=toptal-js-2020",
    //     referrerPolicy: "strict-origin-when-cross-origin",
    //     body:
    //       "challengeSlug=toptal-js-2020&email=&leaderboardName=Waqas+Noor&isConfirmedToBeContacted=1&countryAlpha2=PK",
    //     method: "POST",
    //     mode: "cors",
    //     credentials: "include",
    //   }
    // );

    // fetch("https://speedcoding.toptal.com/webappApi/entry/406774/attemptTask", {
    //   headers: {
    //     accept: "application/json, text/javascript, */*; q=0.01",
    //     "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
    //     "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    //     "sec-fetch-dest": "empty",
    //     "sec-fetch-mode": "cors",
    //     "sec-fetch-site": "same-origin",
    //     "x-requested-with": "XMLHttpRequest",
    //     cookie:
    //       "__cfduid=d128295b97a933237d31695563b9bbe391607058296; _ga=GA1.2.1204939187.1607058336; __hstc=6380845.fef93dea088684b798ce582603e45e24.1607058339131.1607058339131.1607058339131.1; hubspotutk=fef93dea088684b798ce582603e45e24; _gid=GA1.2.2071809443.1607669332; PHPSESSID=636f31aef971868ddcc408c3cd92d444; _uetsid=ac2e1ab03bd411eb8674ab0c370622ad; _uetvid=57ff7a5035ee11eb95df410a4b4713c7; _gat_gtag_UA_153788370_1=1",
    //   },
    //   referrer: "https://speedcoding.toptal.com/challenge?ch=toptal-js-2020",
    //   referrerPolicy: "strict-origin-when-cross-origin",
    //   body:
    //     "attempt_id=6081071&entry_key=be08d12f934714d0792b9cc625381e6ab067d9d72ad75bab4ebcabed3259&tests_json=%7B%22test1%22%3A6%2C%22test2%22%3A12%2C%22test3%22%3A4.5%2C%22test4%22%3A-36%2C%22test5%22%3A-4.5%2C%22rnd_yks_Boris%22%3A2493%2C%22rnd_cvx_Lynn%22%3A453%2C%22rnd_wlo_Adaline%22%3A1104%7D&code=box.triple+%3D+function+triple+(x)+%7B%0A++++%2F%2Freturn+x+multiplied+by+3%0A++++%0A++%0A++++%2F%2Freturn+x+multiplied+by+3%0A++++return+x+*+3%3B%0A++%0A++%0A++++%0A%7D%3B",
    //   method: "POST",
    //   mode: "cors",
    // });

    // fetch("https://speedcoding.toptal.com/webappApi/entry/406774/attemptTask", {
    //   headers: {
    //     accept: "application/json, text/javascript, */*; q=0.01",
    //     "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
    //     "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    //     "sec-fetch-dest": "empty",
    //     "sec-fetch-mode": "cors",
    //     "sec-fetch-site": "same-origin",
    //     "x-requested-with": "XMLHttpRequest",
    //     cookie:
    //       "__cfduid=d128295b97a933237d31695563b9bbe391607058296; _ga=GA1.2.1204939187.1607058336; __hstc=6380845.fef93dea088684b798ce582603e45e24.1607058339131.1607058339131.1607058339131.1; hubspotutk=fef93dea088684b798ce582603e45e24; _gid=GA1.2.2071809443.1607669332; PHPSESSID=636f31aef971868ddcc408c3cd92d444; _uetsid=ac2e1ab03bd411eb8674ab0c370622ad; _uetvid=57ff7a5035ee11eb95df410a4b4713c7; _gat_gtag_UA_153788370_1=1",
    //   },
    //   referrer: "https://speedcoding.toptal.com/challenge?ch=toptal-js-2020",
    //   referrerPolicy: "strict-origin-when-cross-origin",
    //   body:
    //     "attempt_id=6081253&entry_key=be08d12f934714d0792b9cc625381e6ab067d9d72ad75bab4ebcabed3259&tests_json=%7B%22test1%22%3A%221%22%2C%22test2%22%3A%223.141%22%2C%22test4%22%3A%22-23%22%7D&code=box.numberToString%3D+function+numberToString(x)+%7B%0A++++%2F%2F+x+is+number%0A++++%2F%2F+return+x+as+a+string%0A++++%0A%0A++++return+%22%22+%2B+x%3B%0A++%0A++%0A++++%0A%7D%3B",
    //   method: "POST",
    //   mode: "cors",
    // });

    // fetch("https://speedcoding.toptal.com/webappApi/entry/406774/attemptTask", {
    //   headers: {
    //     accept: "application/json, text/javascript, */*; q=0.01",
    //     "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
    //     "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    //     "sec-fetch-dest": "empty",
    //     "sec-fetch-mode": "cors",
    //     "sec-fetch-site": "same-origin",
    //     "x-requested-with": "XMLHttpRequest",
    //     cookie:
    //       "__cfduid=d128295b97a933237d31695563b9bbe391607058296; _ga=GA1.2.1204939187.1607058336; __hstc=6380845.fef93dea088684b798ce582603e45e24.1607058339131.1607058339131.1607058339131.1; hubspotutk=fef93dea088684b798ce582603e45e24; _gid=GA1.2.2071809443.1607669332; PHPSESSID=636f31aef971868ddcc408c3cd92d444; _uetsid=ac2e1ab03bd411eb8674ab0c370622ad; _uetvid=57ff7a5035ee11eb95df410a4b4713c7; _gat_gtag_UA_153788370_1=1",
    //   },
    //   referrer: "https://speedcoding.toptal.com/challenge?ch=toptal-js-2020",
    //   referrerPolicy: "strict-origin-when-cross-origin",
    //   body:
    //     "attempt_id=6081297&entry_key=be08d12f934714d0792b9cc625381e6ab067d9d72ad75bab4ebcabed3259&tests_json=%7B%22test1%22%3A1%2C%22test2%22%3A1%2C%22test3%22%3A-1%2C%22test4%22%3A0%2C%22test5%22%3A52%7D&code=box.floatToInt%3D+function+floatToInt(x)+%7B%0A++++%2F%2F+x+is+a+float%0A++++%2F%2F+return+x+as+a+truncated+int%0A++++%0A++%0A++++%2F%2F+x+is+a+float%0A++++%2F%2F+return+x+as+a+truncated+int%0A++++return+parseInt(x)%3B%0A++%0A++%0A++++%0A%7D%3B",
    //   method: "POST",
    //   mode: "cors",
    // });

    // fetch("https://speedcoding.toptal.com/webappApi/entry/406774/attemptTask", {
    //   headers: {
    //     accept: "application/json, text/javascript, */*; q=0.01",
    //     "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
    //     "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    //     "sec-fetch-dest": "empty",
    //     "sec-fetch-mode": "cors",
    //     "sec-fetch-site": "same-origin",
    //     "x-requested-with": "XMLHttpRequest",
    //     cookie:
    //       "__cfduid=d128295b97a933237d31695563b9bbe391607058296; _ga=GA1.2.1204939187.1607058336; __hstc=6380845.fef93dea088684b798ce582603e45e24.1607058339131.1607058339131.1607058339131.1; hubspotutk=fef93dea088684b798ce582603e45e24; _gid=GA1.2.2071809443.1607669332; PHPSESSID=636f31aef971868ddcc408c3cd92d444; _uetsid=ac2e1ab03bd411eb8674ab0c370622ad; _uetvid=57ff7a5035ee11eb95df410a4b4713c7; _gat_gtag_UA_153788370_1=1",
    //   },
    //   referrer: "https://speedcoding.toptal.com/challenge?ch=toptal-js-2020",
    //   referrerPolicy: "strict-origin-when-cross-origin",
    //   body:
    //     "attempt_id=6081309&entry_key=be08d12f934714d0792b9cc625381e6ab067d9d72ad75bab4ebcabed3259&tests_json=%7B%22test1%22%3Afalse%2C%22test2%22%3Afalse%2C%22test3%22%3Atrue%2C%22test4%22%3Atrue%2C%22test5%22%3Afalse%2C%22rnd_ldy_Aiyana%22%3Atrue%2C%22rnd_otl_Treva%22%3Atrue%2C%22rnd_mpd_Hettie%22%3Atrue%7D&code=box.isOdd+%3D+function+isOdd+(x)+%7B%0A++++%2F%2F+x+is+an+integer.+%0A++++%2F%2F+return+true+if+the+number+is+odd+and+false+if+it+is+even++++%0A++++%0A++%0A++++%2F%2F+x+is+an+integer.%0A++++%2F%2F+return+true+if+the+number+is+odd+and+false+if+it+is+even%0A++++return+x+%25+2+%3D%3D%3D+1%3B%0A++%0A++%0A+++++%0A%7D%3B",
    //   method: "POST",
    //   mode: "cors",
    // });

    // fetch("https://speedcoding.toptal.com/webappApi/entry/406774/attemptTask", {
    //   headers: {
    //     accept: "application/json, text/javascript, */*; q=0.01",
    //     "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
    //     "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    //     "sec-fetch-dest": "empty",
    //     "sec-fetch-mode": "cors",
    //     "sec-fetch-site": "same-origin",
    //     "x-requested-with": "XMLHttpRequest",
    //   },
    //   referrer: "https://speedcoding.toptal.com/challenge?ch=toptal-js-2020",
    //   referrerPolicy: "strict-origin-when-cross-origin",
    //   body:
    //     "attempt_id=6081328&entry_key=be08d12f934714d0792b9cc625381e6ab067d9d72ad75bab4ebcabed3259&tests_json=%7B%22test1%22%3A2%2C%22test2%22%3A4%2C%22test3%22%3A1.5%2C%22test4%22%3A12%2C%22test5%22%3A10%7D&code=box.squareRoot+%3D+function+squareRoot+(x)+%7B%0A++++%2F%2Freturn+square+root+of+x%0A++++%0A++++%0A%0A++++%2F%2Freturn+square+root+of+x%0A++++return+Math.sqrt(x)%3B%0A%0A++%0A%7D%3B",
    //   method: "POST",
    //   mode: "cors",
    //   credentials: "include",
    // });
  } catch (error) {
    console.log({ error });
  }
}
// run();
