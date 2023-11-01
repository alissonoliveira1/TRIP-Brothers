const barra1 = document.querySelector(".z1")
const barra2 = document.querySelector(".z2")
const barra3 = document.querySelector(".z3")
const op1 = document.querySelector(".selecao")
function b9(){
  barra1.style.opacity='1'
  barra2.style.opacity='0'
  barra3.style.opacity='0'
}
function c9(){
  barra2.style.opacity='1' 
  barra1.style.opacity='0'
  barra3.style.opacity='0'
}
function d9(){
  barra3.style.opacity='1' 
  barra1.style.opacity='0'
  barra2.style.opacity='0'
}


const check2 = document.getElementById('check2')
function t5(){
  if(check2.checked){
    document.querySelector('.odin2').style.display = 'block'
  }else{
    document.querySelector('.odin2').style.display = 'none'
  }
}


function b1(){
  document.getElementById('volta').value = "Salvador - SSA"
  document.getElementById('pop').style.display = 'none'
}
function b2(){
  document.getElementById('volta').value = "Rio de Janeiro - Santos Dumont - SDU"
  document.getElementById('pop').style.display = 'none'
}
function b3(){
  document.getElementById('volta').value = "São Paulo - Campinas - VCP"
  document.getElementById('pop').style.display = 'none'
}
function b4(){
  document.getElementById('pop').style.display = 'flex'
}
function b5(){
  document.getElementById('volta').value = "Recife - REC"
  document.getElementById('pop').style.display = 'none'
}
function b6(){
  document.getElementById('volta').value = "Rio Grande - RIG"
  document.getElementById('pop').style.display = 'none'
}
function b7(){
  document.getElementById('volta').value = "Porto Alegre - POA"
  document.getElementById('pop').style.display = 'none'
}
function click(){
  var pontos = document.getElementById("pontos")
  var mais = document.getElementById("mais")
  var button = document.getElementById('leiamais')
  
  if(mais.style.display === none ){
    mais.style.display = 'block'
   
  }}
  
  
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
    e.target.dataset.state === "more" ?  "Mostrar Mais" : "Mostrar Menos"
    
    overflow.setAttribute (
      "data-state",
      e.target.dataset.state === "more" ? "visible" : "hidden"
    );
  }



let hora = 24
let segundos = 59
let minutos = 59

function horas(){
 segundos = segundos

 if((minutos > 0) || (segundos > 0) || (hora > 0)){
   if(segundos == 0){
     segundos = 59
     minutos = minutos - 1
   }else{
     segundos = segundos - 1
   }
    if (minutos == 0){
     minutos = 59
     hora = hora - 1
   }

   if(segundos < 10){
segundos = '0' + segundos;

} 


 let minutosfm = minutos.toString().padStart(2, '0');
 document.querySelector('.segundos').innerHTML = segundos
 document.querySelector('.minutos').innerHTML = minutosfm
 document.querySelector('.horas').innerHTML = hora
 }
}
setInterval(horas,1000,1); 



const bntt = document.querySelector('.chh')

const useTheme = () => {
  const temas = {
    dark: "dark",
    light: "light" // Corrigi a ortografia de "ligth" para "light"
  }

  // Movendo a obtenção do valor "data" para fora da função trocarTema
  

  const trocarTema = () => {
    localStorage.setItem("tema", data === temas.light ? temas.dark : temas.light);
  }

  return {
    data,
    trocarTema,
  }
}

// Restante do seu código...
const data = localStorage.getItem("tema");

const links = [
  '#a0',
  '#a1',
  '#a2',
  '#a3',
  '#a4',
  '#a5',
  '#a6'
]
const tema = document.querySelector('.chh')
     tema.onclick = function (){

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








var c1 = 0;
var d1 = 1;
var adulto = document.getElementById('adultos')
var a2 = document.getElementById('a1')
function mais() {
  document.getElementById('adultos').innerHTML = ++d1;
  document.getElementById('a1').innerHTML = d1 + " Adulto(s)";
  
 if(d1 >= 10){
  document.getElementById('adultos').innerHTML = 1;
  document.getElementById('a1').innerHTML = 1 + " Adulto(s)";
  d1 = 1
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
  document.getElementById('a1').innerHTML = d1 + " Adulto(s)";
  var atual = document.getElementById("adultos").value;
  if(d1 < 1) { //evita números negativos
    d1 = 1
    document.getElementById('adultos').innerHTML = 1;
  }
  
}


var crianca = document.getElementById('criancas')

function mais1() {
  document.getElementById('criancas').innerHTML = ++c1;
  document.getElementById('c1').innerHTML = c1 + " Criança(s)";
  
 if(c1 >= 10){
  
  document.getElementById('c1').innerHTML = " ";
  document.getElementById('criancas').innerHTML = 0;
  c1 = 0
  document.getElementById('e1').style.display = 'none'
  alert("O número máximo de passageiros deve ser de 9 pessoas.")
 }
 if(c1 >= 1){
  document.getElementById('c1').style.display = 'block'
  document.getElementById('e1').style.display = 'block'
 }
 var soma = d1 + c1
 if( soma >=10){

   d1 = 0
   c2 = 0
   document.getElementById('c1').innerHTML = " ";
   document.getElementById('a1').innerHTML = 1 + " Adulto(s)";
   document.getElementById('adultos').innerHTML = 1;
   document.getElementById('criancas').innerHTML = 0;
   document.getElementById('e1').style.display = 'none'
   alert('O número máximo de passageiros deve ser de 9 pessoas.')
}
}
function menos1() {
  document.getElementById('criancas').innerHTML = --c1;
  document.getElementById('c1').innerHTML =  c1 + " Criança(s)";
  
  if(c1 < 0) { //evita números negativos
    c1 = 0
    document.getElementById('criancas').innerHTML = 0;
    document.getElementById('c1').innerHTML =  0;
  }
  if(c1 <= 0){
    
    document.getElementById('c1').style.display = 'none'
    document.getElementById('e1').style.display = 'none'
  }
}

document.querySelector('#data').onclick = function (){
document.querySelector('input[type="date"]').style.backgroundColor = 'white'
}








 
document.getElementById('meuinput').onclick = function(){
    inputi.style.backgroundColor = '#bab490';
}

const novoinpute = document.getElementById('meuinpu');
document.addEventListener('click', function (event){
    if(event.target !== novoinpute){
        novoinpute.style.backgroundColor = 'white';
    }
});
document.getElementById('meuinpu').onclick = function(){
    novoinpute.style.backgroundColor = '#bab490';
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
const inputi = document.getElementById('meuinput');

// Adiciona um evento de clique ao documento
document.addEventListener('click', function (event) {
  // Verifica se o alvo do clique não é o input
  if (event.target !== inputi) {
    // Muda a cor de fundo do input
    inputi.style.backgroundColor = 'white'; // Você pode escolher qualquer cor desejada
  }
});