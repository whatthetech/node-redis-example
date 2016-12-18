const Redis = require('ioredis');


let redis;

module.exports = {

connect : function () {
    redis = new Redis();
},

/**
 * Updates cache with employee details
 * @param {String} employeeid
 * @param {String} firstname
 * @param {String} lastname
 * @param {String} designation
 * @param {callback} callback
 */
insert : function (employeeid, firstname, lastname, designation, callback) {
    //Using hmset we can insert multiple key field-value pairs.
    //The first argument is always the key.
    redis.hmset("employeedetails", 
            { 
                "ID" : employeeid,
                "firstname" : firstname, 
                "lastname" : lastname,
                "designation" : designation
            }, function (err, response) {
                if (err) callback(err, null);
                else callback(null, response);
            });
},

/**
 * Updates cache with employee details
 * @param {String} key
 * @param {callback} callback
 */
getAllCache : function (key, callback) {
    /* hgetall will return the entire cache for the key specified. 
     * If you want to get a specific field refer function getValueForField
     */
    redis.hgetall(key, function (err, response) {
        if (err) callback(err, null);
        else callback (null, response);
    });
},

/**
 * Updates cache with employee details
 * @param {String} key
 * @param {String} field
 * @param {callback} callback
 */
getValueForField : function (key, field, callback) {
    // hget will return the value associated to the specified field. 
    redis.hget(key, field, function (err, response) {
        if (err) callback(err, null);
        else callback (null, response);
    });
}
}