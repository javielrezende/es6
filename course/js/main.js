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
/*
class People{
    constructor(name, email, phone){
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    toString(){
        return `Name: ${this.name}
        Email: ${this.email}
        Phone: ${this.phone}
        `;
}
}

class Client extends People{
constructor(id, name, email, phone){
    super(name, email, phone);
    this.id = id;
    }
    toString(){
    return`id: ${this.id}
    ${super.toString()}
    `
    }
}
var test = new Client(1, "Guikherme", "guilherme@email.com", "2234442");

console.log(test.toString());
*/

// ----------Aula SET DATA STRUTURE----------------------------------------------------------------------
/*
let color = new Set();
color.add("red").add("green").add("red");

// has serve para verificar se existe aquela informacao, no caso vermelho
if(color.size === 2 && color.has("red")){
    // values pega s valores que estao adicionados dentro do set
for(let key of color.values()){
console.log(key);
}
};

*/

// ----------Aula FORMATACAO DE NUMEROS----------------------------------------------------------------------
// Primeiramente criamos um index.html naraiz do projeto(course)
// Somente para mostrar a formatação para browser...
// Aqui no terminal nao aparece a diferença
/*
var number = 123456.34;
var En = new Intl.NumberFormat('en-US').format(number);
var De = new Intl.NumberFormat('de-DE').format(number);

console.log(En);
console.log(De);
*/

// ----------Aula FORMATACAO DE MOEDAS----------------------------------------------------------------------
// Formatação em dolar
// Currency = moeda
// o metodo .format é usado para entrar com o numero
// Pode ser usado com duas formas, como logo em baixo
/*
var USD = new Intl.NumberFormat("en-US", {style:"currency", currency:"USD"});
// Formatação em reais
var BRL = new Intl.NumberFormat("pt-BR", {style:"currency", currency:"BRL"}).format(1192837.40);

console.log(USD.format(1192837.40));
console.log(BRL);
*/

// ----------Aula FORMATACAO DE DATAS----------------------------------------------------------------------

/*var US = new Intl.DateTimeFormat("en-US");
var BR = new Intl.DateTimeFormat("pt-BR");

console.log(US.format(new Date("2016-05-10")));
console.log(BR.format(new Date("2016-05-10")));
*/

// ----------Aula FORMATACAO DE DATAS----------------------------------------------------------------------
"use strict";
