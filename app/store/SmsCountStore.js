Ext.define('MyApp.store.SmsCountStore', {
    extend: 'Ext.data.Store',
    requires: 'Ext.data.proxy.LocalStorage',

    config: {
        storeId: 'SmsCountStore',
        fields: [{
                name: 'key',
                type: 'string'
            }, {
                name: 'for',
                type: 'number'
            }, {
                name: 'count',
                type: 'number',
                defaultValue: 0
            }
        ],
        proxy: {
            type: 'localstorage',
            id: 'dmsSmsCount'
        }
    }
});