Ext.define('MyApp.view.MainView', {
    extend: 'Ext.Container',
    requires: 'Ext.TitleBar',
    alias: 'widget.mainView',
       config: {
        layout: 'fit',
        items: [
            {
            	xtype: 'toolbar',
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
            		},
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        iconCls: 'search',
                        width: '50px',
                        action: 'searchButton',
                        hidden: false
                    },
                    {
                        xtype: 'button',
                        cls: 'button-facebook',
                        width: '50px',
                        text: 'Share',
                        action: 'facebookShareButton',
                        hidden: true
                    }
                    
            	]
            },
            {
            	xtype: 'categoriesTabPanel'
            }
        ]
    }
});