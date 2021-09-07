window.onload = iniciar;

function iniciar () {
     var btncalCalcular = document.getElementById("btnCalcular");
     btncalCalcular.addEventListener("click", clickBtnCalcular)
}

function clickBtnCalcular(){
    //obtengo valor y guardo
    var txtPeso = document.getElementById("txtPeso");
    var peso = txtPeso.value;

    //obtengo valor y guardo
    var txtAltura = document.getElementById("txtAltura");
    var altura = txtAltura.value;

    var imc = peso / (altura * altura);
    alert(imc)
}