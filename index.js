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
var inp = document.querySelector('#kkk');
document.querySelector('#kkk').onclick = function (){
  if (inp.checked) {
    document.querySelector('.divv').style.backgroundColor = 'black'
  }else {
    document.querySelector('.divv').style.backgroundColor = 'white'
  }
  
}