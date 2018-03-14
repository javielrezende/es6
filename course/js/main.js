"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
/*class Color{
    constructor(codeColor, nameColor){
        // atributo
        this.codeColor = codeColor;
        this.nameColor = nameColor;
    }

    // Método retornando um objeto
    getColor(){
        return {codeColor: this.codeColor, nameColor: this.nameColor};
    }
}

// let no es6 é utilizado para criar variaveis pertecentes ao scope
let red = new Color("red", "Red");
console.log(red.getColor());
*/
// ---------- Fim Aula CLASS----------------------------------------------------------------------


// ----------Aula STRING TEMPLATE----------------------------------------------------------------------
//-----------ANTES DO ES 6 ERA FEITO ASSIM-----------------------------------------------------------
/*
let name = "Guilherme";
let age = 19;

//let text = "name: " + name + " age: " + age;
//console.log(text);
//--------------------------AGORA COM ES 6------------------------------------------------------
// UTILIZAR ASPAS PARA COLOCAR O CONTEUDO QUE QUEREMOS DENTRO
// JA AS VARIAVEIS PEGAMOS COM CHAVES
let text =`
name: ${ name }
age: ${ age }`;
    console.log(text);
*/

/*
// ----------Aula VALORES DEFAULT----------------------------------------------------------------------
//-----------ANTES DO ES 6 ERA FEITO ASSIM-----------------------------------------------------------
// Funcao para, no caso de ter dois parametros, e quer saber se foi recebido os dois
function test(valueA) {
    // arguments faz um teste para saber se recebeu somente o primeiro argumento
    // Se 2a pos do array de arguments for indefinido valor default é 4, senao sera o valor dele mesmo
    var valueB = arguments.length <=1 || arguments[1] ===  undefined ? 4 : arguments[1];
    return valueA + valueB;
}
//console.log(test(2, 2));

//--------------------------AGORA COM ES 6------------------------------------------------------
function test(valueA, ValueB = 4) {
       console.log(test(2));
}
*/

// ----------Aula VAR OF----------------------------------------------------------------------
//-----------ANTES DO ES 6 ERA FEITO ASSIM-----------------------------------------------------------
/*
var list = ["test", 34, {name: "Guilherme"}];
for(var i in list){
    // Quando fazemos um for, ao imprimir o i ele nos tras o valor do indice
    //console.log(i);
    // Para imprimirmos o valor do i temos que:
    //console.log(list[i]);
}
//--------------------------AGORA COM ES 6------------------------------------------------------
for(let i of list){
    // Agora com es 6, utilizando o OF ao imprimir o i ele nos tras o valor do array e nao mais o indice
console.log(i);
}

*/

// ----------Aula CLASSES----------------------------------------------------------------------
//-----------ANTES DO ES 6 ERA FEITO ASSIM-----------------------------------------------------------
var People = function () {
    function People(name, email, phone) {
        _classCallCheck(this, People);

        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    _createClass(People, [{
        key: "toString",
        value: function toString() {
            return "Name: " + this.name + "\n        Email: " + this.email + "\n        Phone: " + this.phone + "\n        ";
        }
    }]);

    return People;
}();

var Client = function (_People) {
    _inherits(Client, _People);

    function Client(id, name, email, phone) {
        _classCallCheck(this, Client);

        var _this = _possibleConstructorReturn(this, (Client.__proto__ || Object.getPrototypeOf(Client)).call(this, name, email, phone));

        _this.id = id;
        return _this;
    }

    _createClass(Client, [{
        key: "toString",
        value: function toString() {
            return "id: " + this.id + "\n    " + _get(Client.prototype.__proto__ || Object.getPrototypeOf(Client.prototype), "toString", this).call(this) + "\n    ";
        }
    }]);

    return Client;
}(People);

var test = new Client(1, "Guikherme", "guilherme@email.com", "2234442");

console.log(test.toString());
//--------------------------AGORA COM ES 6------------------------------------------------------
