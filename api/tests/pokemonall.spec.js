const server = require('../app.js');
const request = require('supertest');


describe('GET /pokemonAll', () => {
    test('should respond with a 200 status code', async () => {
        const response = await request(server).get('/api/pokemonall/5').expect(200);
        expect(response.status).toBe(200);     
    });

    test('should respond with an Array of 18 elements', async () => {
        const response = await request(server).get('/api/pokemonall/8').send();   
        expect(response.body).toBeInstanceOf(Array);
        expect(response.body).toHaveLength(18);
       
    })
});
