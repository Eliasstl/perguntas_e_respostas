const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas','root','R3mixCl@nMorph3l',{
    host: 'localhost',
    dialect:'mysql'
});

module.exports = connection;

//b8707a62b686f3:eafdc0cb@us-cdbr-east-05.cleardb.net/heroku_1e39cf246162596?reconnect=true