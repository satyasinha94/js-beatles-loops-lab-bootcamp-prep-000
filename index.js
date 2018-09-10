function theBeatlesPlay (musicians, instruments) {
<<<<<<< HEAD
  var i = 0
  var newarray = [];
  var length = musicians.length
  for (i = 0; i < length; i++) {
   newarray.push(`${musicians[i]}` + " plays " + `${instruments[i]}`);
  }
return newarray
}
function johnLennonFacts (facts) {
  var i = 0
  var counter = facts.length
  var newfacts = [];
  while (counter > 0) {
  newfacts.push(`${facts[i]}` + "!!!");
  i++
  counter--
}
return newfacts
}
function iLoveTheBeatles (n) {
  var newarray3 = [];
  do {
    newarray3.push("I love the Beatles!");
    n++
  }
  while (n < 15);
return newarray3
=======
  var i = [];
  var length = musicians.length
  for (i = 0; i < length; i++) {
    return musicians[i] + " plays " + instruments[i];
  }
>>>>>>> 65d0e5e448e61d3bf54cfb0dc71d5aad6bd1620a
}
