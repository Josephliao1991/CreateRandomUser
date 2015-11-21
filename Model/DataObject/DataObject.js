var mongoose = require('mongoose');

//Set Data Model
var Schema   = mongoose.Schema;
var object = new Schema({
  Name      : String,
  Account   : String,
  Password  : String,
  Contry    : String,
  Age       : Number
})

var DataObject = mongoose.model( 'Person', object );



/* Function */

//Find
function findByID(id, callback) {
  // body...
  DataObject.findByID({_id:id}, function (error, dataObject) {
    // body...
    if (error) {
      return callback(error)
    }
    callback(null, dataObject)
  })
}

//Create
function create(name, age, callback){

  var GetUser = require('./GetUser');
  var User = GetUser.GetUser()

  var account   = name+"@USER"
  var password  = name+"@PASSWORD"
  var Data = {
    Name      : User.Name,
    Account   : User.Account,
    Password  : User.Password,
    Contry    : User.Contry,
    Age       : User.Age
  }

  DataObject.create(Data, function (error, dataObject) {
    // body...
    if (error) {
      return callback(error)
    }
    callback(null, dataObject)
  })
}


//Update
function updateAll(id, name, age, callback) {
  // body...
  DataObject.findByID({_id:id}, function (error, dataObject) {
    // body...
    if (error) {
      return callback(error)
    }

    dataObject.name = name
    dataObject.age  = age

    return dataObject.save(function (error, data) {
      // body...
      if (error) {
        return callback(error)
      }
      callback(null, data)
    })
  })
}

function updateName(id, name, callback) {
  // body...
  DataObject.findByID({_id:id}, function (error, dataObject) {
    // body...
    if (error) {
      return callback(error)
    }

    dataObject.name = name

    return dataObject.save(function (error, data) {
      // body...
      if (error) {
        return callback(error)
      }
      callback(null, data)
    })
  })
}

function updateAge(id, age, callback) {
  // body...
  DataObject.findByID({_id:id}, function (error, dataObject) {
    // body...
    if (error) {
      return callback(error)
    }

    dataObject.age  = age

    return dataObject.save(function (error, data) {
      // body...
      if (error) {
        return callback(error)
      }
      callback(null, data)
    })
  })
}


//Delete
function deleteByID(id, callback) {
  // body...
  DataObject.findOne({_id : id},function (error, dataObject) {
    // body...
    if (error) {
      callback(error)
    }
    if (!dataObject) {
      return callback(null, false)
    }

    cpush.remove(function (error) {
      // body...
      if (error) {
        return callback(error)
      }
      callback(null, true)
    })
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
