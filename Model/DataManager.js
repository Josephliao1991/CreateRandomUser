var mongoose = require('mongoose');
var DataObject = require('./DataObject/DataObject');
var Constants   = require(process.cwd()+'/Constants/Constants');

//callback(error, success, dataObject)

function findByID(id, callback) {
  // body...
  DataObject.findByID(id, function (error, dataObject) {
    // body...
    if (error) {
      console.log(error);
      return callback(null, false)
    }
    callback(null, true, dataObject)
  })
}

function create(name, age, callback){
  // body...
  for (var i = 0; i < Constants.CreateTimes; i++) {
    DataObject.create(name, i, function (error, index) {
      // body...
      if (error) {
        console.log(error);
        return callback(null, false)
      }
      if (index == Constants.CreateTimes) {
        callback(null, true, index)
      }

    })
  }

}

function updateAll(id, name, age, callback) {
  // body...
  DataObject.updateAll(id, name, age, function (error, dataObject) {
    // body...
    if (error) {
      console.log(error);
      return callback(null, false)
    }
    callback(null, true, dataObject)

  })
}

function updateName(id, name, callback) {
  // body...
  DataObject.updateName(id, name, function (error, dataObject) {
    // body...
    if (error) {
      console.log(error);
      return callback(null, false)
    }
    callback(null, true, dataObject)
  })
}

function updateAge(id, age, callback) {
  // body...
  DataObject.updateAge(id, age, function (error, dataObject) {
    // body...
    if (error) {
      console.log(error);
      return callback(null, false)
    }
    callback(null, true, dataObject)
  })
}

function deleteByID(id, callback) {
  // body...
  DataObject.deleteByID(id, function (error) {
    // body...
    if (error) {
      console.log(error);
      return callback(null, false)
    }
    callback(null, true)
  })
}



module.exports = {

  findByID    : findByID,
  create      : create,
  updateAll   : updateAll,
  updateName  : updateName,
  updateAge   : updateAge,
  deleteByID  : deleteByID

}
