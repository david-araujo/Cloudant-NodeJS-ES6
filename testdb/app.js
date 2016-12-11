/** @name: app.js @author: Thiago Lima @description: Testing Cloudant connection */

/** @description: database require */

const db = require('../db/db.js');

/** @name: getDocuments @param: resolve, reject @description: query documents */

let getDocuments = new Promise((resolve, reject) => {

    let query_document = {

        "selector": {
            "_id": {
                "$gt": 0
            }
        },
        "fields": [
            "_id",
            "crazy"
        ],
        "sort": [
            {
                "_id": "asc"
            }
        ]
    };

    try {

        db.find(query_document, (err, data) => { resolve(data); });

    } catch (err) {

        console.log('An error occured on getting data', err);

    }

});

getDocuments.then((res) => console.log('Data was successfully got: ', res))
    .then(null, (err) => console.log('An error ocurred on resolving', err));

/** @name: getAllDocuments @param: data, position @description: query documents */

try {

    db.list((err, body) => {

        body.rows.forEach((data, position) => {

            Promise.resolve('Array Position: ' + position + ' Data Object ' + data)
                .then((res) => console.log('Data was successfully got: ', res))
                .then(null, (err) => console.log('An error ocurred on resolving', err));

        });

    });

} catch (err) {

    console.log('An error occured on getting data', err);

}

/** @name: destroyOne @param: resolve, reject @description: query documents */

let destroyOne = new Promise((resolve, reject) => {

    try {

        let query_document = {

            _id: 'test2',
            _rev: '1-9e8b28852f9791fa8245e29fe238258a'

        };

        db.destroy(query_document._id, query_document._rev, (err, body) => { resolve(body); });

    } catch (err) {

        console.log('An error occured on deleting data', err);

    }

});

destroyOne.then((res) => console.log('Data was successfully deleted: ', res))
    .then(null, (err) => console.log('An error ocurred on resolving', err));

/** @name: insertOne @param: resolve, reject @description: query documents */

let insertOne = new Promise((resolve, reject) => {


    db.insert({ name: 'Caio', email: 'caio@email.com' }, 'user4', (err, body) => {

        try {

            resolve(body);

        } catch (err) {

            console.log('impossible to write a new collection', err);

        }

    });

});

insertOne.then((res) => console.log('Data was successfully inserted: ', res))
    .then(null, (err) => console.log('An error occured on resolving'));

