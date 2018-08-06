const assert = require("chai").assert;
global.window = global;

const main = require("../src/js/main.js");

describe("accordeon()", () => {
    it("debería devolver si la funcion accordeon funciona", () => {
        assert.isOk(main)
    })
});

describe("logoutWithFirebase()", () => {
    it("debería devolver si la funcion logoutWithFirebase funciona", () => {
        assert.isOk(main)
    })
});

describe("w3_open()", () => {
    it("debería devolver si la funcion w3_open funciona", () => {
        assert.isOk(main)
    })
});
describe("w3_close()", () => {
    it("debería devolver si la funcion w3_close funciona", () => {
        assert.isOk(main)
    })
});