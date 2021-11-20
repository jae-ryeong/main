const mongoose = require('mongoose');


const STR_DB_CONN_URL = process.env.MONGODB_CONNECTION || 'mongodb://db:27017/mohaemookji';


const connOpts = {
  useNewUrlParser   : true,
  useUnifiedTopology: true,
};

mongoose.connect(STR_DB_CONN_URL, connOpts);
const db = mongoose.connection;

db.once('error', err => {
  console.error(err.message);
  process.exit(1);
});
db.once('open', () => console.log(`${STR_DB_CONN_URL} ok!`));


module.exports = db;