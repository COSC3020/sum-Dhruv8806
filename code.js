//Compute the sum of a list of numbers.

function sum(a) {
    var sum = 0; 
    for(var i = 0; i < a.length; i++) {
        sum += a[i];
    }
    return sum;
}
 console.log(sum([6,7,8]))

// Incorrect - var sum = a[0]; : Initializes 'sum' to the value of first element of the array.
// Correct - var sum = 0;  :  Initialize sum to 0 - ensuring that sum starts from zero.

/*
Sources Used :-
https://www.youtube.com/watch?v=FgnxcUQ5vho
https://www.youtube.com/watch?v=W6NZfCO5SIk&t=1229s
https://www.geeksforgeeks.org/learn-javascript-js-roadmap-for-beginners/?ref=shm_outind
https://stackoverflow.com/questions/55823968/javascript-simple-exercises
*/
