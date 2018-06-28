// const inputText = document.querySelector("input")
document.getElementById('btnVerSaldo').addEventListener('click', cargarAPI)
document.getElementById('btnVerSaldo').addEventListener('click', saveCard)
document.getElementById('btnCalcular').addEventListener('click', saveCard)

function cargarAPI() {
    const numberCardBip = document.getElementById('numberCard').value;
    document.getElementById('numberCard').value = '';


    fetch(`http://www.psep.cl/api/Bip.php?&numberBip=${numberCardBip}`)
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            const dataBip = Object.values(data)

            let amountBip = dataBip[2];
            document.getElementById("dataSaldo").innerHTML = `Saldo total  </br> ${amountBip}`;
        })

    .then(function saveCard() {
        let card = document.getElementById("saveCard");
        let option = document.createElement("option");
        option.text = numberCardBip;
        card.add(option);
    })

    // .then(calcular() => {
    //         if (amountBip > 720) {
    //             saldoFinal = amountBip - 720;
    //             document.getElementById("costoPasaje").innerHTML = ;
    //             document.getElementById("saldoFinal").innerHTML = saldoFinal;
    //         } else if (amountBip > 680) {
    //             document.getElementById("").innerHTML = '';
    //             saldoFinal = amountBip - 680;
    //             document.getElementById("saldo").innerHTML = saldoFinal;
    //         } else if (amountBip > 630) {
    //             document.getElementById("").innerHTML = '';
    //             saldoFinal = amountBip - 630;
    //             document.getElementById("saldo").innerHTML = saldoFinal;
    //         } else if (amountBip < 630) {
    //             document.getElementById("").innerHTML = "";
    //         }
    //     })
    .catch(error => console.log(error))
};