var tooltip = {
    show: function( a_element, a_title, a_content, a_placement ){

        a_placement = a_placement || 'bottom';

        a_element.popover({title: a_title, content: a_content, placement: a_placement});
        a_element.popover('show');

        $(document).click(function(e) {
            a_element.popover('hide')
        });
    },

    showOnce: function( a_element, a_title, a_content, a_placement ){
        //Only do this if localStorage is enabled
        if( localStorage ){
            var tooltipID = a_element[0].id + a_title + a_content + a_placement;
            if( !localStorage[tooltipID] ){
                tooltip.show($('#nav-tutoring'), 'Get Help in Class', "You can get help in any of your CS courses by signing up to be tutored by a member of UPE!");
                localStorage[tooltipID] = true;
            }
        }
    }
};
