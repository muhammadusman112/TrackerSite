var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://localhost:27017/tracker';

// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //HURRAY!! We are connected. :)
console.log('Connection established to', url);

var collection = db.collection('user');


  // Create some users

///////////////////////////
///insert collection function
//////////////////////////

//     var user2 = {name: 'salman', age: 22, roles: ['admin', 'moderator', 'user']};
// var user3 = {name: 'almanis', age: 23, roles: ['admin', 'moderator', 'user']};
// var user4 = {name: 'usman', age: 24, roles: ['user', 'moderator', 'user']};
// var user5 = {name: 'muman', age: 25, roles: ['user', 'moderator', 'user']};
// var user6 = {name: 'reham', age: 26, roles: ['admin', 'moderator', 'user']};


  // collection.insert([user2,user3,user4,user5,user6], function (err, result) {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       console.log('Inserted %d documents into the "users" collection. The documents inserted with "_id" are:', result.length, result);
  //     }
  //     //Close connection
  //     db.close();
  //   });




///////////////////////////
///update collection function
//////////////////////////

// var collection = db.collection('users');

// // Insert some users
// collection.update({name: 'modulus user'}, {$set: {enabled: false}}, function (err, numUpdated) {
//   if (err) {
//     console.log(err);
//   } else if (numUpdated) {
//     console.log('Updated Successfully %d document(s).', numUpdated);
//   } else {
//     console.log('No document found with defined "find" criteria!');
//   }
//   //Close connection
//   db.close();
// });



///////////////////////////
///searching collection function
//////////////////////////

   // collection.find({name: 'modulus admin'}).toArray(function (err, result) {
   //    if (err) {
   //      console.log(err);
   //    } else if (result.length) {
   //      console.log('Found:', result);
   //    } else {
   //      console.log('No document(s) found with defined "find" criteria!');
   //    }
   //    //Close connection
   //    db.close();
   //  });

///////////////////////////
///searching through cursor collection function
//////////////////////////

   //We have a cursor now with our find criteria
    // var cursor = collection.find({name: 'usman'});

    // //We need to sort by age descending
    // cursor.sort({age: -1});

    // //Limit to max 10 records
    // cursor.limit(6);

    // //Skip specified records. 0 for skipping 0 records.
    // cursor.skip(0);

    // //Lets iterate on the result
    // cursor.each(function (err, doc) {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     console.log('Fetched:', doc);
    //   }
    // });



   }
    });
