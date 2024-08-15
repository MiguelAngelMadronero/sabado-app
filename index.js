const titulo = document.querySelector(".titulo")

let date = new Date();

let day= date.getDay();

console.log(day);

let missingDays=6-day;

if(missingDays===0){
    titulo.textContent="Es Sábado";
}else if(missingDays===1){

    titulo.textContent=`Falta ${missingDays} día para el Sábado`;
    
}else{
    titulo.textContent=`Faltan ${missingDays} días para el Sábado`;

}