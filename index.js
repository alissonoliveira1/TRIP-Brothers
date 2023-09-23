var bntt = document.querySelector('.chh')
document.querySelector('.chh').onclick = function (){
  if (bntt.checked) {
        document.querySelector('.icon-night').style.color = 'yellow'
        document.querySelector('.container').style.backgroundColor = 'black'
        document.querySelector('#a0').style.color = 'rgb(221, 221, 221)'
        document.querySelector('#a1').style.color = 'rgb(221, 221, 221)'
        document.querySelector('#a2').style.color = 'rgb(221, 221, 221)'
        document.querySelector('#a3').style.color = 'rgb(221, 221, 221)'
        document.querySelector('#a4').style.color = 'rgb(221, 221, 221)'
        document.querySelector('#a5').style.color = 'rgb(221, 221, 221)'
        document.querySelector('#a6').style.color = 'rgb(221, 221, 221)'
        document.body.style.backgroundColor = '#000A1F'
    } else {
      document.body.style.backgroundColor = 'white'
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







document.querySelector('#kari').onclick = function (){
 document.querySelector('#kari').style.backgroundColor = '#bab490'
 document.querySelector('#kar').style.backgroundColor = 'white'
}
document.querySelector('#kar').onclick = function (){
  document.querySelector('#kar').style.backgroundColor = '#bab490'
  document.querySelector('#kari').style.backgroundColor = 'white'
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



 