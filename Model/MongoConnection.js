/*   --* Connection pools *--
== Each connection, whether created with mongoose.connect or
== mongoose.createConnection are all backed by an internal
== configurable connection pool defaulting to a size of 5.
== Adjust the pool size using your connection options:
*/

/* --* Options[] *--
== db      - passed to the connection db instance
== server  - passed to the connection server instance(s)
== replset - passed to the connection ReplSet instance
== user    - username for authentication (if not specified in uri)
== pass    - password for authentication (if not specified in uri)
== auth    - options for authentication
== mongos  - passed to the [underlying driver's mongos options]
== (http://mongodb.github.io/node-mongodb-native/2.0/api/Mongos.html)
*/

/* http://mongoosejs.com/docs/connections.html */


/* ============================================================= */

var mongoose = require('mongoose');
var Constants = require('../Constants/Constants');


/*
 == callback(error, success)
 == This Function Will Open Only One Times,
 == With Multiple Connection in connection pool
 == You Can Change Number Of Connections With Option[pool size]
*/
function connectToMongoDB(callback) {
  // body...
  console.log("mongoose.connection..readyState :" + mongoose.connection.readyState);
  //Check Connection Is Create Before
  if (mongoose.connection.readyState == 1) {
    console.log("Connection Create Before");
    return callback(null, true)
  }

  //Set dbAddress & Options
  var dbAddress = 'mongodb://'+Constants.MONGODB_DB_IP+Constants.MONGO_DB_NAME
  var options = {
    db: { native_parser: true },
    server: { poolSize: 5 },
    // replset: { rs_name: 'myReplicaSetName' },
    // user: Constants.MONGO_DB_USER,
    // pass: Constants.MONGO_DB_PWD
  }

  //Start To Connect To Mongodb
  console.log("Start Connect to Mongodb");
  mongoose.connect(dbAddress, options, function (error) {
    // body...
    console.log("Connect To Mongodb Success");
    if (error) {
      console.log(error);
      return callback(null, false)
    }
    callback(null, true)
  })
}



/*
 == callback(error, success)
 == This Function Will DisConnect All Of Connection With Mongodb Server,
*/
function disConnectFromMongoDB(callback) {
  // body...
  mongoose.connection.close(function (error) {
    // body...
    if (error) {
      console.log(error);
      return callback(null, false)
    }
    callback(null, true)
  })
}


module.exports = {
  connectToMongoDB      : connectToMongoDB,
  disConnectFromMongoDB : disConnectFromMongoDB
}
