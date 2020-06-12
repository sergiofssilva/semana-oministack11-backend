const connection = require('../database/connection');
const generateUniqueId = require('../utils/generateUniqueId')

module.exports = {
  async index(request, response) {
    const ongs = await connection('ongs').select('*');
    return response.json(ongs);
  },

  async create(request, response) {
    const { name, email, whatsapp, city, uf } = request.body;

    const id = generateUniqueId();

    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    })

    return response.json({ id });
  },

  async selectOne(request, response) {
    const ong_id = request.headers.authorization;
    const incidents = await connection('ongs')
      .where('ong_id', ong_id)
      .select('*');

    return response.json(incidents);
  }
}