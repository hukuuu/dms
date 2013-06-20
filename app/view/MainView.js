Ext.define('MyApp.view.MainView', {
    extend: 'Ext.Container',
    requires: 'Ext.TitleBar',
    alias: 'widget.mainView',
       config: {
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
                        cls: 'button-back',
                        width: '50px',
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