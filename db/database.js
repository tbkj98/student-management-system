const {MongoClient} = require('mongodb');

module.exports.find = (user, callback) => {
    MongoClient.connect(`mongodb://localhost:27017/Students`, (err, db) => {
        if (err) {
            return console.log('Unable to connect to database');
        }

        db.collection('info').find({email: user.email, password: user.password})
                                .toArray()
                                .then((result) => {
                                    callback(result);
                                }, (err) => {
                                    callback('error');
                                });
        });
};