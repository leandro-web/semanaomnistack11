const crypto = require('crypto');

module.exports = function generateUniqueId(){
    return crypto.randomBytes(4).toString('HEX'); // somente no caso que não exista auto incremento e queira fazer algum tipo de senha
}