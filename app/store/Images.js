Ext.define('MyApp.store.Images', {
    extend: 'Ext.data.Store', 
    config: {
        model: 'MyApp.model.Image',
        storeId: 'ImagesStore',
        listeners: {
            load: function(store) {
                console.log("Loaded ImagesStore");
            }
        }

    }
});