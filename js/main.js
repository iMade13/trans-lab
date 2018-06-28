const inputText = document.querySelector("input")
const containerSaldo = document.getElementById("saldo")
document.getElementById('btnConsultarSaldo').addEventListener('click', cargarAPI)


// inputText.addEventListener("keypress", () => {
//             let key = event.which || event.keyCode;
//             if (key === 13) { // 13 es valido para enter 
//                 let bip = inputText.value;
//                 console.log(bip)
//                 inputText.value = "";
//             })

function cargarAPI() {
    const numberCardBip = document.getElementById('numberCard').value
    fetch(`http://www.psep.cl/api/Bip.php?&numberBip=${numberCardBip}`)
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            console.log(data)
            renderInfo(data)
        })
        .catch(error => console.log(error))
};

const renderInfo = data => {
// const cambio = Object.entries(data)
containerSaldo.innerHTML = data.['Saldo tarjeta'];
});
}