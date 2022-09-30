let storeOpen = true
let cash = 40
let price = 40

let stats = storeOpen && (cash >= price) ? 'give receipt' : 'do not give receipt'
console.log(stats);