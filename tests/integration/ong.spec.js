const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection')

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create an ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: "Ong Teste 2",
        email: "ong@teste.com",
        whatsapp: "71992495355",
        city: "Feira de Santana",
        uf: "BA"
      });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);

  });
})