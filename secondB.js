/*2.b.Write a function which returns array of seven random numbers in a range of 0 - 9.
All the numbers must be unique
```js
sevenRandomNumbers()
[1,4,5,7,9,8,0]*/

function sevenRandomNumbers() {
    let arr = [];
    for (let i = 1; i <= 7; i++) {
        var num = Math.floor(Math.random() * 9) + 1;
        if (arr.indexOf(num) === -1) {
            arr.push(num);
        };
    };
    return arr;
}
console.log(sevenRandomNumbers());
