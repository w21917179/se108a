var c=[]

function f(n) {
    c[n] = 1
    for (i=n-1 ; i>=0 ; i--) {
        c[i] = 0
    }

    for (i=n ; i>1 ; i--) {
        c[i-1] += 3*c[i]
        c[i-2] += 2*c[i]
    }

    return c[1]
}

console.log("f(1)" , f(1))
console.log("f(3)" , f(3))
console.log("f(5)" , f(5))
console.log("f(10)" , f(10))