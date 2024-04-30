let arr = [
  { name: "Elie" },
  { name: "Tim" },
  { name: "Matt" },
  { name: "Colt" },
];

const names = ["Elie", "Colt", "Tim", "Matt"];

let nums = [1, 2, 3, 4, 5, 6];

function extractValue(arr, key) {
  return arr.reduce(function (acc, next) {
    acc.push(next[key]);
    return acc;
  }, []);
}

console.log(extractValue(arr, "name"));

function vowelCount(str) {
  let vowels = "aieou";
  return Array.from(str.toLowerCase()).reduce((acc, char) => {
    if (vowels.includes(char)) {
      acc[char] = (acc[char] || 0) + 1;
    }
    return acc;
  }, {});
}

console.log(vowelCount("Matt"));
console.log(vowelCount("Elie"));
console.log(vowelCount("Tim"));
console.log(vowelCount("Colt"));
console.log(vowelCount("hmmm"));
console.log(vowelCount("I Am awesome and so are you"));

function addKeyAndValue(arr, key, value) {
  return arr.reduce((acc, obj) => {
    obj[key] = value;
    acc.push(obj);
    return acc;
  }, []);
}

console.log(addKeyAndValue(arr, "title", "Instructor"));

function partition(arr, cb) {
  return arr.reduce(
    (acc, item) => {
      acc[cb(item) ? 0 : 1].push(item);
      return acc;
    },
    [[], []]
  );
}

function isEven(val) {
  return val % 2 === 0;
}

function isLongerThanThreeCharacters(val) {
  return val.length > 3;
}

console.log(partition(nums, isEven)); //[[2, 4, 6], [1, 3, 5]]
console.log(partition(names, isLongerThanThreeCharacters)); // [['Elie', 'Colt', 'Matt'], ['Tim']]
