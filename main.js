/*$(function() {

var obj = {
   "John McLean":{
      "age":34,
      "experience":12
   },
   "Adam Luis":{
      "age":45,
      "experience":5
   },
   "Oleg Petrenko":{
      "age":25,
      "experience":7
   },
   "Natalia Ostroverh":{
      "age":38,
      "experience":10
   },
   "Olya Ostroverh":{
      "age":36,
      "experience":10
   },
   "Olya Tinkoff":{
      "age":55,
      "experience":21
   },
   "Anton Antonov":{
      "age":25,
      "experience":22
   },
   "Oleg Tynov":{
      "age":18,
      "experience":1
   }
}

// 1st task (Clear function)

	var users = [];

	$.each(obj, function( key, value ) {

		let newObj = {};

		newObj.name = key;
		newObj.age = value.age;
		newObj.experience = value.experience;

	  	users.push(newObj);
	});

	console.log(users);
	console.log(obj);

// 2nd task

	var sortedArray = users.sort(function (a, b) {
	  if (a.age - a.experience > b.age  - b.experience ) {
	    return 1;
	  }
	  if (a.age - a.experience  < b.age  - b.experience ) {
	    return -1;
	  }
	  return 0;
	});
	console.log(sortedArray);

// 3rd task

  var experienceSixAndMore = users.filter(function(user) {
  return user.experience >= 6;
  });

  console.log(experienceSixAndMore);

// 4th task

  var usersYoungerThenThirty = users.filter(function(user) {
  return user.age < 30;
  });
  var usersElderThenThirtyYoungerThenForty = users.filter(function(user) {
  return user.age >= 30 && user.age < 40;
  });
  var usersElderThenForty = users.filter(function(user) {
  return user.age >= 40;
  });

  console.log(usersYoungerThenThirty);
  console.log(usersElderThenThirtyYoungerThenForty);
  console.log(usersElderThenForty);

});*/



// $(function() {
//
// var coins = {
//    penny: 0.01,
//    nickel: 0.05,
//    dime: 0.10,
//    quarter: 0.25,
//    dollar: 1.00
// };
//
// function changeCount (string) {
// 	var total = 0;
// 	string.split(" ").forEach(function( item ) {
//
// 			total += coins[item];
//
// 	});
//
// 	return "$" + total;
// };
//
// console.log(changeCount('nickel dollar'));
//
// });





$(function() {

var morze = {
 'A': '.-',
 'B': '-...',
 'C': '-.-.',
 'D': '-..',
 'E': '.',
 'F': '..-.',
 'G': '--.',
 'H': '....',
 'I': '..',
 'J': '.---',
 'K': '-.-',
 'L': '.-..',
 'M': '--',
 'N': '-.',
 'O': '---',
 'P': '.--.',
 'Q': '--.-',
 'R': '.-.',
 'S': '...',
 'T': '-',
 'U': '..-',
 'V': '...-',
 'W': '.--',
 'X': '-..-',
 'Y': '-.--',
 'Z': '--..'
};

  function encodeMorze(string) {

    	var encoded = ' ';

      string.toUpperCase().split('').forEach(function(item) {

        if (item === ' ') {
          encoded += '  ';
        } else {
          encoded += morze[item] + ' ';
        }
      });

      let newP = $('<p>', { class: 'encoded', text: encoded});
      $("#main").append(newP);
  };

  function decodeMorze(string) {

      var decoded = ' ';
      var morzeReverse = {};

      $.each(morze, function( key, value ) {
        morzeReverse[value] = key;
      });

      string.replace(/   /g, " _ ").split(' ').forEach(function(item) {
          if (item === '_') {
            decoded += ' ';
          } else {
            decoded += morzeReverse[item];
          }
      });

      let newP = $('<p>', { class: 'decoded', text: decoded});
      $("#main").append(newP);

  };

  encodeMorze("Hello world");
  decodeMorze("- . ... -   .--. .... .-. .- ... .");

});
