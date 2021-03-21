/*{1.d. How many words were used to construct this sentence.
     Now, don't exclude one letter words.
```js
console.log(varietyOfWords(sentence))
28

}*/

function countWords(sentence) {
    let res = [];
    res1 =sentence.split(' ');
    for(let i=0;i<res1.length;i++) {
        
            res.push(res1[i]);
        
    }
    return res.length;
}
const sentence = `I am a teacher and I love teaching. 
There is nothing as more rewarding as educating and empowering people.
 I found teaching more interesting than any other jobs.
  Does this motivate you to be a teacher?`;
console.log(countWords(sentence));