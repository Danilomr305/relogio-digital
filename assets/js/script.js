const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');


const relogio = setInterval(function time() {
    let dateToday = new DataTransfer();
    let hr = dateToday.getHours();
    let min = dateToday.getMInutes();
    let s = dateToday.getSeconds();

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent= s;
});