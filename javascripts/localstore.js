var localstore = {
    //Is localStoreage enabled on this browser
    isEnabled: function(){
        return (localStorage) ? true : false;
    },

    //Returns the localStorage object
    store: localStorage
};
