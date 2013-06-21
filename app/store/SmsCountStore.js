Ext.define('MyApp.store.SmsCountStore', {
    extend: 'Ext.data.Store',
    requires: ['Ext.data.proxy.LocalStorage'],

    config: {
        storeId: 'SmsCountStore',
        model: 'MyApp.model.SmsCountModel',
        proxy: {
            type: 'localstorage',
            id: 'dmsSmsCount'
        }
    },

    getCountForDate: function(date) {
        var counter = 0;

        Ext.each(this.data.all, function(rec, index) {
            if (rec.get('key') === date.toLocaleDateString()) {
                counter += rec.get('count');
            }
        });

        return counter;
    },
    getCount: function(days) {
        var counter = 0;
        if (days) {
            //calculate for "days" days
            return this.getLastDays(days)
                .map(function(obj) {
                    return obj.count;
                })
                .reduce(function(first, i) {
                    return first + i;
                }, 0);
        } else {
            //calculate all
            Ext.each(this.data.all, function(rec, index) {
                counter += rec.get('count');
            });
        }

        return counter;

    },
    getLastDays: function(days) {
        var result = [],
            date,
            key,
            count;

        for( var i = 0; i < days; i++) {            
            date = new Date();
            date.setDate(date.getDate() - i);

            count = this.getCountForDate(date);
            result.unshift({
                date: date,
                count: count
            });
        }

        return result;
    }

});