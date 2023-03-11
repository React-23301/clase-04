let myDom = document; //document es un objeto global

let name = "Firlais";

const myDog = {
    name: "Firulais"
};

const myCat = {
    "name": "Kity"
};

// console.log(myDog.name);
// console.log(myCat.name);

/*
class Mouse {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}*/


// function Mouse(name, age) {
//     this.name = name;
//     this.age = age;
// }

// const myMouse = new Mouse("Perez", 4);

class Button {
    constructor(parentID, text) {
        this.parentID = parentID;
        this.text = text;
    }

    render() {
        let myApp = document.getElementById(this.parentID);

        // html que dibuja un boton
        myApp.innerHTML = `<div style="margin: 5px;"><button>${this.text}</button></div>`;
    }
}

// Construir el objeto boton
let myButon = new Button("app", "Mi boton");

// y llamar al metodo render de ese objeto.
myButon.render();


/** Defino una clase  input/text */
class InputText {
    constructor(parentID, label, name) {
        this.parentID = parentID;
        this.label = label;
        this.name = name;
    }

    render() {
        let myApp = document.getElementById(this.parentID);

        // html que dibuja un input (pongo += para que no borre el boton)
        myApp.innerHTML += `<div style="margin: 5px;"><label>${this.label}</label>
        <input type="text" name="${this.name}"></div>`;
    }
}

// Construir el objeto input
let myInput = new InputText("app", "Nombre", "name");

// y llamar al metodo render de ese objeto.
myInput.render();

