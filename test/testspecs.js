const assert = require('chai').assert;
global.window = global;

const register = require("../src/js/register");


describe('register()', () => { //Describe lo que habrá dentro de cada función
    describe('Debería verificar si la password cumple con los requisitos', () => {
        it('La password debe ser solo numeros', (password) => { //Caso de prueba
            assert.equal(register("123456"), true);
            assert.equal(register("jsahdasjdsah"), false);
            assert.equal(register("jsdkjfh45"), false);
        });

    });
});