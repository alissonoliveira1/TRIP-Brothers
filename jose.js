const input = document.getElementById('meuinput');

// Adiciona um evento de clique ao documento
document.addEventListener('click', function (event) {
  // Verifica se o alvo do clique não é o input
  if (event.target !== input) {
    // Muda a cor de fundo do input
    input.style.backgroundColor = 'white'; // Você pode escolher qualquer cor desejada
  }
});
 
document.getElementById('meuinput').onclick = function(){
    input.style.backgroundColor = '#bab490';
}

const novoinput = document.getElementById('meuinpu');
document.addEventListener('click', function (event){
    if(event.target !== novoinput){
        novoinput.style.backgroundColor = 'white';
    }
});
document.getElementById('meuinpu').onclick = function(){
    novoinput.style.backgroundColor = '#bab490';
}




