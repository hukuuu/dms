/*
 * File: app.js
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

//@require @packageOverrides
Ext.Loader.setConfig({

});

Ext.application({
    models: [
        'BaseModel'
    ],
    stores: [
        'PeopleStore',
        'OthersStore',
        'OrganizationsStore'
    ],
    views: [
        'CategoriesTabPanel',
        'PeopleContainer',
        'OrganizationsContainer',
        'OthersContainer',
        'HistoryContainer',
        'MainView'
    ],
    controllers: [
        'MainController'
    ],
    name: 'MyApp',

    launch: function() {
        //CORS PROBLEM SOLVED !!!
        Ext.Ajax.setUseDefaultXhrHeader(false);

        Ext.fly('splash-page').destroy();

        Ext.create('MyApp.view.MainView', {fullscreen: true});
        
     // set up a listener to handle the back button for Android 
        if (Ext.os.is('Android')) {
          document.addEventListener("backbutton", Ext.bind(onBackKeyDown, this), false);  // add back button listener
 
          function onBackKeyDown(e) {
              e.preventDefault();
 
              Ext.Msg.alert('Title', 'The quick brown fox jumped over the lazy dog.', Ext.emptyFn);
          }
       }
    }

});
