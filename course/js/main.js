"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// ----------Aula ARROWS FUNCTION----------------------------------------------------------------------
// ----------PRIMEIRO EXEMPLO SEM ES6----------------------------------------------------------------------
/*
// A boa pratica diz que temos que criar as variaveis com _ antes do eu nome
// O problema aqui é que o this._name de dentro da funcao f, nao se
// referencia ao nome bob, e sim a algum _name da funcao f.
// o this eh referente ao escopo corrente
// Temos que rodar o comando node main.js no diretorio js
// Esse é o erro
// TypeError: Cannot read property '_name' of undefined
var bob = {
    _name: "Bob",
    _friends: ["Guilherme", "Camila", "Murilo"],
    printFriends: function printFriends(){
        // Sem o es6 resolveriamos assim
        // Atribuiriamos o this a uma variavel
        var self = this;
        this._friends.forEach(function (f) {
            // E aqui substituiremos o this pela variavel
            return console.log(self._name + " knows " + f);
            //return console.log(this._name + " knows " + f);
        })
        ;
    }
};
bob.printFriends();

*/
// ----------FIM PRIMEIRO EXEMPLO------------------------------------------------------------------


// ----------SEGUNDO EXEMPLO CONCEITO  ARROW FUNCTION----------------------------------------------------------------------
// Agora veremos o conceito de arrow function
// Aqui dizemos que a variavel color recebera uma funcao e retornara red quando for chamada
// Quando salvamos aqui podemos olhar dentro do main tudo que o es6 escreveu no nosso lugar
// ele esta assim no main.js:
/*
var color = function color() {
    return console.log("red");
};
color();
 */
/*
var color = () => console.log("red");
color();
*/
// ----------FIM SEGUNDO EXEMPLO------------------------------------------------------------------


// ----------TERCEIRO EXEMPLO PRIMEIRO EX DE CIMA COM ES6----------------------------------------------------------------------
/*var bob = {
    _name: "Bob",
    _friends: ["Guilherme", "Camila", "Murilo"],
    printFriends: function printFriends(){
        // Desta forma nao perdemos nosso escopo e o this acesso o nome normalmente
        // Podemos ver no main o que o arrow fez
        this._friends.forEach(f => console.log(this._name + "knows" + f))
        ;
    }
};
bob.printFriends();
*/
// ----------FIM TERCEIRO EXEMPLO------------------------------------------------------------------


// ----------Aula CLASS----------------------------------------------------------------------
var Color = function () {
    function Color(codeColor, nameColor) {
        _classCallCheck(this, Color);

        // atributo
        this.codeColor = codeColor;
        this.nameColor = nameColor;
    }

    // Método retornando um objeto


    _createClass(Color, [{
        key: "getColor",
        value: function getColor() {
            return { codeColor: this.codeColor, nameColor: this.nameColor };
        }
    }]);

    return Color;
}();

// let no es6 é utilizado para criar variaveis pertecentes ao scope


var red = new Color("red", "Red");
console.log(red.getColor());
