
var MONGODB = "MONGODB"
var MYSQL   = "MYSQL"

var MongoConnection = require('./MongoConnection');

/*
== callback(error, success)
*/

function connect(databaseType, callback) {
  // body...
  if (databaseType == MONGODB) {
    MongoConnection.connectToMongoDB(callback)

  }else if (databaseType == MYSQL) {
    console.log("Now Connect To MySQL");
  }

}


module.exports = {
  MONGODB   : MONGODB,
  MYSQL     : MYSQL,
  connect   : connect
}
