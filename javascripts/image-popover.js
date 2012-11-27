var image_popover = {

    popover: function( element ){
        if( element.tagName != 'IMG' ){
            console.log('element is not an img');
            return 0;
        }
        var image = element.src;
        if( !document.getElementById( 'image-popover' ) ){
            this.create( image );
        }
    },

    create: function( source ){
        var overlay = document.createElement('div');
        overlay.setAttribute('id', 'image-popover');
        overlay.setAttribute('onClick', 'image_popover.destory()');

        var img_frame = document.createElement('div');
        img_frame.setAttribute('id', 'image-frame');
        img_frame.setAttribute('class', 'well');
        overlay.appendChild( img_frame );

        var img = document.createElement('img');
        img.setAttribute('id', '__image__');
        img.setAttribute('src', source);
        img_frame.appendChild( img );

        document.body.appendChild(overlay);
    },

    destory: function(){
        document.body.removeChild( document.getElementById('image-popover') );
    }
};
