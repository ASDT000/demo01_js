const customer = [];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
console.log(numbers)
console.log(numbers[2])
console.log(numbers[9])
console.log(customer)


console.log("--------------------")
console.log("")
for (let i = 0; i < 10; i++) {
    console.log(numbers[i])
}
console.log()
console.log("--------------------")


console.log()
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}
console.log()
console.log("--------------------")
console.log()
console.log()
// object array :
const customers = [
    {
        name: "madhu",
        age : 20,
        email: "madhu@gmail.com"
    },
    {
        name: "thamani",
        age : 15,
        email: "thamani@gmail.com"
    },
    {
        name: "pamudini",
        age : 12,
        email: "pamu@gmail.com"
    }
]

console.log(customers[0])
console.log()
console.log(customers)
console.log()
console.log("--------------------")
for (let i = 0; i < customers.length; i++) {
    console.log(customers[i])
}
console.log()
