function calcular(){
    let TipoDulce = parseInt(document.getElementById('TipoDulce').value);
    let Cantidad = parseInt(document.getElementById('Cantidad').value);
    let ValorUnd=0;
    switch(TipoDulce){
        case 1:ValorUnd = 450;break;
        case 2:ValorUnd = 225;break;
    }
    let ValorTotal=ValorUnd*Cantidad;

    switch(TipoDulce){
        case 1:ValorUnd = 450;break;
        case 2:ValorUnd = 450;break;
    }
    let precioNormal=ValorUnd*Cantidad;

    switch(TipoDulce){
        case 1:ValorUnd = 0;break;
        case 2:ValorUnd = 50;break;
    }
    let ValorTotDesc=ValorUnd;



    document.getElementById("sueldoBase").innerHTML="<h5>$"+ValorTotal+"</h5>";
    document.getElementById("1").innerHTML="<h5>$"+precioNormal+"</h5>";
    document.getElementById("2").innerHTML="<h5>"+ValorTotDesc+"%</h5>";
}