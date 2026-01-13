function checkType(value) {
    if (value === null) return "object"; 
    return typeof value;
}

console.log(checkType(10));       
console.log(checkType("Hello")); 
console.log(checkType(null));   