# RactiveKata

Kata for using Ractive

## RactiveKata Tasks

We're going to explore how we would use Ractive to dynamically handle form editing.

### Step 1

Fork and clone this repo

### Step 2

Add a `head` element and use Bootstrap for your CSS

### Step 3

Create an array of people and add this to your data within Ractive.

```js
// Example
var people = [
    { name: "Name", age: 0, isMinor: false }
];
```

### Step 4

Use a Ractive `each` loop to display each person in your people array, along with an edit button, in a table element:

```html
<table>
    <tr>
        <th>Name Header</th>
    </tr>
    <tr>
        <!--Use a Ractive #each loop to populate your table data sections-->
        <td>Actual Name from For Each</td>
    </tr>
</table>
```

### Step 5

Add an Edit function to your Ractive to enable editing of your array of people

### Step 6

Make a pull request

**Good luck!**
