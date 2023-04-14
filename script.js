const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const lancamento = "01 dec 2023"

function ccxp22(){
    const dataLanc = new Date(lancamento)
    const hoje = new Date()

    const segTotal = (dataLanc - hoje) / 1000;

    const finalDias = Math.floor(segTotal / 60 / 60 / 24);
    const finalHoras = Math.floor(segTotal / 60 / 60) % 24;
    const finalMinutos = Math.floor(segTotal / 60) % 60;
    const finalSegundos = Math.floor(segTotal) % 60;

    dia.innerHTML = finalDias
    hora.innerHTML = formatoTempo(finalHoras)
    minutos.innerHTML = formatoTempo(finalMinutos)
    segundos.innerHTML = formatoTempo(finalSegundos)
}

function formatoTempo( Tempo ){
    return Tempo <10? `0${Tempo}` : Tempo;
}

ccxp22();
setInterval(ccxp22, 1000)