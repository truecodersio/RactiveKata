var people = [{
    name: 'Subash',
    age: 29,
    isMinor: false
  },
  {
    name: 'Sunil',
    age: 22,
    isMinor: false
  },
  {
    name: 'Nita',
    age: 19,
    isMinor: true
  }
];

var ractive = new Ractive({
  target: '#target',
  template: '#template',
  data: { people: people },
  edit: function(person, index) {
    var name = person.name;
    var age = person.age;
    var isMinor = person.isMinor;

    ractive.set('people[' + index + ']', person);
}

});
