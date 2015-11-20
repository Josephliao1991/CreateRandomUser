var DataManager = require(process.cwd()+'/Model/DataManager');
var DatabaseAccess = require(process.cwd()+'/Model/DatabaseAccess');
var mongoose    = require('mongoose');

DatabaseAccess.connect(DatabaseAccess.MONGODB, function (error, success) {
  // body...
  if (!success) {
    return callback(null, {result:success})
  }

  //Start To Create User
  for (var i = 1; i <= 100; i++) {
    if (i%10000 == 0) {
      console.log("Create Times: "+i);
    }
    DataManager.create("name", 12, function (error, success, dataObject) {

    })
  }


})
