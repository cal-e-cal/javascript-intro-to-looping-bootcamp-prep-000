function forLoop (testArray) {
  for (let i = 0; i < 25; i++) {
   if (i===1) {
    testArray.push('I am 1 strange loop.');
   } else {
    testArray.push(`I am ${i} strange loops.`);
   }
  }
  return testArray;
}

function whileLoop (testNum) {
  while(testNum>0) {
  console.log(testNum);
  --testNum;
  }
  return 'done';
}