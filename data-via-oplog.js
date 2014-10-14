if (Meteor.isServer) {
  var MongoClient = Meteor.npmRequire('mongodb').MongoClient;
  // connect to Kadira
  Kadira.connect('8uu7DLdj8D9nFNaRK', '7150939c-c8bf-41b5-8531-e9244d63e0d2');
}