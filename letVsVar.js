function doStuff() {
  // both a and b will be available for this function, but not outside
  let a = 5;
  var b = 5;
  
  console.log(a + b); // 10
}

doStuff(); // 10;
//console.log(a); // ReferenceError
//console.log(b); // ReferenceError

function doMoreStuff() {
  if (2 + 2 === 4) {
    // Here, a will be available for the whole function
    var a = 5;
    // But b will be available only inside this if block
    let b = 5;
  }
  console.log(a); // 5
 // console.log(b); // ReferenceError
}

doMoreStuff();
// 5
// ReferenceError

for (let i = 0; i < 5; i++) {
  // i is reccreated on every interation
  // and setTimeout gets a new i every time
  setTimeout(() => console.log(i), 100);
}
/*
0
1
2
3
4
*/

for (var j = 0; j < 5; j++) {
  // j is scoped to the outside function (which is the file itself)
  // thus, it is not recreated and setTimeout gets the same reference to j
  setTimeout(() => console.log(j), 100);
}
/*
5
5
5
5
5
*/