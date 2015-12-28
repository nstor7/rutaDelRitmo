import $ from 'jquery'
import page from 'page'

$(function(){
let i = 0
const imagen = ["url('imagenes/fondo rojo 1.jpg')", "url('imagenes/fondo rojo 3.jpg')", "url('imagenes/fondo rojo 4.jpg')"]

let mapaVeranillo = `<article id="mapaVeranillo" class="mapas"> 
           <img src="imagenes/mapa veranillo.jpg" alt="Veranillo">
            <a class="punto" id="ptFlamboyan"></a>
       </article>`
var header = $('#header')
var ptBarrio = $('#ptBarrio')
var juego = $('#juego')

function cambiarFondo(){
    if(i < 2){
       header.css('background-image', imagen[i])
       i++
    } else {
        header.css('background-image', imagen[2])
        i = 0
    }
}
cambiarFondo()
setInterval(cambiarFondo, 5000)

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

// Botones del Mapa
    //Hover

ptBarrio.hover(
  function() {
    $('#mapaPanama').append( $('<img src="imagenes/ventana.png" alt="Barrio de Soneros" class="ventana">'))}, function(){
        $('#mapaPanama').find('.ventana').remove() }
)
//    var ptFlamboyan = $('#ptFlamboyan')

//    ptFlamboyan.click(alert('hola'))
    //Click
page('/barrio', function(ctx, next){
     juego.find('#mapaPanama').remove()
     juego.append(mapaVeranillo)
     next()
}, function(ctx, next){
    juego.css('background-image', 'url("imagenes/fondo pergamino.jpg")')
})
page()
})
function cambiarMapa(ctx, next){
        juego.find('#mapaPanama').remove()
        juego.append(mapaVeranillo)
    }


    