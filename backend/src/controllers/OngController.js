const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    
    async index(request, response){
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response){

        //const data = request.body;
        const { name, email, whatsapp, city, uf } = request.body; //pode ser feito assim para acessar diretamente pela variavel
        const id = crypto.randomBytes(4).toString('HEX'); // somente no caso que não exista auto incremento e queira fazer algum tipo de senha

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
        
        return response.json({ id });
    }

};