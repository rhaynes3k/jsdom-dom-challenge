var ctr = document.querySelector("#counter")
const ctrPlus = document.querySelector("#plus")
const ctrMinus = document.querySelector("#minus")
const like = document.getElementById("heart")
const lkLst = document.querySelector(".likes")
var liCntr = 0
var likeCnt = 0
var counter = 0
let ctrP = function (e){
    counter++
    ctr.innerText = counter
  }
let ctrM = function (e){
    counter--
    ctr.innerText = counter
  }

//document.addEventListener("DOMContentLoaded", function(e){
  //window.setInterval(ctrP, 1000)
//})
ctrPlus.addEventListener("click", ctrP)
ctrMinus.addEventListener("click", ctrM)

like.addEventListener('click', function(){
  likeCnt++
  liCntr++
  let newLi = document.createElement('li')
  newLi.innerText = `${ctr.innerText} has been liked ${likeCnt} times`
  lkLst.innerHTML += `
    <li> ${newLi.innerText} </li>
    `
  console.log(likeCnt, lkLst.innerText)
})
