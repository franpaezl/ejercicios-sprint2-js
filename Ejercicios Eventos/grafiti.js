let div1 = document.querySelector(".div1");
let button1 = document.querySelector(".button1");
let parImpar = 0;

button1.addEventListener("click", (event) => {
    event.preventDefault()
    if (parImpar % 2 === 0) {
        div1.classList.remove("bg-red-500");
        div1.classList.add("bg-[#98B6F0]");
        let textoColor = `<p class="text-center">Azul Claro</p>`;
        div1.innerHTML = textoColor;
    } else {
        div1.classList.remove("bg-[#98B6F0]");
        div1.classList.remove("bg-slate-400")
        div1.classList.add("bg-red-500");
        let textoColor = `<p class="text-center">Rojo</p>`;
        div1.innerHTML = textoColor;
    }
    parImpar++;
});
////////////////////////////////////////////////////////////////////////////////////

let div2 = document.querySelector(".div2");

let button2 = document.querySelector(".button2");

let input1 = document.getElementById("texto")

let form = document.querySelector(".form")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(input1.value);
    div2.innerHTML = `<p class="text-center">${input1.value}</p>`;
});


button2.addEventListener("click", (event)=>{
    div2.innerHTML=""
})

//////////////////////////////////////////////////////////////////////////////////////

let button3 = document.querySelector(".button3");

let estatura = document.getElementById("estatura");

let peso = document.getElementById("peso");

let divHijo = document.querySelector(".div3__hijo")

button3.addEventListener("click", (event)=>{
    event.preventDefault();
    let masaCorporal = (peso.value/(estatura.value/100)**2).toFixed(2)
    let masaTotal = `<p>${masaCorporal}</p>`
    divHijo.innerHTML = masaTotal
})


/////////////////////////////////////////////////////////////////////////////////////

const pesoAUsdForm = document.querySelector(".form4");

const usdAPesoForm = document.querySelector(".form5");

const resetButton = document.getElementById("reset");
const pesoAUsdResultado = document.getElementById("pesoAUsdResultado")
const usdAPesoResultado = document.getElementById("usdAPesoResultado")


pesoAUsdForm.addEventListener("submit", (event=> {
    event.preventDefault();
    const montoPeso = Number(document.getElementById("montoPeso").value);
    const montoUsd = montoPeso / 500; 
    pesoAUsdResultado.textContent = `USD ${montoUsd}`
}));

usdAPesoForm.addEventListener("submit", (event=> {
    event.preventDefault();
    const montoUsd = Number(document.getElementById("montoUsd").value);
    const montoPeso = montoUsd * 500; 
    usdAPesoResultado.textContent = `$ ${montoPeso}`
}));

resetButton.addEventListener("click", (event) => {
    pesoAUsdForm.reset()
    usdAPesoForm.reset();
    pesoAUsdResultado.textContent = "";
    usdAPesoResultado.textContent = ""
});