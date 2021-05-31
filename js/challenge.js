var ctr = document.querySelector("#counter")
const ctrPlus = document.querySelector("#plus")
const ctrMinus = document.querySelector("#minus")
var counter = 0
let ctrP = function (e){
    counter++
    ctr.innerText = counter
    console.log(ctr)
  }
document.addEventListener("DOMContentLoaded", function(e){
  window.setInterval(ctrP, 1200)
})

ctrPlus.addEventListener("click", ctrP)

ctrMinus.addEventListener("click", function (){
    counter--
    ctr.innerText = counter
    console.log(ctr)

})
