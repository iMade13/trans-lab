// const inputText = document.querySelector("input")
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
            const dataBip = Object.values(data)

            let amountBip = dataBip[2];
            document.getElementById("dataSaldo").innerHTML = `Saldo total  </br> ${amountBip}`;
        })
        .catch(error => console.log(error))
};