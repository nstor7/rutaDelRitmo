import $ from 'jquery'

$(function(){

//CAMBIO DE FOTOS EN EL HEADER
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

//BOTON DE REDES SOCIALEs 
    var compartirEstado = 1

$('#compartir').click(function(){
    if(compartirEstado === 0){
        $('#social').hide(200)
        compartirEstado = 1
    }else{
        $('#social').show(200)
        compartirEstado = 0
    }
    })
    
})

    