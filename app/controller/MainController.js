/*
 * File: app/controller/MainController.js
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

Ext.define('MyApp.controller.MainController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            peopleList: 'peopleContainer list',
            tabPanel: 'categoriesTabPanel',
            detailsContainer: 'detailsContainer',
            sendSmsButton: 'detailsContainer button[action=sendSms]',
            organizationsList: 'organizationsContainer list',
            othersList: 'othersContainer list',
            backButton: 'mainView titlebar button[action=backButton]'
        },

        control: {
            "peopleList": {
                itemtap: 'onPeopleListItemTap'
            },
            "organizationsList": {
                itemtap: 'onOrganizationsListItemTap'
            },
            "othersList": {
                itemtap: 'onOthersListItemTap'
            },
            "sendSmsButton": {
                tap: 'onSendSmsButtonTap'
            },
            "backButton": {
                tap: 'onBackButtonTap'
            }
        }
    },

    onPeopleListItemTap: function(thisObj, index, target, record, e, eOpts) {

        this.navigateToDetails(this.indexes.peopleList, record);
    },

    onOrganizationsListItemTap: function(thisObj, index, target, record, e, eOpts) {

        this.navigateToDetails(this.indexes.organizationsList, record);

    },

    onOthersListItemTap: function(thisObj, index, target, record, e, eOpts) {
        this.navigateToDetails(this.indexes.othersList, record);
    },

    onSendSmsButtonTap: function(button, e, eOpts) {

        var me = this,
            record = me.activeRecord,
            key = '',
            date = new Date(),
            recordId = record.get('id');

        me.incrementSmsCounter(recordId, new Date(), me.stores[me.comingFrom]);

        window.location = 'sms:' + '17777?body=' + record.get('text');

    },
    onBackButtonTap: function (argument) {
        var me = this;
        me.navigateBack();
    },

    launch: function() {

        var me = this;

        me.indexes = {
            peopleList: 0,
            organizationsList: 1,
            othersList: 2,
            details: 3,
            history: 4

        };
        me.stores = [
            Ext.getStore('PeopleStore'),
            Ext.getStore('OrganizationsStore'),
            Ext.getStore('OthersStore')
        ];
        me.counterStore = Ext.getStore('SmsCountStore');
        me.counterStore.load();
        me.initializeStores();

        me.getDetailsContainer().element.on({
            swipe: function(e) {
                if (e.direction == 'right') {
                    me.navigateBack();
                }
            }
        });
    },

    incrementSmsCounter: function(recordId, date, store) {
        var me = this,
            model,
            visual;

        visual = store.findRecord('id',recordId);
        visual.set('badge', visual.get('badge') + 1);


        me.counterStore.load();
        model = me.counterStore.queryBy(function(record, index){
            return record.get('for') == recordId && record.get('key') == date.toLocaleDateString();
        }).getAt(0);
        if(model){
            model.set('count',model.get('count') + 1);
        }else {
            me.counterStore.add({key: date.toLocaleDateString(), for: recordId, count: 1});
        }
        me.counterStore.sync();

    },

    initializeStores: function () {
        var me = this,
            badge;
            
        Ext.each(me.stores, function(store) {
            // for every store on load do :
            store.on('load', function(st, records) {
                //determine the badge for the record
                Ext.each(records, function(rec) {

                    badge = 0;
                    Ext.each(me.counterStore.getData().all, function (model, index) {
                        if(model.get('for') == rec.get('id')) {
                            badge += model.get('count');
                        }
                    });
                    //set badge
                    rec.set('badge',badge);

                })
            })
            store.load();
        });
    },

    navigateBack: function () {
        var me = this;
        me.getTabPanel().setActiveItem(me.comingFrom);
        me.getBackButton().hide();
    },  

    navigateToDetails: function(comingFrom, record) {
        var me = this,
            tabPanel = this.getTabPanel();

        // refresh details with the selected record
        me.refreshDetailsContainer(record);

        // save the last location for later return with swipe
        me.comingFrom = comingFrom;

        //show the "back" button
        me.getBackButton().show();

        // navigate to the details view
        tabPanel.setActiveItem(me.indexes.details);
        // cache the selected record
        me.activeRecord = record;
    },

    refreshDetailsContainer: function(record) {
        var me = this;

        me
            .getDetailsContainer()
            .setHtml(me.getDetailsContainer().template.apply(record.getData()));
    }

});