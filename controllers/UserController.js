'use strict';

var userService = require('./../services/UserService');

exports.getInfo = function (req, res) {
    userService.dbUserRetrieve(req.params.userId)
        .then(asset => {
            res.json(asset[0]);
        })
}


exports.getAll = function (req, res) {
    userService.dbUserRetrieveAll()
        .then(assets => {
            res.json(assets.filter(function (n) { return n != undefined }).map(asset => asset.data))
        });
}


exports.updateInfo = function (req, res) {
    userService.dbUserAppend(req.params.userId, req.body.user, req.body.keys)
        .then(updateduser => {
            res.json(updateduser.data);
        })

}

exports.signup = function (req, res) {
    userService.dbUserCreate(req.body).then(user => {
        res.json(user);
    })
}