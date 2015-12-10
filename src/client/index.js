import $ from 'jquery'

$(function(){

    var template = '<article>' +
            '<img src=":img:" alt=":imgAlt:">' +
        '<div>' +
                '<h1>:name:</h1>' +
                '<p>:description:</p>' +
            '</div>' +
        '</article>'
    $.ajax({
        url: 'http://api.tvmaze.com/shows',
        success: function(shows, textStatus, xhr){
            var $tvShowsContainter = $('#app-container').find('#juego')
            $tvShowsContainter.find('.loader').remove()
            shows.forEach(function(show){
                var article = template
                    .replace(':name:', show.name)
                    .replace(':img:', show.image.medium)
                    .replace(':description:', show.summary)
                    .replace(':imgAlt:', show.name + ' logo')
                
                    $tvShowsContainter.append($(article))
            })
        }
    })
    
})

    