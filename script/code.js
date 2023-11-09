// Addition button
const btnAdd = document.querySelector('[data-submit]')
const lblOutput = document.querySelector('#output')
function addition() {
    let numb1 = document.getElementById('numb1').value
    let numb2 = document.getElementById('numb2').value
    let sum =eval(`${numb1}+ ${numb2}`)
    // lblOutput.innerHTML = `<strong>${sum}</strong>`
    lblOutput.textContent = sum
}
//btnAdd
btnAdd.addEventListener('click', addition)

//function
function testing() {
     numb1 = 23
     console.log(numb1);
}
// testing
testing()
console.log(numb1);
console.log(window)

//create a array
let data=[
    3,5,8,
    'Veronique',
    'Sivuyisiwe'
]
console.log[data.length-1]
data.push('Matthew')
console.log(data);
data.push('Shawn','Simamkele')
console.log[data.length-1];
console.log(data)
console.log (data.at(-1))
data.unshift('new','element')
console.log(data)
data.pop()
console.log(data)



