// jan / feb / mar / apr / may / jun / jul / aug / sep / oct / nov / dec

let countDate = new Date('dec 31, 2021 00:00:00').getTime();

function countDown() {

    let now = new Date().getTime();
    gap = countDate - now;

    let segundo = 1000;
    let minuto = segundo * 60;
    let hora = minuto * 60;
    let dia = hora * 24;

    let d = Math.floor(gap / (dia));
    let h = Math.floor((gap % (dia)) / (hora));
    let m = Math.floor((gap % (hora)) / (minuto));
    let s = Math.floor((gap % (minuto)) / (segundo));

    document.getElementById('dia').innerText = d;
    document.getElementById('hora').innerText = h;
    document.getElementById('minuto').innerText = m;
    document.getElementById('segundo').innerText = s;
}

setInterval(function(){
    countDown();
},1000)