const totalCounterEl = document.getElementById("total-counter");
const remainingCounterEl = document.getElementById("remaining-counter");

const textAreaEl = document.getElementById("textarea");

textAreaEl.addEventListener("keyup", ()=>{
    updateCounter();
})

function updateCounter(){
   totalCounterEl.textContent = textAreaEl.value.length;
   remainingCounterEl.textContent = textAreaEl.getAttribute("maxLength") - textAreaEl.value.length;
}