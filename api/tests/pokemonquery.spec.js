const server = require('../app.js');
const request = require('supertest');

jest.setTimeout(60000)

describe('GET /pokemonQuery', () => {
    test('should respond with a 200 status code for the search by type', async () => {
        const response = await request(server).get('/api/pokemonquery?query=water').expect(200);
        expect(response.status).toBe(200);     
    });
    test('should respond with a 200 status code for the search by name', async () => {
        const response = await request(server).get('/api/pokemonquery?query=bulbasaur').expect(200);
        expect(response.status).toBe(200);     
    });

    test('when searching by type, should respond with an array of objects', async () => {
        const response = await request(server).get('/api/pokemonquery?query=water').send();   
        expect(response.body).toBeInstanceOf(Array);
      
  })
  
  test('when searching by type that exist but no pokemon have it, should respond with a message', async () => {
    const response = await request(server).get('/api/pokemonquery?query=unknown').send();   
    expect(response.status).toBe(404)   
    expect(response.error.text).toBe('No Pokemon of unknown type was found')
})

  test('when searching by name, should respond with an object', async () => {
    const response = await request(server).get('/api/pokemonquery?query=pikachu').send();   
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('name');
 
})
});
