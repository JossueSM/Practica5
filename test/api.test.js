const request = require('supertest')
const app = require('../src/index')

describe('GET /usuarios', () => {
it('Respuesta con json y contiene una lista de usuarios', done => {
    request(app)
        .get('/usuarios')
        .set('Aceptado', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
})
});



describe('POST /usuarios', () => {
    it('Respuesta cuando hago un POST', done => {
        const informacion = {
            ci:1500853311,
            nombre:"Jossue",
            apellido:"Simancas"
        }
        request(app)
            .post('/usuarios')
            .send(informacion)
            .set('Aceptado', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)
            .end(err =>{
                if(err) return done(err);
                done();
            })
    });
});

describe('PUT /usuarios/:id', () => {
    it('Respuesta cuando hago un PUT', done => {
        const usuarioIdAActualizar = '1';

        const datosActualizados = {
            nombre: 'El Pepe'
        };
        request(app)
            .put('/usuarios/${usuarioIdAActualizar}')
            .set('Aceptado', 'application/json')
            .send(datosActualizados)
            .expect('Content-Type', /json/)
            .expect(201, done);
    });
});


describe('DELETE /usuarios/:id', () => {
    it('Respuesta cuando hago un DELETE', done => {
        
        const usuarioIdAEliminar = '2';

        request(app)
            .delete(`/usuarios/${usuarioIdAEliminar}`)
            .set('Aceptado', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});


