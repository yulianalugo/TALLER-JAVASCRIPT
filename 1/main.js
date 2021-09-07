function calcularSalario(){
    let cargo = parseInt(document.getElementById('cargo').value);
    let horas = parseInt(document.getElementById('horas').value);
    let sueldoHora=5000;    
    let sueldo=sueldoHora*horas;
    document.getElementById("sueldo").innerHTML="<h3>"+sueldo+"</h3>";
}