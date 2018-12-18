'use strict'
jQuery(function($){
    
    let $body = $('body');
    
    $body.on('click', '.js-switch-view', function(e){
        e.preventDefault();
        let $this = $(this);
        let $siblings = $this.siblings('.js-switch-view');
        $this.addClass('active');
        $siblings.removeClass('active');
        
        let $pms = $('.pm');
        if($this.is('.view-grid')){
            $pms.addClass('grid-view').removeClass('list-view');
        }
        else if($this.is('.view-list')){
            $pms.addClass('list-view').removeClass('grid-view');
        }
        
    });
    
    
    
});