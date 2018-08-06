const assert = require('chai').assert;
global.window = global;

require("../src/js/main");

describe("balance()", () => { //Llamar a la función que quiero testear
    it("Debe haber una función que llame a la pagina de saldo", () => {
        assert.isFunction(balance);
    })
});

describe("rate()", () => { //Llamar a la función que quiero testear
    it("Debe haber una función  que llame a la pagina de tarifa", () => {
        assert.isFunction(main);
    })
});

describe("profile()", () => { //Llamar a la función que quiero testear
    it("Debe haber una función  que llame a la pagina de perfil", () => {
        assert.isFunction(main);
    })
});

describe("faq()", () => { //Llamar a la función que quiero testear
    it("Debe haber una función  que llame a la pagina de Preguntas Frecuentes", () => {
        assert.isFunction(main);
    })
});