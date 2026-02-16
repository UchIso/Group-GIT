const counter = document.getElementById("counter")
const plus = document.getElementById("plus")
const minu = document.getElementById("minu")

plus.addEventListener("click", (e)=>{
    let count = Number(counter.textContent)
    count++
    counter.textContent = count
})

minu.addEventListener("click", (e)=>{
    let count = Number(counter.textContent)
    count--
    counter.textContent = count
})