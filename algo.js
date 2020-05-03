// Convert color to rgba or hex

class Color {
    constructor(r,g,b,name){
        this.r = r;        
        this.g = g;
        this.b = b;
        this.name = name;
    }

    innerRGB(){
        const {r, g, b} = this;
        return `${r}, ${g}, ${b}`;
    }

    rgb(){
        return `rgb(${this.innerRGB()})`;
    }

    rgba(a=1.0){
        return `rgba(${this.innerRGB()}, ${a})`
    }

    hex(){
        const {r, g, b} = this;
        return ('#' + ((1 << 24) + (1 << 16) + (g << 8) + b).toString(16).slice(1));
    }
}

// EXTENDS

class Pet {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating.`;
    }
}

class Cat extends Pet{
    meow(){
        return 'MEOW!!!!!';
    }
}

class Dog extends Pet{
    constructor(name, age, breed){
        super(name, age);
        this.breed = breed;
    }
    bark(){
        return 'WOOOF WOOOF!';
    }
}

// USER

class User {
    constructor(username, email, age){
        this.username = username;
        this.email = email;
        this.age = age;
        this.status = false;
    }

    login(){
        const {username, status} = this;
        console.log(`${username} is logged in`);
        return this.status = true;
    }

    logout(){
        const {username} = this;
        console.log(`${username} is logged out`)
        return this.status = false;
    }
}

class Admin extends User{
    constructor(){
        super(username, email, age, status, isAdmin);
        this.isAdmin = true; 
    }

    removeUser(user){
        users = users.filter(u => {
            return u.email != user.email;
        });
    }
}

const userOne = new User('pat', 'pat@pat.pl', 20);
const userTwo = new User('todd', 'todd@todd.com', 30);
const admin = new Admin('taco', 'taco@taco.pl', 40);

var users = [userOne, userTwo, admin];

// 

