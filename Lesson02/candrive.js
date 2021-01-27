let fname = 'Sean'
let lname = 'Estes'
let age = 39
const canDrive = 16

if (age - canDrive >= 0) {
  console.log(fname + ' ' + lname + ' can drive, and has driven for ' + (age - canDrive) + ' years')
}

else {
  console.log(fname + ' ' + lname + ' cannot drive. They need ' + (canDrive - age) + ' more years to drive')
}
