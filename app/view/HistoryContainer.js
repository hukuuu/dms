/*
 * File: app/view/HistoryContainer.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.HistoryContainer', {
    extend: 'Ext.Container',
    alias: 'widget.historyContainer',
    requires : [
        'Ext.Label'
    ],

    config: {
        cls: 'app-page',
        layout: 'vbox',
        items: [
            {
                xtype: 'container',
                action: 'allSmsCount',
                flex: 1,
                tpl: [
                        '<div class="app-counter-wrapper">',
                        '<h1>SMS-и през последните тридесет дни: </h1>',
                        '<div class="app-counter">{count}</div>',
                        '</div>'
                ],
                data: {
                    count: 3
                }
            }, 
            {
                xtype: 'container',
                layout: 'vbox',
                flex: 1,
                items: [
                    {
                        xtype: 'label',
                        html: '<div class="app-counter-wrapper"><h1>Активност през последните седем дни: </h1></div>'
                    },
                    {
                        xtype: 'container',
                        action: 'chart'
                    }

                ]
            }
        ]
    },
    initialize: function() {

        var me = this,
            counter = 0,
            smsCouonterCont = me.query('container[action=allSmsCount]')[0],
            chartCont = me.query('container[action=chart]')[0],
            date = new Date(),
            lastThirtyDays = [],
            values = [],
            store = Ext.getStore('SmsCountStore'),
            xlen,
            ylen,
            r;

        me.on('show', function() {

            //populate the top panel with the count of the SMS-es since the last 30 days
            smsCouonterCont.setData({
                count: store.getCount(30)
            });

            //if they are not populated - do it, otherwise - dont
            if(r) {
                r.clear();
                r.remove();
            }
           
            var bigger = smsCouonterCont.element.getHeight();
            var smaller = chartCont.parent.query('label')[0].element.getHeight();
            r = Raphael(chartCont.element.dom, chartCont.element.getWidth(), bigger - smaller);

            xlen = chartCont.element.getWidth() - 30,
            ylen = chartCont.element.getHeight() - 30;
            console.log(chartCont.element.getWidth());
            console.log(chartCont.element.getHeight());
            console.log(xlen);
            console.log(ylen);

            var data = store.getLastDays(7),
                indexes = [],
                values = [];
            Ext.each(data, function(item) {
                indexes.push(item.date.getDate());
                values.push(item.count);
            });


            var xIndexes = [0, 1, 2, 3, 4, 5, 6],
                x = 10,
                y = 10,
                gutter = 20,
                chrt = r.linechart(x, y, xlen, ylen, xIndexes, values, 
                {
                    gutter: gutter,
                    nostroke: false,
                    axis: "0 0 0 1",
                    symbol: "circle",
                    width: 2,
                    smooth: true,
                    dash: '-',
                    colors: ['#ff9b15']
                });

            Raphael.g.axis(
                x + gutter,
                y + ylen - gutter,
                xlen - 2 * gutter, null, null,
                indexes.length - 1,
                0, indexes,
                r);
        });


    }

});