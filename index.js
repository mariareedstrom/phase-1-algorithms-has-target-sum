function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n2), looping through nested array.... 
*/

/* 
  Add your pseudocode here
  function takes an array of numbers and a target number

  iterate through input array
  set two variables, array index i and j
  add i and j, if equal to target, return true
  
  else return false




*/

/*
  Add written explanation of your solution here:
  Given a list of numbers and a target number, write a function that will tell 
  if any 2 of the numbers on the list add up to the target number. 

  I iterated through the array of numbers, adding each number to each of the 
  remaining numbers to check if they added up to the target sum. 


*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here

  console.log("Expect: true");
  console.log("=>", hasTargetSum([3, 4, 8, 1, 2], 12));

  console.log("Expect: false");
  console.log("=>", hasTargetSum([4], 4));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
