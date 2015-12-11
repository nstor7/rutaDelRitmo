import $ from 'jquery'

$(function(){
var header = $('header')
var i = 0
var imagen = ["url('imagenes/fondo rojo 1.png')", "url('imagenes/fondo rojo 3.png')", "url('imagenes/fondo rojo 4.png')"]

var cambiarFondo = function(){
    if(i < 2){
       header.css('background-image', imagen[i])
       i++
    } else {
        header.css('background-image', imagen[2])
        i = 0
    }
}
cambiarFondo()
setInterval(cambiarFondo, 4000)

})

    