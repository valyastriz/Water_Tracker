let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
let totalEl = document.getElementById("total-el")
let total = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " oz - "
    saveEl.textContent += countStr
    total += count;
    totalEl.textContent = total
    countEl.textContent = 0
    count = 0
}

