Ext.define('MyApp.model.Image', {
    extend: 'Ext.data.Model',
    config: {
        proxy: {
            type:   'ajax',
            url :   'images.json',
            reader: 'json'
        },
        fields: [
            {name: 'id',      type: 'int'},
            {name: 'caption', type: 'string'}
        ]
    }
});