var c=[0,1]

function f(n) {
    if (c[n]!=null) return c[n]
    //
    c[n]=3*f(n-1) + 2*f(n-2)
    return c[n]
}

console.log("f(1)" , f(1))
console.log("f(3)" , f(3))
console.log("f(5)" , f(5))
console.log("f(10)" , f(10))
