const widget = ractive.findComponent('MyComponent')

var ractive = new Ractive({
    target: '#target',
    template: '#template',
    data: {
        intro: 'These are my people:',
        people: [
            { name: "Clay",    age: 23,    isMinor: false },
            { name: "Michael", age: 30,    isMinor: false },
            { name: "Starla",  age: 26,    isMinor: false },
            { name: "Tori",    age: 26,    isMinor: false },
            { name: "Andrew",  age: 28,    isMinor: false },
            { name: "Daniel",  age: 32,    isMinor: false },
            { name: "Subash",  age: 45,    isMinor: false },
            { name: "Cody",    age: 'old', isMinor: false },
            { name: "Daniel",  age: 'old', isMinor: false },
        ]
    }
});
