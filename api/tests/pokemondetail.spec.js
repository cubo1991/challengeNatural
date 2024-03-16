const server = require('../app.js');
const request = require('supertest');


describe('GET /pokemonDetail', () => {
    test('should respond with a 200 status code', async () => {
        const response = await request(server).get('/api/pokemondetail/8').expect(200);
        expect(response.status).toBe(200);     
    });

    test('should respond with an object of certain properties', async () => {
        const response = await request(server).get('/api/pokemondetail/8').send();   
        expect(response.body).toBeInstanceOf(Object);
        expect(response.body).toHaveProperty('id');
        expect(response.body).toHaveProperty('name');
        expect(response.body).toHaveProperty('types');
        expect(response.body).toHaveProperty('stats');
        expect(response.body).toHaveProperty('sprite');
        expect(response.body).toHaveProperty('weight');
        expect(response.body).toHaveProperty('height');
        expect(response.body).toHaveProperty('ability');
     
       
    })
});
