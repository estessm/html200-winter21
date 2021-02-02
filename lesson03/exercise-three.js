let arr= ['one', 'two', 'three'];

for (let i = 0; i < arr.length; i++){
  for (let a = 1; a <= arr.length; a++){
    console.log([a] + ', ' + arr[i])
  }
}
