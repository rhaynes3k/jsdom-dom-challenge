var ctr = document.querySelector("#counter")
const ctrPlus = document.querySelector("#plus")
const ctrMinus = document.querySelector("#minus")
const like = document.getElementById("heart")
const lkLst = document.getElementsByTagName("ul")
var likeCnt = 0
var counter = 0
let ctrP = function (e){
    counter++
    ctr.innerText = counter
    console.log(ctr)
  }
let ctrM = function (e){
    counter--
    ctr.innerText = counter
    console.log(ctr)
  }
  let likeList = function (){
    likeCnt++

    lkLst.appendChild()
  }
//document.addEventListener("DOMContentLoaded", function(e){
  //window.setInterval(ctrP, 1000)
//})
ctrPlus.addEventListener("click", ctrP)
ctrMinus.addEventListener("click", ctrM)

like.addEventListener('click', function(){
  likeCnt++
  let newLi = document.createElement('li')
  newLi.innerText = `${ctr.innerText} has been liked ${likeCnt} times`
  lkLst.innerHTML = newLi
  console.log(likeCnt, lkLst.innerHTML)
})
