var ractive = new Ractive({
    target: '#target',
    template: '#template',
    data: {
        msg: 'My Family:',
        editing: false,
        people: [
            { name: "Bay", age: 30, isMinor: false },
            { name: "Elle", age: 31, isMinor: false },
            { name: "Teddy Ro", age: 3, isMinor: true },
        ]
    }
});
