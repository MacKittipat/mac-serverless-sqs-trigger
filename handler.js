const AWS = require('aws-sdk');

exports.trigger = async (event) => {
    console.log("Event =", JSON.stringify(event));
};
