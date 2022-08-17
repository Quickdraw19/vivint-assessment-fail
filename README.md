# vivint-assessment-fail
A coding test I was given for a job interview that I blew.

This was task to see if I knew anything. Clearly, I don't. It
took way too long. I fumbled around.
Requirements: Given an array of values, drop the two lowest
numbers and average the remaining.

Apparently I missed a requrement that the values in this array were supposed to be strings.
let scores = [4, 1, 6, 10, 2, 3]

Remove the two lowest values. I could sort them and remove the two lowest values, then count them and divide that total by the array length.
sort() sorted these alphabetically (1, 10, 2, 3...). I can't believe there isn't something that does it correct. This solution came from stack overflow.
scores.sort(function(a,b) {
   return a - b
})

Originally I did splice(2), which in the console returned the remaining numbers I wanted. But the values contained in 'scores' were the first two numbers. I realized I needed to give the starting position and the lenght the splice out. Need to find out why the console returned the wrong contents.
scores.splice(0,2)

let total = 0

I fumbled with this for a while. The code worked but didn't produce the expected result due to the splicing error before. I assumed I was doing the forEach wrong. There's probably a better way to get the totals from the array, like reduce().
scores.forEach(element => {
   total += element
});

let average = total / scores.length