Ext.define('MyApp.model.Venue', {
    extend: 'Ext.data.Model',
    require: [
        'MyApp.model.Image'
    ],    
    config: {
        proxy: {
            type:   'ajax',
            url:    'venues.json',
            reader: 'json'
        },
        fields: [
            {name: 'id',   type: 'int'},
            {name: 'name', type: 'string'}
        ],
        hasMany: [
            {
                associatedModel:'MyApp.model.Image',
                storeName:'ImagesStore',
                // foreign_key: 'venue_id',  // default value should just work
                //associationKey:            // only used for reading from nested JSON?
                autoLoad: true               // seems to have no effect
            }
        ]
    }
});