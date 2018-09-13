/**
* This function should return max number in array
* @param {Array} arr - this is an array of numbers
* @return {number} - max number in array
* @example
* max([1, 2, 4]); // 4
* max([-1, 0]);   // 0
*/
const max = arr => {
  let biggest = !Number.isNaN(arr[0]) && Number.isFinite(arr[0]) ? arr[0] : arr[1];

  for(let i = 1; i < arr.length; i++){
    if(!Number.isNaN(arr[i]) && Number.isFinite(arr[i]) && arr[i] > biggest){
      biggest = arr[i];
    }
  }
  return biggest;
};

export default max;
