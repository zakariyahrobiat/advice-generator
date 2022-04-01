btn = document.querySelector(".btn");
advice = document.querySelector(".advice");

btn.addEventListener("click", ()=>{
    generateAdvice()
})
generateAdvice()

async function generateAdvice(){
    fetchAdvice = await fetch("	https://api.adviceslip.com/advice",{
    headers: {
    'Accept' :" application/json"
    }
    
    })
    adviceEl = await fetchAdvice.json()
    adviceElement = adviceEl.slip;
    advice.innerHTML = adviceElement.advice
}