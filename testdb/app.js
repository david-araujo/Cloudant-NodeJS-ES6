/** @name: app.js @author: Thiago Lima @description: Testing Cloudant connection */

/** @description: database require */

const db = require('../db/db.js');

/** @name: getDocuments @param: resolve, reject @description: query documents */

let getDocuments = new Promise((resolve, reject) => {

    try {

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

        let query = body.rows.forEach((data, position) => {

            Promise.resolve('Array Position: ' + position + ' Data Object ' + data)
                .then((res) => console.log('Data was successfully got: ', res))
                .then(null, (err) => console.log('An error ocurred on resolving', err));

        });

    });

} catch (err) {

    console.log('An error occured on getting data', err);

}


/* Testing CURD operations */

/*db.destroy('test', '1-6e4cb465d49c0368ac3946506d26335d', (err, body) => {
    console.log(body);
});*/

/*db.insert({ name: 'Thiago', email: 'thigo@email.com' }, 'user1', (err, body) => {
    try {
        console.log(body);
    } catch (err) {
        console.log('impossible to write a new collection', err);
    }
});*/
