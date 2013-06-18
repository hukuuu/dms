/*
 * File: app/view/PeopleContainer.js
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

Ext.define('MyApp.view.PeopleContainer', {
    extend: 'Ext.Container',
    alias: 'widget.peopleContainer',

    requires: [
        'Ext.dataview.List',
        'Ext.plugin.ListPaging'
    ],

    config: {
        cls: 'app-page',
        layout: {
            type: 'fit'
        },
        items: [
            {
                xtype: 'list',
                cls: 'campaign-list',
                itemTpl: [
                    '<div class="campaign-list-container">',
                        '<div class="campain-list-img"><img src="{smallImageUrl}" alt="no image"></div>',
                        '<div class="campain-list-title">',
                            '<small>{title}</small>',
                            '<strong>{text}</strong>',
                        '</div>',
                        '<span class="badge">{badge}</span>',
                    '</div>'
                ],
                scrollToTopOnRefresh: false,
                store: 'PeopleStore',
                plugins: [
                    {
                        autoPaging: true,
                        type: 'listpaging'
                    }
                ]
            }
        ]
    }

});