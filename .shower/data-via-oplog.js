var MongoClient = require('mongodb').MongoClient
var i = 0;
MongoClient.connect('mongodb://127.0.0.1:27017/appdb', onMogoStart);

function onMogoStart(err, db){
  if(err) throw err;
  var collection = db.collection('test_insert');
  addRecords();
  function addRecords(){
    i++;
    var payload = "";

    for (var j = 0; j < 100; j++) {
      payload += Math.random();
    };
    collection.insert({item: payload}, function(err, result){
      if(err){
        throw err;
      }
      setTimeout(addRecords, 5);
    });
  }
}

setInterval(function () {
  console.log(i/5);
  i = 0;
}, 5000);


