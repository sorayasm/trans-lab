const assert = require('chai').assert;
global.window = global;

require("../src/js/balance");

describe("displayOption()", () => { //Llamar a la función que quiero testear
    it("Debe haber una función que ingrese la data del select de tarjetas", () => {
        assert.ok(displayOption);
    })
});

describe("total()", () => { //Llamar a la función que quiero testear
    it("Debe haber una función para desplegar el saldo total", () => {
        assert.ok(total);
    })
});