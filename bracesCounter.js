// Create a function that, given an input string, returns a boolean true/false whether parentheses in that string are valid.

// Example 1:"y(3(p)p(3)r)s" --> true
// Example 2: "n(0(p)3" --> false
// Example 3: "n)0(t(o)k" --> false

// hint: consider using an array or object to solve

// check entire string, return true/false
// every single opening parens has a closing
// never hit an closing parens before a opening parens
// ONLY care about the parens in the string

function parensValid(str) {
    var parensCounter = 0;

    // checking that the number of closed is never higher than the number open
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(") {
            parensCounter++;
        } else if (str[i] === ")") {
            parensCounter--;
            if (parensCounter < 0) {
                return false;
            }
        }
    }

    // checking that the number of closed === number open at the end
    if (parensCounter === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(parensValid("y(3(p)p(3)r)s")); // --> true
console.log(parensValid("n(0(p)3")); // --> false
console.log(parensValid("n)0(t(o)k")); // --> false

// Given a string, returns whether the sequence of various parentheses, braces and brackets within it are valid.

// Example 1: "({[({})]})" --> true
// Example 2: "d(i{a}l[t]o)n{e!" --> false
// Example 2: "{{[a]}}(){bcd}{()}" --> true

// hint: consider using an array or object to solve
function bracesValid(str) {
    // counter[parens,squares,squiggles]

    var counter = [0, 0, 0];

    // checking that the number of closed is never higher than the number open
    for (let i = 0; i < str.length; i++) {
        // [

        // parens
        if (str[i] === "(") {
            counter[0]++;
        }
        if (str[i] === ")") {
            counter[0]--;
            if (counter[0] < 0) {
                return false;
            }
        }

        // squares
        if (str[i] === "[") {
            counter[1]++;
        }
        if (str[i] === "]") {
            counter[1]--;
            if (counter[1] < 0) {
                return false;
            }
        }

        // squiggles
        if (str[i] === "{") {
            counter[2]++;
        }
        if (str[i] === "}") {
            counter[2]--;
            if (counter[2] < 0) {
                return false;
            }
        }
    }

    // checking that the number of closed === number open at the end
    if (counter[0] === 0 && counter[1] === 0 && counter[2] === 0) {
        return true;
    } 
    else {
        return false;
    }
}

console.log() // extra space
console.log(bracesValid("({[({})]})")) // --> true
console.log(bracesValid("d(i{a}l[t]o)n{e!")) // --> false
console.log(bracesValid("{{[a]}}(){bcd}{()}")) // --> true
console.log(bracesValid("([)]")) // should be false but it's not
