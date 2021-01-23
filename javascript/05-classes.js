class Animal {
    constructor(Name){
        this._name = Name;
    }
    speakTest(){
        return console.log(`${this._name} faz barulho`)
    }
};

const cachorro = new Animal("Pepe");
cachorro.speakTest();

class Cachorro extends Animal{
    constructor(Name){
        super(Name);
        this._quantidadePatas = 4;
    }
    QuantidadePatas (){
        return this._quantidadePatas;
    }
}

const maria = new Cachorro("Maria");
maria.speakTest();
console.log(maria.QuantidadePatas());