var tooltip = {
    //This function is used to show a tooltip EVERY time the page is loaded
    show: function( a_element, a_title, a_content, a_placement ){
        a_placement = a_placement || 'bottom';
        a_element.popover({title: a_title, content: a_content, placement: a_placement});
        a_element.popover('show');
        $(document).click(function(e) {
            a_element.popover('hide')
        });
    },

    //This function is used to show a tooltip the FIRST time a user visits a page
    //  it will NOT show to tooltip if the user does not have localStorage enabled
    showOnce: function( a_element, a_title, a_content, a_placement ){
        //Only do this if localStorage is enabled
        if( localStorage ){
            var tooltipID = a_element[0].id + a_title + a_content + a_placement;
            if( !localStorage[tooltipID] ){
                tooltip.show(a_element, a_title, a_content, a_placement);
                localStorage[tooltipID] = true;
                return true;
            }
        }
        return false;
    },

    //This function is used to show a tooltip every <a_milis> miliseconds a user visits a page
    //  it will NOT show to tooltip if the user does not have localStorage enabled
    showRepeat: function( a_element, a_title, a_content, a_milis, a_placement ){
        //Only do this if localStorage is enabled
        if( localStorage ){
            var week = 1000 * 60 * 60 * 24 * 7;
            a_milis = a_milis || week;
            var tooltipID = a_element[0].id + a_title + a_content + a_placement;
            var storedDate = new Date( localStorage[tooltipID] );
            var curDate = new Date();
            if( !localStorage[tooltipID] || (isNaN( storedDate.valueOf() )) || ( curDate - storedDate ) > a_milis ){ 
                tooltip.show(a_element, a_title, a_content, a_placement);
                localStorage[tooltipID] = new Date();
                return true;
            }
        }
        return false;
    }
};
