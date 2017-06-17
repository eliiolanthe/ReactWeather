var names = ['Anna', 'Paul', 'Ben'];

/*
names.forEach(function(name) {
  console.log('forEach', name);
});

names.forEach((name) => {
  //for fn containing multiple statements.
  console.log('Arrow fn', name);
});
*/

names.forEach((name) => console.log('Arrow fn', name));

//always returns
var returnMe = (name) => name + '!!';
console.log(returnMe('Poop'));

/*
var person = {
  name: 'Andy',
  greet: function() {
    names.forEach(function(name) {
      console.log(this.name + ' says hi to '+ name);
    });
  }
}

person.greet();

undefined says hi to Anna
undefined says hi to Paul
undefined says hi to Ben

*/

var person = {
  name: 'Andy',
  greet: function() {
    // doesnt update 'this'
    names.forEach((name) => {
      console.log(this.name + ' says hi to '+ name);
    });
  }
}

person.greet();

/*
Andy says hi to Anna
Andy says hi to Paul
Andy says hi to Ben
*/

var add = (a, b) => { return a + b; }

//var add = (a, b) =>  a + b;

console.log('Adding: ' + add(3, 7));