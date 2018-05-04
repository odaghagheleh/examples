'use strict';
var async = require("async");
var request = require("../../node_modules/superagent/superagent")

//module.exports = function () {
var responseJSON = {};
  // find the table.
  function firstFunction(callback) {
   // jsontmp = input;
   // jsontmp = JSON.stringify(jsontmp);
    callback();
  }

  function secondFunction(callback) {


    
    request
    .post('http://localhost:8181/fsi-credit-card-dispute-customer/api/kiebpm/runAdditionalInfoRules/credit-dispute-decisions_1.0-SNAPSHOT')
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .auth('pamAdmin', 'redhatpam1!')
    .send(

        {
            "lookup": null,
            "commands": [{
                "insert": {
                    "object": {
                        "com.fsi.creditcarddisputecase.Cardholder": {
                            "stateCode": "VA",
                            "age": 35,
                            "status": "GOLD",
                            "incidentCount": 2,
                            "balanceRatio": 0.2
                        }
                    },
                    "out-identifier": "cardholder",
                    "return-object": false,
                    "entry-point": "DEFAULT",
                    "disconnected": false
                }
            }, {
                "set-focus": {
                    "name": "additional-info"
                }
            }, {
                "fire-all-rules": {
                    "max": -1,
                    "out-identifier": "additional-info-fired"
                }
            }, {
                "get-objects": {
                    "class-object-filter": null,
                    "out-identifier": "questions"
                }
            }, {
                "set-focus": {
                    "name": "cleanup"
                }
            }, {
                "fire-all-rules": {
                    "max": -1,
                    "out-identifier": "cleanup-fired"
                }
            }]
        }

    )
    .then(function (res) {
        
        responseJSON.status = res.status;
        responseJSON.body = res.body;
        //console.log(JSON.stringify(tmp.body));
        console.log(JSON.stringify(tmp.body));
    })
    .catch(function (err) {
        var tmp = {};
        
        responseJSON.errorMessage = err.message;
        responseJSON.errorResponse = err.response;
        console.log(responseJSON);
        // return (err.message);
    });

    callback();
  }
  //REST request to url provided
  function thirdFunction(callback) {
    console.log(responseJSON);
    //return responseJSON;
    callback();
  }
  async.series([firstFunction, secondFunction, thirdFunction], function () {
    console.log("Executed all calls in series.");
  });
//};