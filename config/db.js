
var knex = require('knex')({
  client: 'mysql',
  connection: {
    host     : '192.168.0.202',
    user     : 'root',
    password : 'admin123',
    database : 'test',
    charset  : 'utf8'
  }
});

var bookshelf = require('bookshelf')(knex);

var User = bookshelf.Model.extend({

   tableName: 'tbl1',

});


module.exports = {
   User: User
};








// var knex = require('knex')( {
//   client: 'mysql',
//   connection: {
//    host: '192.168.0.202',  // your host
//    user: 'root', // your database user
//    password: 'admin123', // your database password
//    database: 'dbUsers',
//    charset: 'UTF8_GENERAL_CI'
// }
// });



// var bookshelf = require('bookshelf')(knex);

// var User = bookshelf.Model.extend({

//    tableName: 'tblUsers',

// });


// module.exports = {
//    User: User
// };