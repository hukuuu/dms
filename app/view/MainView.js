Ext.define('MyApp.view.MainView', {
    extend: 'Ext.Container',
    alias: 'widget.mainView',
       config: {
        // cls: 'app-page',
        layout: 'fit',
        items: [
            {
            	xtype: 'titlebar',
            	docked: 'top',
            	title:'DMS - Mobile',
            	items: [
            		{
            			xtype: 'button',
            			text: 'back',
            			action: 'backButton',
            			hidden: true
            		}
            	]
            },
            {
            	xtype: 'categoriesTabPanel'
            }
        ]
    },
});