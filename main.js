
document.querySelector("#inject-html button").addEventListener('click',function(){
  // TASK #1
  var answerBoxEl = document.querySelector('#inject-html .answer-box')
  answerBoxEl.innerHTML = "<h2>Empezar por que si, y acabar no se cuando.</h2>"
})

//############################# 2 ##############################################

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var answerPTagWithValue = document.querySelector('#compoundInvestment')

 answerPTagWithValue.innerHTML = answerPTagWithValue.innerHTML * 2
})

//############################# 3 ##############################################

document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3
  var answerChangeStyle = document.querySelector('#circle-bw')
  var contar = answerChangeStyle.innerHTML ++

  if(contar % 2 === 0) {
   answerChangeStyle.style.background = 'black'
 }else
   answerChangeStyle.style.background = 'white'
})

//############################# 4 ##############################################

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4}
  var answerChangeStyle = document.querySelector('#circle-bw')
  var contar = answerChangeStyle.innerHTML ++
  var inflarCirculo = document.querySelector('.circle-red')

  if(contar === 0 || contar === 4){
        inflarCirculo.style.height = '80px'
        inflarCirculo.style.width = '80px'
  }else if(contar === 1 || contar === 5) {
    inflarCirculo.style.height = '160px'
    inflarCirculo.style.width = '160px'
  }else if(contar === 2 || contar === 6) {
  inflarCirculo.style.height = '320px'
  inflarCirculo.style.width = '320px'
} else if(contar === 3 || contar === 7){
  inflarCirculo.style.height = '40px'
  inflarCirculo.style.width = '40px'
}

})

//############################# 5 ##############################################

document.querySelector("#remove button").addEventListener('click',function(){

  var listaInactivos = document.querySelectorAll('.inactive')
  // para pasar de NodeList a Array, puedo ocupar alguna de las siguientes opciones
  // var arrayLista = [...Nodelist] ---> 1.-
  // var arrayLista = Array.apply(null,lista) ---> 2.-
  var arrayInactivos = Array.apply(null,listaInactivos)
console.log(arrayInactivos);
      for(var i = 0; i < arrayInactivos.length;i++){

        arrayInactivos[i].style.display = 'none'

      }
})

//############################# 6 ##############################################

document.querySelector("#reverse-squares button").addEventListener('click',function(event){
  // TASK #6
  var cuadrosNormal = document.querySelector('.cajas')
  // var cuadrosReversa = Array.apply(null,cuadrosNormal)

  cuadrosNormal.classList.toggle('reversa')
  })

//############################# 7 ##############################################

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7

  var tareasAcceso = Array.prototype.slice.call(document.querySelectorAll("#tasks li"))
  var cadenaReversa = ''

  for(var i = 0;i < tareasAcceso.length; i++) {

    cadenaReversa = tareasAcceso[i].textContent
    tareasAcceso[i].textContent = cadenaReversa.split('').reverse().join('')

    }
})

//############################# 8 ##############################################

document.querySelector("#cycle-image button").addEventListener('click',function(){
   //TASK #8
// var pasarImagenes = document.querySelector("#city-img")
//    console.log(pasarImagenes);
//    var contar = pasarImagenes.innerHTML ++
//
//    if(contar < 20) {
//      pasarImagenes.value = "<img id= "city-img" class="exercise-item" src="./images/city-photo-2.jpg"> "
//    }else if(contar < 20){
//     //  pasarImagenes.textContent = "<img id="city-img" class="exercise-item" src="./images/city-photo-3.jpg">"
//    }
})
