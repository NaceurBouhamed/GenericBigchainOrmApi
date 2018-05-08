import Orm from 'bigchaindb-orm'

const bdbOrm = new Orm(
    "http://localhost:9984/api/v1/", {
        app_id: '5e04b70c',
        app_key: 'e4362476ae5da5e742cb1f5f9f4ef0ce'
    });

const driver = require('bigchaindb-driver');

var User = require('./../models/UserModel');

//const Master = { "publicKey": "EnWU4W8QAa9A8VdLYBCFbVixg3H3yLZTTMbxLTLviBRS", "privateKey": "tWbY1Soc4yT61CaAG6WuBNhqwucX1j1ThdbganfguMz" };

var _user;

bdbOrm.define("User");

exports.dbUserRetrieve = function (id) {
    console.log('sending retrieve user by :' + id);
    return bdbOrm.User.retrieve(id)
}


exports.dbUserRetrieveAll = function (id) {
    console.log('retrieving all users');
    return bdbOrm.User.retrieve()
}



exports.dbUserCreate = function (info) {
    console.log('creating this user:' + info);
    const keys = new driver.Ed25519Keypair();
    console.log(keys);
    _user = new User(info);
    _user.publicKey = keys.publicKey;
    return bdbOrm.User.create({
        keypair: keys,
        data: _user
    })
}

exports.dbUserAppend = function (id, info, keys) {
    console.log('appending this info:' + info);
    return bdbOrm.User.retrieve(id)
        .then(asset => {
            return asset[0].append({
                toPublicKey: keys.publicKey,
                keypair: keys,
                data: infokeys.publicKey
            })
        })
}

