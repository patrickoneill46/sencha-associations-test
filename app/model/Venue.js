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
                autoLoad: true
            }
        ]
    }
});