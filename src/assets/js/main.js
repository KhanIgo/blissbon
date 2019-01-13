'use strict'
jQuery(function($){
    let $body = $('body');
 
    $body.on('click', '.js-close-modal', function(){
        $(this).closest('.ui-modal').removeClass('active');
    });
    
    $body.on('click', '.js-show-modal', function(e){
        e.preventDefault();
        let id = '#' + $(this).data('modal');
        let $modal = $(id);
        if($modal.length) $modal.addClass('active');
    });
});