// // Addition button
// const btnAdd = document.querySelector('[data-submit]')
// const lblOutput = document.querySelector('#output')
// function addition() {
//     let numb1 = document.getElementById('numb1').value
//     let numb2 = document.getElementById('numb2').value
//     let sum =eval(`${numb1}+ ${numb2}`)
//     // lblOutput.innerHTML = `<strong>${sum}</strong>`
//     lblOutput.textContent = sum
// }
// //btnAdd
// btnAdd.addEventListener('click', addition)

// //function
// function testing() {
//      numb1 = 23
//      console.log(numb1);
// }
// // testing
// testing()
// console.log(numb1);
// console.log(window)

// //create a array
// let data=[
//     3,5,8,
//     'Veronique',
//     'Sivuyisiwe'
// ]
// console.log[data.length-1]
// data.push('Matthew')
// console.log(data);
// data.push('Shawn','Simamkele')
// console.log[data.length-1];
// console.log(data)  
// console.log (data.at(-1))
// data.unshift('new','element')
// console.log(data)
// data.pop()5
// console.log(data)

// // adding using splice
// data.splice(2, 0, 'Joel')
// console.log(data);
// //Removing element using splice
// data.splice(3, 2)
// console.log(data)

// let numbers = [1, 3, 5]
// numbers.splice(1,0,2)
// console.log(numbers)

//  numbers.splice(1,2)
// console.log(numbers)

//Reverse
let data = [7, 3, 'Abc', 1, 'abc']
console.log(data.reverse());

//sorting
// console.log(data.sort());


// let numbers = data.filter(onlyNumbers)
// // named function or function declaration
// function onlyNumbers(a){
//   return (typeof a == 'number')
// }
// console.log(numbers);

// console.log(data)
// let numbers =
// data.filter(a=> typeof a == 'number')
// console.log(numbers);
 

console.log(data);
let evenNumbers =
data.filter(testing)
console.log(evenNumbers);
function testing(x) {
    return x % 2 >=1
}