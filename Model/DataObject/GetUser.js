var randomstring = require("randomstring");
var SourceString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
var SourceNumber = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

function GetUser() {
  // body...
  var name      = randomstring.generate({length: 7, charset:SourceString});
  var account   = randomstring.generate({length: 12, charset:SourceNumber});
  var password  = randomstring.generate({length: 24, charset:SourceNumber});
  var contry    = getCountry()
  var age       = getAge()

  var UserObject =
  {
    Name      : name,
    Account   : account,
    Password  : password,
    Contry    : contry,
    Age       : age

  }

  return UserObject
}


function getAge() {
  var Age = parseInt((Math.random()*10000000)%50)
  return Age
}

function getCountry() {
  // body...
  var array = ["TW", "UK", "CH", "USA", "AS", "MARS"];
  var Country = array[parseInt((Math.random()*1000)%6)];
  return Country
}

module.exports = {
  GetUser : GetUser
}

// console.log("Name: "+Name);
// console.log("Account: "+Account);
// console.log("Password: "+Password);
// console.log("Contry: "+Contry);
// console.log("Age: "+Age);
