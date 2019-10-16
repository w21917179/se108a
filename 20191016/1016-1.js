function f(n) {
    if (n==0) return 0
    if (n==1) return 1
    return 3*f(n-1) + 2*f(n-2)
}

console.log("f(1)" , f(1))
console.log("f(3)" , f(3))
console.log("f(5)" , f(5))
console.log("f(10)" , f(10))
