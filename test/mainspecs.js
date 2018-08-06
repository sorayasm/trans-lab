const assert = require('chai').assert;
global.window = global;

require("../src/js/main");

describe("Funciones del main", () => {
    it("Debe haber una función que llame a la página de saldo", () => {
        assert.isFunction(balance);
    })
    it("Debe haber una función que llame a la página de tarifa", () => {
        assert.isFunction(rate);
    })
    it("Debe haber una función que llame a la página de perfil", () => {
        assert.isFunction(profile);
    })
    it("Debe haber una función que llame a la página de Preguntas Frecuentes", () => {
        assert.isFunction(faq);
    })
});