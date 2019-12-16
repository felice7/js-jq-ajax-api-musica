$(document).ready(function(){
    
    
    var source = $("#disco-template").html();
    var template = Handlebars.compile(source);
    
    $.ajax({
        
        'url': 'https://flynn.boolean.careers/exercises/api/array/music',
        'method':'get',
        'success':function(data) {
            
        var dischi = data.response;
        
        for (var i = 0; i < dischi.length; i++) {
             var disco = dischi[i];
             
            var img_copertina = disco.poster;
            var album = disco.title;
            var anno_uscita = disco.year;
            var artista_album = disco.author;
            var genere_album = disco.genre;
            
            
            var context = {
                copertina: img_copertina, 
                titolo: album,
                artista: artista_album,
                anno: anno_uscita,
                genere:genere_album
                 
            
            };
            
            var html = template(context);
            $('#dischi').append(html);
             
        }
            
        },
        
        'error': function() {
            alert('errore');
        }
        
        });

        $('#scelta-genere').change(function() {

            var genere_selezionato = $(this).val();
            if(genere_selezionato == ''){
                $('.card-disco').fadeIn();
                
            }else {
                $('.card-disco').each(function() {
                    var genere_disco = $(this).attr('data-genere');
    
                    if(genere_disco.toLowerCase() == genere_selezionato.toLowerCase()) {
                        $(this).fadeIn();
                        
                    } else {
                        $(this).fadeOut();
                    }

                });
                
            } 
               
        });

});
