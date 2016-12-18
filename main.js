const redis = require('./redis');

redis.connect();
redis.insert ("1234abcd", "John", "Doe", "Engineer", function (err, response) {
    if (err) console.log("Error = " + err.stack);
    else console.log("Response = " + response);
});

redis.getAllCache("employeedetails", function (err, response) {
    if (err) console.log ("Cound not read from cache" + err.stack);
    else console.log ("Details = " + JSON.stringify(response));
});

redis.getValueForField("employeedetails", "designation", function (err, response) {
    if (err) console.log ("Could not read the specified field");
    else console.log ("Field = " + JSON.stringify(response));
});