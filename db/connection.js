var mysql = require("mysql");
var config;
config = {
  mysql_pool: mysql.createPool({
    host: '162.241.123.158',
    user: 'theatgg6_shg',
    password: 'r3pbWhs8psb5nitZjlpDvg',
    database: 'theatgg6_sal_subscriber102',
    multipleStatements: true,
    connectionLimit: 100, // Adjust as needed
  }),
};

module.exports = config;
