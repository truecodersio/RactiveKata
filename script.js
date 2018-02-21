// var Component = Ractive.extend({
//     isolated: false,
//     template: `
//     <tr>
//         <td>Person #{{@index + 0}}</td>
//         <td>{{this.name}}</td>
//         <td>{{this.age}}</td>
//         <td>{{this.isMinor}}</td>
//         <td>
//             <button class="btn btn-outline-primary"
//                     on-click="@this.set('', 'Lorem Ipsum')"> Edit
//             </button>
//         </td>
//     </tr>
//     `
// });

var ractive = new Ractive({
    // lazy: false,
    target: '#target',
    template: '#template',
    data: {
        msg: 'These are my people:',
        editing: false,
        people: [
            { name: "Clay",    age: 23,    isMinor: false },
            { name: "Michael", age: 30,    isMinor: false },
            { name: "Starla",  age: 26,    isMinor: false },
            { name: "Tori",    age: 26,    isMinor: false },
            { name: "Adrian",  age: 28,    isMinor: false },
            { name: "Daniel",  age: 32,    isMinor: false },
            { name: "Subash",  age: 45,    isMinor: false },
            { name: "Jack",    age: 27,    isMinor: false },
            { name: "Cody",    age: 25,    isMinor: false },
            { name: "Daniel",  age: 25,    isMinor: false },
        ]
    }
});
