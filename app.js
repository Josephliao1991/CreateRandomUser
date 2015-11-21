var DataManager = require(process.cwd()+'/Model/DataManager');
var DatabaseAccess = require(process.cwd()+'/Model/DatabaseAccess');
var mongoose    = require('mongoose');

DatabaseAccess.connect(DatabaseAccess.MONGODB, function (error, success) {
  // body...
  if (!success) {
    return callback(null, {result:success})
  }

  //Start To Create User
  DataManager.create("name", 12, function (error, success, dataObject) {
    if (success) {
      process.close()
    }
  })



})
