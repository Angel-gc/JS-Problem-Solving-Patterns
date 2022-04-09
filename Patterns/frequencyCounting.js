let string1 = 'assr'
let string2 = 'ssfa'

//---------------- FREQUENCY COUNTING PATTERN -------------
function validAnagram(first, second) {
  if(first.length !== second.length){
    return false
  }

  let lookup = {}

  for (let i = 0; i < first.length; i++){
    let letter = first[i]

    lookup[letter] ? lookup[letter]++ : lookup[letter] = 1
  }
  console.log(lookup)

  for(let i = 0; i < second.length; i++) {
    let letter = second[i];
    if(!lookup[letter]){
      return false;
    } else {
      lookup[letter] -= 1
    }
  }
  return true
}

console.log(validAnagram(string1, string2))

let array = [1,2,3,4,5,5,5,6,6,6,7,8,9, 10, 10]

function countUniqueValues(arr){
  let vals = [];

  for (let i = 0; i < arr.length; i++){
    let currentNumber = arr[i];

    if (!vals.includes(currentNumber)){
      vals.push(currentNumber);
    }
  }
  return vals.length;
}

console.log(countUniqueValues(array))

const countUniqueValues = (arr) => {  
  let values = {}
  let final = []
  
  for(let val of arr){
    values[val] ? values[val]++ : values[val] = 1
  }

  for(let val in values){
    if(values[val]){
      final.push(val)
    }
  }
  return(final.length)
}

function countUniqueValues(arr){
  if(arr.length < 1) return 0;
  var i = 0; 
  for(var j = 1; j < arr.length; j++){
    if(arr[i] !== arr[j]){
      i++;
      arr[i] = arr[j]
    }
    console.log(i, j);
  }
  return i + 1;
}