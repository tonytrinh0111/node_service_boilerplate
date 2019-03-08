'use strict';
const {
    version,
    description
} = require('../../package.json')

module.exports = {
    getStatus: getStatus
};

function getStatus(req, res) {
    var myApp = [];
    var lastcommitsha = process.env.LAST_COMMIT_SHA;
    var obj = {
        version,
        description,
        lastcommitsha
    };
    myApp.push(obj);
    res.json({
        myapplication: myApp
    })
}