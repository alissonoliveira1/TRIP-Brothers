const bntt = document.querySelector('.chh')

const useTheme = () => {
  const temas = {
    dark:"dark",
    ligth:"ligth"
  }

  const data = localStorage.getItem("tema") || null

  const trocarTema = () => {
    localStorage.setItem("tema", data === temas.ligth  ? temas.dark : temas.ligth)
  }

  return {
    data,
    trocarTema,
  }

}

const links = [
  '#a0',
  '#a1',
  '#a2',
  '#a3',
  '#a4',
  '#a5',
  '#a6'
]
const fundo = document.querySelector('.chh')
     fundo.onclick = function (){

  const {trocarTema} = useTheme()

  trocarTema()
  
  if (bntt.checked) {
      links.forEach(id => {
        document.querySelector(id).style.color =  "rgb(221, 221, 221)"
      })
      document.querySelector('.menu ul').style.backgroundColor = 'black'
      document.querySelector('.menu ul').style.border = '2px solid white'
        document.querySelector('.icon-night').style.color = 'yellow'
        document.querySelector('.container').style.backgroundColor = 'black'
        document.body.style.backgroundColor = '#000A1F'
    } else {
      document.body.style.backgroundColor = 'white'
      document.querySelector('.menu ul').style.backgroundColor = 'white'
      document.querySelector('.menu ul').style.border = '2px solid black'
      document.querySelector('.container').style.backgroundColor = 'white'
      document.querySelector('.link').style.color = 'black'
      document.querySelector('#a1').style.color = 'black'
        document.querySelector('#a2').style.color = 'black'
        document.querySelector('#a3').style.color = 'black'
        document.querySelector('#a4').style.color = 'black'
        document.querySelector('#a5').style.color = 'black'
        document.querySelector('#a6').style.color = 'black'
        document.querySelector('.icon-night').style.color = 'rgb(102, 102, 102)'
    }
}
const txt = document.querySelector('.textin')
const nomedificil = txt.clientHeight
const overflow = document.querySelector('.overflow')
const button = document.querySelector('.toggle')

button.addEventListener('click', initToggle)

function initToggle(e){
  txt.style.maxHeight = 
  e.target.dataset.state === "more"
  ? `${txt.scrollHeight}px`
  : `${nomedificil}px`;

  e.target.setAttribute(
    "data-state",
    e.target.dataset.state === "more" ? "less" : "more"
  );

  e.target.innerHTML =
  e.target.dataset.state === "more" ? "Mostrar Mais" : "Mostrar Menos"
  
  overflow.setAttribute (
    "data-state",
    e.target.dataset.state === "more" ? "visible" : "hidden"
  );
}


const input = document.getElementById('ida');

// Adiciona um evento de clique ao documento
document.addEventListener('click', function (event) {
  // Verifica se o alvo do clique não é o input
  if (event.target !== input) {
    // Muda a cor de fundo do input
    input.style.backgroundColor = 'white';
  }
});
 
input.onclick = function(){
    input.style.backgroundColor = '#bab490';
}

const novoinput = document.getElementById('volta');
document.addEventListener('click', function (event){
    if(event.target !== novoinput){
        novoinput.style.backgroundColor = 'white';
    }
});
document.getElementById('volta').onclick = function(){
    novoinput.style.backgroundColor = '#bab490';
}





 var kirin = document.querySelector('#korra')
 document.querySelector('.tipos').onclick = function (){
  if (kirin.checked){
    document.querySelector('.tipos').style.backgroundColor = '#bab490'
    document.querySelector('.paii').style.display = 'block'
  }else{
    document.querySelector('.tipos').style.backgroundColor = 'white'
    document.querySelector('.paii').style.display = 'none'
  }
  
 }

 


var kiri = document.querySelector('#check-pass')
document.querySelector('.pass').onclick = function (){
 if (kiri.checked){
   document.querySelector('.pass').style.backgroundColor = '#bab490'
   document.querySelector('.odin').style.display = 'block'
  
 }else{
   document.querySelector('.pass').style.backgroundColor = 'white'
   document.querySelector('.odin').style.display = 'none'
 }
}



var c1 = 0;
var d1 = 0;
var adulto = document.getElementById('adultos')
function mais() {
  document.getElementById('adultos').innerHTML = ++d1;
 if(d1 >= 10){
  document.getElementById('adultos').innerHTML = 0;
  d1 = 0
  alert("O número máximo de passageiros deve ser de 9 pessoas.")
  
 }
  var soma = d1 + c1
  if( soma >=10){
    alert('O número máximo de passageiros deve ser de 9 pessoas.')
    document.getElementById('adultos').innerHTML = 0;
  d1 = 0
    c1 = 0
    document.getElementById('criancas').innerHTML = 0;
  }
}
function menos() {
  document.getElementById('adultos').innerHTML = --d1;
  var atual = document.getElementById("adultos").value;
  if(d1 < 0) { //evita números negativos
    d1 = 0
    document.getElementById('adultos').innerHTML = 0;
  }
}

var crianca = document.getElementById('criancas')
function mais1() {
  document.getElementById('criancas').innerHTML = ++c1;
 if(c1 >= 10){
  document.getElementById('criancas').innerHTML = 0;
  c1 = 0
  alert("O número máximo de passageiros deve ser de 9 pessoas.")
  
  
 }
 var soma = d1 + c1
 if( soma >=10){
   alert('O número máximo de passageiros deve ser de 9 pessoas.')
   document.getElementById('adultos').innerHTML = 0;
   d1 = 0
   c2 = 0
   document.getElementById('criancas').innerHTML = 0;
}
}
function menos1() {
  document.getElementById('criancas').innerHTML = --c1;
 
  if(c1 < 0) { //evita números negativos
    c1 = 0
    document.getElementById('criancas').innerHTML = 0;
  }
}

document.querySelector('#data').onclick = function (){
document.querySelector('input[type="date"]').style.backgroundColor = 'white'
}



kirin.addEventListener("change", function() {
  // Verifica se o Checkbox 1 está marcado
  if (kirin.checked) {
      // Desmarca o Checkbox 2
      kiri.checked = false;
      document.querySelector('.pass').style.backgroundColor = 'white'
   document.querySelector('.odin').style.display = 'none'
  }
});
kiri.addEventListener("change", function() {
  // Verifica se o Checkbox 1 está marcado
  if (kiri.checked) {
      // Desmarca o Checkbox 2
      kirin.checked = false;
      document.querySelector('.tipos').style.backgroundColor = 'white'
   document.querySelector('.paii').style.display = 'none'
  }
});


function click(){
var pontos = document.getElementById("pontos")
var mais = document.getElementById("mais")
var button = document.getElementById('leiamais')

if(mais.style.display === none ){
  mais.style.display = 'block'
 
}}


 