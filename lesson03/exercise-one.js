let arr = ['Metallica', 'Slayer', 'Pantera', 'Slipknot', 'Hatebreed'];
console.log("1", arr);

arr.push('White Zombie');
console.log("2", arr);

arr.splice(2, 1);
console.log("3", arr);

let str = arr.join( ', ');
console.log("4", str);
