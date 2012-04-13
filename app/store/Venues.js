Ext.define('MyApp.store.Venues', {
    extend: 'Ext.data.Store', 
    config: {
        autoLoad: true,
        model: 'MyApp.model.Venue',
        storeId: 'VenuesStore',
        listeners : {
            load : function(store) {
                console.log("Loaded VenuesStore");
                console.log(store.getAt(0).images().data);
                console.log(store.getAt(1).images().data);
            }
        }
    }
});