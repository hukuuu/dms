/*
 * File: app/store/PeopleStore.js
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

Ext.define('MyApp.store.PeopleStore', {
    extend: 'Ext.data.Store',

    requires: [
        'MyApp.model.PersonModel'
    ],

    config: {
        autoLoad: true,
        data: '/*\r\n\r\n\r\n\r\n[\r\n    {\r\n        "title": "Да помогнем на Марин - DMS MARIN",\r\n        "description": "Марин Маринов от Видин страда от тежкото онкологично заболяване „Мултиформен глиобластом” – мозъчен тумор. Претърпял е 2 операции в България, но туморът не може да бъде отстранен напълно, затова Марин отива на консултация в Анадолу Медикъл Център. Там неврохирурзите потвърждават, че могат да отстранят изцяло образуванието и след това да приложат едновременно радио и химиотерапия. Офертата за цялостно лечение е на стойност 52 800 евро.",\r\n        "date": "11 Юни 2013 г.",\r\n        "sum": "52 800 евро.",\r\n        "text": "DMS MARIN",\r\n        "id": "375",\r\n        "imageUrl": "http://dmsbg.com/files/projects_file1_1370936938.jpg"\r\n    },\r\n    {\r\n        "title": "Да помогнем на Иванка - DMS IVANKA",\r\n        "description": "През 2011 год. на Иванка Мустафова от Пловдив е поставена диагноза „Малигнен меланом”. До момента са й проведени всички възможни терапии, но заболяването прогресира, затова лекарите препоръчват лечение с медикамента Зелбораф, което НЗОК не заплаща. Цената за 1 седмица е 5100 лв. В зависимост от резултатите лечението може да продължи и повече от 6 месеца. Така общата необходима сума е около 120 000 лева.",\r\n        "date": "04 Юни 2013 г.",\r\n        "sum": "120 000 лева.",\r\n        "text": "DMS IVANKA",\r\n        "id": "373",\r\n        "imageUrl": "http://dmsbg.com/files/projects_file1_1370307157.jpg"\r\n    },\r\n    {\r\n        "title": "Да помогнем на Катя - DMS KATYA",\r\n        "description": "Преди 5 години на Катя Спасова от Пловдив й е открит мозъчен тумор – понтоцеребеларен менингиом. Оперирана е и в следващите години се чувства добре, но през април тази година се установява, че туморът е рецидивирал. Неврохирурзите, с които се е консултирала Катя, препоръчват лечение с гама нож. Катя изпраща документите си в клиника Аджъбадем и получава оферта за радиохирургична операция – 7000 евро. На 12 април Катя подава заявление в Комисия за лечение в чужбина. До момента няма отговор на молбата й.",\r\n        "date": "30 Май 2013 г.",\r\n        "sum": "7000 евро",\r\n        "text": "DMS KATYA",\r\n        "id": "371",\r\n        "imageUrl": "http://dmsbg.com/files/projects_file1_1369864936.jpg"\r\n    },\r\n    {\r\n        "title": "Да помогнем на Светлана - DMS SVETLANA",\r\n        "description": "Светлана Килявкова от Смолян от 4 години се лекува от остра миеломоноцитна левкемия. През октомври 2012, на момичето е открит тумор в мозъка и Светлана заминава за Анадолу медикъл център, където туморът е премахнат с кибер нож. Междувременно обаче Светлана получава рецидив на левкемията и това налага нова химиотерапия, а след постигане на ремисия - костно-мозъчна трансплантация. Офертата е за 145 000 евро, като в нея не са включени разходите по намиране и получаване на донорски костен мозък. До момента чрез кампания Светлана е набрала около 250 000 лв. Не достигат общо 80 000 лева - 40 000 по оферта и може би още толкова за разходите за донора.",\r\n        "date": "22 Май 2013 г.",\r\n        "sum": "80 000 лева",\r\n        "text": "DMS SVETLANA",\r\n        "id": "366",\r\n        "imageUrl": "http://dmsbg.com/files/projects_file1_1369212192.jpg"\r\n    },\r\n    {\r\n        "title": "Да помогнем на Румяна - DMS RUMI",\r\n        "description": "Румяна Александрова Кирилова от гр. Етрополе е с хронична бъбречна недостатъчност и е на хемодиализно лечение от 06.04.2011 година. За съжаление състоянието й се влошава и се нуждае от спешна трансплантация на бъбрек. Румяна има покана от Medicana Healthcare Group, клиника в Турция, но сумата за лечението е непосилна за нея и семейството й. Нужни са 25 000 евро, за да може Румяна да замине и да се лекува.",\r\n        "date": "21 Май 2013 г.",\r\n        "sum": "25 000 е вро",\r\n        "text": "DMS RUMI",\r\n        "id": "364",\r\n        "imageUrl": "http://dmsbg.com/files/projects_file1_1369124260.jpg"\r\n    },\r\n    {\r\n        "title": "Да помогнем на Митко - DMS MITKO",\r\n        "description": "Димитър Енев от Стара Загора е тризначе. Когато е на около 2 години, родителите забелязват, че има проблем със зрението. Оказва се, че Митко има много висок диоптър далекогледство – 11.5, астигматизъм и амблиопия (мързеливо око). От 2011 година родителите започват да водят детето в клиника „Еликсир” в Нови Сад, където му провеждат електро, магнитни и фотостимулации. Лечението се провежда през 3-4 месеца по 10 дни. Всеки курс е 800 - 850 евро. Досега родителите са успявали да набавят средствата, но вече не могат, и разчитат на помощта на дарители.",\r\n        "date": "14 Май 2013 г.",\r\n        "sum": "800 - 850 евро",\r\n        "text": "DMS MITKO",\r\n        "id": "363",\r\n        "imageUrl": "http://dmsbg.com/files/projects_file1_1368521918.jpg"\r\n    },\r\n    {\r\n        "title": "Да помогнем на Милена - DMS MILENA",\r\n        "description": "Преди 2 години Милена Янева е диагностицирана погрешно и е подложена на химиотерапия за гранулозоклетъчен тумор. Едва след като става ясно, че няма никакъв ефект от лечението, е поставена правилната диагноза - малигнен меланом. Милена е една много позитивна млада майка, която е готова на всичко за да живее и отгледа 5-годишния си син. Единствената възможност за лечение в момента е новото лекарство Зелбораф, което НЗОК не заплаща. Лечението със Зелбораф струва 5 155 лева на седмица и трябва да продължи между 3 и 6 месеца. Първоначалната необходима сума е около 60 000 лева.",\r\n        "date": "09 Май 2013 г.",\r\n        "sum": "60 000 лева",\r\n        "text": "DMS MILENA",\r\n        "id": "362",\r\n        "imageUrl": "http://dmsbg.com/files/projects_file1_1368076453.jpg"\r\n    }\r\n]\r\n\r\n\r\n\r\n\r\n\r\n*/',
        model: 'MyApp.model.PersonModel',
        storeId: 'PeopleStore',
        proxy: {
            type: 'ajax',
            url: '/dmsapi/campaign.json?&type=0',
            reader: {
                type: 'json'
            }
        }
    }
});