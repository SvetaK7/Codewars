function mergeArrays(arr1, arr2) {
  mergeArr = [...arr1, ...arr2].sort((a, b) => a - b );
  sortArr = mergeArr.filter((item, index) => {
    return mergeArr.indexOf(item) === index;
  })
  return sortArr;
}
console.log(mergeArrays([11,2,3,7], [5,6,7,8]));

