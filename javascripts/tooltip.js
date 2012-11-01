var tooltip = {
    show: function( a_element, a_title, a_content, a_placement ){

        a_placement = a_placement || 'bottom';

        a_element.popover({title: a_title, content: a_content, placement: a_placement});
        a_element.popover('show');

        $(document).click(function(e) {
            a_element.popover('hide')
        });
    }
};
