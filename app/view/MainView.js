Ext.define('MyApp.view.MainView', {
    extend: 'Ext.Container',
    requires: 'Ext.TitleBar',
    alias: 'widget.mainView',
       config: {
        // cls: 'app-page',
        layout: 'fit',
        items: [
            {
            	xtype: 'titlebar',
            	docked: 'top',
            	title:'DMS - Mobile',
                cls: 'app-titlebar',
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