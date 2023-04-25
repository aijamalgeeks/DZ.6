const plus = document.querySelector(".increase")
const minus = document.querySelector(".decrease")
const inp = document.querySelector("input")

plus.onclick=()=>{
    inp.value++
}
minus.addEventListener("click", ()=>{
    inp.value--
})
