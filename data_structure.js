 "use strict"

function List(){

    this.listElements = [];
    this.listSize = 0;
    this.pos = 0;

    this.append = function(element){ //  Dodanie elementu do tablicy listElements.
        this.listElements[this.listSize++] = element; // Pozycja nowego elementu to wartość listSize + 1, czyli na końcu.
    };

    this.find = function(element){ // Wyszukiwanie danego elementu w liście przez iterację w tablicy listElements.
        for(let i = 0; i < this.listElements.length; i++){
            if(this.listElements[i] == element){
                return i; // Jeżeli argument występuje w liście, zwracany jest indeks.
            }
        } return -1; // Jeżeli w tablicy nie ma szukanego argumentu, zwracana jest wartość -1.
    };

    this.remove = function(element){ // Usuwanie danego elementu.
        const elemPos = this.find(element); // Aby znaleźć element do usunięcia, należy użyć funkcji find.
        if(elemPos > -1){ // Jeżeli element znajduje się w tablicy...
            this.listElements.splice(elemPos,1); // Usuwamy jeden element od indeksu elemPos, który odpowiada indeksowi usuwanej wartości.
            this.listSize--;
        }
    };

    this.length = function(){ // Długość funkcji.
        return this.listSize;
    };

    this.view = function(){
        return this.listElements;
    };

    this.insert = function(element, after){ // Dodanie nowego elementu.
        const afterPos = this.find(after); // Metodą find szukany jest indeks elementu, za który nowy element ma zostać dodany.
        if(afterPos > -1){
            this.listElements.splice(afterPos +1, 0, element); // Indeks aftera + 1, 0 elementów do usunięcia, nowy element.
            this.listSize++; // Długość tablicy się zwiększa.
        }
    };

    this.contains = function(element){ // Metoda odnajduje indeks przekazanego elementu.
        const elemPos = this.find(element);
        if(elemPos > -1){
            return true;
        } else {
            return false;
        }
    };

    this.moveTo = function(position){ // Zmiana wartości pola pos na wartość przekazaną w argumencie.
        this.pos = position;
    };

    this.getElem = function(){ // Metoda zwraca element, który znajduje się w tablicy pod indeksem aktualnej wartości pos.
        return this.listElements[this.pos];
    };

    this.previous = function(){
        return this.listElements[--this.pos];
    };

    this.next = function(){
        return this.listElements[this.pos++];
    };

    this.front = function(){
        this.pos = 0;
    };

    this.end = function(){
        this.pos = this.listSize - 1;
    };
}

// STOS

class Stack {
    constructor(){
        this.storage = [];
        this.length = 0;
    }
    isEmpty() {
        return this.length === 0;
    }

    add(element){
        return this.storage.push(element);
        this.length++;
    }

    remove(){
        return this.storage.pop();
        --this.length;
    }

    clear(){
        this.storage = [];
        this.length = 0;
    }

    getLength(){
        return this.storage.length;
    }

    view(){
        return this.storage;
    }
}

const stos = new Stack();

//QUEUE

class Queue{
    constructor(){
        this.items = [];
    }

    enqueue(element){ // Dodajemy element na koniec kolejki.
        this.items.push(element);
    }

    dequeue(){ // Usuwamy pierwszy element.
        if(this.isEmpty()){
            return 'Queue is empty';
        }
        return this.items.shift();
    }

    front(){ // Zwraca pierwszy element kolejki.
        if(this.isEmpty()){
            return 'Queue is empty';
        }
        return this.items[0];
    }

    isEmpty(){
        return this.items.length === 0;
    }

    printQueue(){
        if(this.isEmpty()){
            return 'Queue is empty';
        }
        return this.items;
    }

    clearQueue(){
        this.items = [];
    }
}

// List Class

class List{
    constructor(){
        this.listElements = [];
        this.listSize = 0;
        this.pos = 0;
    }

    append(element){
        this.listElements[this.listSize++] = element;
    }

    find(element){
        for(let i = 0; i < this.listElements.length; i++){
            if(this.listElements[i] === element){
                return i;
            }
        }
        return -1;
    }

    remove(element){
        const elemPos = this.find(element);
        if(elemPos > -1){
            this.listElements.splice(elemPos, 1);
            this.listSize--;
        }
    }

    length(){
        return this.listSize;
    }

    view(){
        return this.listElements;
    }

    insert(element, after){
        const afterPos = this.find(after);
        if(afterPos > -1){
            this.listElements.splice(afterPos + 1, 0, element);
            this.listSize++;
        }
    }

    contains(element){
        const elemPos = this.find(element);
        if(elemPos > -1){
            return true;
        }
        return false;
    }

    moveTo(position){
        this.pos = position;
    }

    getElem(){
        return this.listElements[this.pos];
    }

    previous(){
        return this.listElements[--this.pos];
    }

    next(){
        return this.listElements[this.pos++];
    }

    front(){
        this.pos = 0;
    }

    end(){
        this.pos = this.listSize--;
    }
}

// BINARY TREE Rekurencja

const BST = function(){ // Definicja konstruktora.
    this.Node = function(key){
        this.key = key;
        this.left = null;
        this.right = null;
    };

    this.root = null; // Pierwszy element na szczycie drzewa.
    this.insert = function(key){ // Umieszczanie nowych elementów w drzewie.
        let newNode = new this.Node(key); // Tworzenie instancji Node.
        if(this.root === null){ // Jeżeli jeszcze nie ma roota, to nowy Node jest pierwszym elementem czyli jest nowym rootem.
            this.root = newNode;
        }
        else {
            this.insertHelper(this.root, newNode);
        }
    }
    this.insertHelper = function(node, newNode){  // INSERT HELPER BĘDZIE SIĘ WYWYOŁYWAŁ TAK DŁUGO AŻ NATRAFI NA PUSTY WSKAŹNIK, DO KTÓREGO PRZYPISZE NOWY ELEMENT.
        if(node.key > newNode.key){ // Czy aktualny element jest większy od nowego elementu ?
            if(node.left === null){ // Jeżeli tak, to sprawdzamy czy aktualny element wskazuje na coś wskaźnikiem left.
                node.left = newNode;
            }
            else {
                this.insertHelper(node.left, newNode); // Rekurencja. Jeżeli aktualny element wskazuje na jakiegoś lefta to znowu wykonujemy insertHelper.
            }
        } else { // Jeżelie nowy element jest równy lub większy od aktualnego elementu, to dodajemy go z prawej strony.
            if(node.right === null){ // Czy aktualny element wskazuje na coś wskaźnikiem right?
                node.right = newNode;
            }
            else {
                this.insertHelper(node.right, newNode); // Jeżeli tak, to wykonujemy znowu insertHelper.
            }
        }
    };
    this.printNode = function(node){ // Metoda do wypisania zawartości danego węzła.
        console.log(node.key);
    };

    //Metody inOrder, preOrder i postOrder służą do przejścia przez całe drzewo i wywyołaniu jakiejś funckji.

    this.inOrder = function(){ //Metoda, która wypisuje elementy w kolejności od najmniejszego do największego.
        this.inOrderHelper(this.root, this.printNode);
    };
    this.inOrderHelper = function(node, callback){
        if(node !== null){ // Metoda sprawdza czy nie przekazujemy nulla. Jeżeli tak, to nic się nie dzieje.
            this.inOrderHelper(node.left, callback); // Metoda wywołuje samą siebie na lewym wskaźniku.
            callback(node); //Metoda wykonuje funkcję podaną jako argument i przekazuje tej funkcji aktualny element.
            this.inOrderHelper(node.right, callback); // Metoda wywołuje samą siebie na prawym wskaźniku.
        }
    };
    this.preOrder = function(){
        this.preOrderHelper(this.root, this.printNode);
    };
    this.preOrderHelper = function(node, callback){
        if(node !== null){
            callback(node);
            this.preOrderHelper(node.left, callback);
            this.preOrderHelper(node.right, callback);
        }
    };
    this.postOrder = function(){
        this.postOrderHelper(this.root, this.printNode);
    };
    this.postOrderHelper = function(node, callback){
        if(node !== null){
            this.preOrderHelper(node.left, callback);
            this.preOrderHelper(node.right, callback);
            callback(node);
        }
    };
    this.findMin = function(){ // Minimalna wartość drzewa.
        if (this.root) { // Sprawdzamy czy istnieje korzeń. Jeżeli nie, to zwracamy null.
            let node = this.root;
            while(node && node.left !== null){ // Sprawdzamy czy node i node.left nie są nullami. Jeżeli nie są to idziemy dalej, jeżeli są to zwracamy min wartość.
                node = node.left;
            }
            return node.key;
        }
        return null;
    }
    this.findMax = function(){
        if (this.root) {
            let node = this.root;
            while(node && node.right !== null){
                node = node.right;
            }
            return node.key;
        }
        return null;
    }
    this.search = function(key){ // Szukamy danego elementu drzewa.
        return this.searchHelper(this.root, key);
    };
    this.searchHelper = function(node, key){ // Jeżeli key === null -> False.
        if(key < node.key){ // Jeżeli szukana wartość jest mniejsza to wykonujemy tą samą funkcję tylko dla node.left.
            return this.searchHelper(node.left, key);
        }
        else if (key > node.key) { // Jeżeli szukana wartość jest większa to wykonujemy tą samą funkcję tylko dla node.right.
            return this.searchHelper(node.right, key);
        }
        else {
            return true; // Jeżeli node.key nie jest mniejszy ani większy i istnieje to jest równy szukanemu.
        }
    }
    this.remove = function(key){
        return this.removeHelper(this.root, key);
    }
    this.removeHelper = function(node, key){ // Zwraca nowe drzewo, które nie zawiera elementu do usunięcia.
        if(node === null){
            return null;
        }
        if(key < node.key){ // Szukamy elementu do usunięcia.
            node.left = this.removeHelper(node.left, key);
            return node;
        }
        else if(key > node.key){
            node.right = this.removeHelper(node.right, key);
            return node;
        }
        else { // Tutaj znaleziony został element do usunięcia.
            if(node.left === null && node.right === null){ // Szukany element nie posiada elementu pochodnego. Zwracamy null, a potem resztę drzewa.
                node = null;
                return node;
            }
            if(node.left === null){ // Szukany element ma tylko jeden element pochodny. Trzeba ustalić po której stronie i nadpisać element do usunięcia tym pochodnym.
                node = node.right;
                return node;
            }
            else if(node.right === null){
                node = node.left;
                return node;
            } // Element do usunięcia posiada dwa elementy pochodne. Trzeba znaleźć najwyższy element, ale niższy od usuwanego.
            let aux = this.findMinFrom(node.right); // Metoda wyszukuje ten element w/w. Element po prawej stronie roota, ale najbardziej odsunięty w lewo.
            node.key = aux.key;
            node.right = this.removeHelper(node.right, aux.key);
            return node;
        }
    };
    this.findMinFrom = function(node){
        if(node.left === null){
            return node;
        }
        else{
            return this.findMinFrom(node.left);
        }
    }
};

// HashTable

const Hashtable = function(){
    this.table = new Array(137); // Inicjalizacja nowej tablicy z początkowym rozmiarem.
    this.initHash = function(){ // Metoda pomocnicza służąca do wypełniania głównej tablicy pustymi tablicami na wypadek kolizji danych.
        for(let i = 0; i < this.table.length; i++){
            this.table[i] = [];
        }
    };
    this.hash = function(key){ // Klucz do wyszukania przypisanej mu wartości.
        let hash = 0;
        for(let i = 0; i < key.length; i++){ // Pętla przechodzi przez każdy znak przekazanego argumentu, pobierając wartość ASCII aktualnego znaku.
            hash += key.charCodeAt(i); // Wartości są sumowane.
        }
        return hash % 137; // Zwracana jest reszta z dzielenia sumy wartości ASCII i liczby 137.
    };
    this.put = function(key, value){ // Dodawanie nowego elementu. Klucz, po którym użytkownik szuka danych oraz dane przypisane do tego klucza.
        const index = this.hash(key); // Zahaszowanie wartości klucza. W ten sposób otrzymujemy indeks pod który umieścić wartość.
        let i = 0; // Pomocnicza zmienna do wykorzystania w przypadku kolizji.
        if(this.table[index][0] === undefined){ // Dany indeks głównej tablicy jest pusty.
            this.table[index][0] = key;
            this.table[index][1] = value;
        } else { // Jeżeli wewnętrzna tablica posiada już wartości w tym miejscu to szukamy pierwszego wolnego indeksu.
            while(this.table[index][i] !== undefined){ // Kolizja.
                i++;
            }
            this.table[index][i] = key;
            this.table[index][i+1] = value;
        }
    };
    this.get = function(key){ // Klucz
        const index = this.hash(key); // Klucz jest hashowany.
        let i = 0; // Zmienna na wypadek kolizji (gdy program tafi na indeks, pod którym jest więcej niż jedna wartośc).
        if(this.table[index][0] !== undefined){
            if(!this.table[index].length > 2){ // Metoda get trafia na tablicę zawierającą więcej niż 2 elementy.
                return this.table[index][1]; // Zwracana wartość, czyli element pod indeksem 1.
            }
            else {
                while(this.table[index][i] != key){ // Pusta tablica.
                    i += 2; // Metoda przechodzi przez parzyste elementy wewnętrznej tablicy. Jeżeli któryś z nich jest równy key, zwracany jest kolejny element.
                }
                return this.table[index][i+1];
            }
        }
        else { // Dana wartość nie znajduje się w strukturze danych.
            return 'no such entry'
        }
    };
    this.displayTable = function(){ // Wypisuje całą zawartość tablicy hashującej.
        let n = 0;
        for(let i = 0; i < this.table.length; ++i){ // Program przechodzi przez całą główną tablicę i wypisuje elementy, jeżeli nie są puste.
            if(this.table[i][0] !== undefined){
                console.log(i + ": " + this.table[i]);
            }
        }
    };
};

// SET ZBIÓR

function Set(){
    this.data = []; // Dane zbioru znajdują się w tablicy, bo nie muszą być uporządkowane więc nie potrzebują kluczy.
    this.has = function(value){ // Sprawdzamy czy wartość przekazana jako argument istnieje w zbiorze. Zbiór posiada tylko unikalne wartości.
        if(this.data.indexOf(value) > -1){
            return true;
        }
        else {
            return false;
        }
    };
    this.length = function () {
        return this.data.length;
    };
    this.view = function () {
        return this.data;
    };
    this.insert = function(value){ // Dodawanie nowej wartości do zbioru.
        if(this.has(value)){
            return false;
        }
        else {
            this.data.push(value);
        }
    };
    this.remove = function(value){ // Usuwanie wartości podanej w argumencie.
        const index = this.data.indexOf(value);
        if(index > -1){
            this.data.splice(index, 1);
        }
    };
    this.union = function(otherSet){ // Argumentem jest instancja klasy Set, czyli inny zbiór. W wyniku tej metody zwracamy nowy zbiór.
        // W wyniku tej metody zwracamy nowy zbiór, który zawiera elementy ze zbioru na którym wykonano UNION, oraz elementy ze zbioru przekazanego w argumencie.
        const toReturn = new Set(); // Tworzymy nowy zbiór, który jest przypisany do tymczasowej zmiennej toReturn.
            for(let i = 0; i < this.length(); i++){
                toReturn.insert(this.data[i]); // Dodajemy do nowego zbioru zawartość poprzedniego zbioru.
            }
            for(let i = 0; i < otherSet.length(); i++){
                if(!toReturn.has(otherSet.data[i])){ // Jeżeli element z otherSet nie istnieje w nowym zbiorze toReturn to go dodajemy.
                    toReturn.insert(otherSet.data[i])
                }
            }
        return toReturn; // Zwracamy nowy zbiór stworzony z 2 wybranych zbiorów.
    };
    this.intersect = function(otherSet){ // Zwracamy nowy zbiór z wartościami powtarzające się w danych 2 zbiorach.
        const toReturn = new Set(); // Tworzymy nowy zbiór, który jest przypisany do tymczasowej zmiennej toReturn.
        for(let i = 0; i < this.length(); i++){ 
            if(otherSet.has(this.data[i])){ // Jeżeli otherSet posiada wartość i zbioru to dodajemy go do nowego zbioru.
                toReturn.insert(this.data[i]);
            }
        }
        return toReturn;
    };
    this.differences = function(otherSet){ // Zwracamy nowy zbiór z wartościami, które się nie powtarzają
        const toReturn = new Set(); // Tworzymy nowy zbiór, który jest przypisany do tymczasowej zmiennej toReturn.
        for(let i = 0; i < this.length(); i++){
            if(!otherSet.has(this.data[i])){ // Jeżeli othetSet nie posiada danej wartości i zbioru, to dodajemy go do nowego zbioru.
                toReturn.insert(this.data[i]);
            }
        }
        return toReturn;
    }
    this.clear = function(){
        this.data = [];
    }
}

// MAP - SŁÓWNIK

class Map { // Struktura, która zawiera klucz oraz wartość tego klucza. Klucze są unikalne.
    constructor(){
        this.data = {}; // Początkowo pusty obiekt słownika.
        this.mapSize = 0;
    }
    add(key, value){ // Dodawanie klccza i jego wartości do obiektu this.data.
        this.data[key] = value;
        this.mapSize++;
    }
    remove(key) { // Usuwanie klccza i jego wartości do obiektu this.data.
        delete this.data[key];
        this.mapSize--;
    }
    has(key){ // Czy dany słownik zawiera dany klucz.
        return key in this.data;
    }
    get(key){ // Zwracamy wartość klucza, jeżeli on istnieje.
        return this.has(key) ? this.data[key] : undefined;
    }
    clear(){ // Czyścimy cały słownik.
        this.data = {};
        this.mapSize = 0;
    }
    size(){ // Rozmiar słownika.
        return this.mapSize;
    }
    keys(){ // Wyświetlamy tablicę z wszystkimi kluczami.
        const keys = [];
        for(let key in this.data){
            keys.push(key);
        }
        return keys;
    }
    values() { // Wyświetlamy tablicę z wszystkimi wartościami.
        const values = [];
        for(let key in this.data){
            if(this.has(key)){
                values.push(this.data[key]);
            } 
        }
        return values;
    }
    viewAll(){ // Zwracamy cały słownik.
        for(let key in this.data){
            console.log(`${key} -> ${this.data}`)
        }
    }
}

// SET ZBIÓR CLASS

class Set{
    constructor(){
        this.data = [];
    };
    has(value){
        if(this.data.indexOf(value) > -1){
            return true;
        }
        return false;
    };
    length(){
        this.data.length;
    };
    view(){
        return this.data;
    };
    clear(){
        this.data = [];
    }
    insert(value){
        if(!this.has(value)){
            this.data.push(value);
        }
        else {
            console.log('this value is exisiting in this set')
        }
    };
    remove(value){
        const index = this.data.indexOf(value);
        if(index > -1){
            this.data.splice(index, 1)
        }
        else{
            console.log(`${value} isn't exist in this set`);
        } 
    };
    union(otherSet){
        const toReturn = new Set();
        for(let elem of this.data){
            toReturn.insert(elem);
        }
        for(let elem of otherSet.data){
            if(!toReturn.has(elem)){
                toReturn.insert(elem);
            }
        }
        return toReturn.data;
    }
    intersect(otherSet){
        const toReturn = new Set();
        for(let elem of this.data){
            if(otherSet.has(elem)){
                toReturn.insert(elem);
            }
        }
        return toReturn.data;
    }
    differences(otherSet){
        const toReturn = new Set();
            for(let elem of this.data){
                if(!otherSet.has(elem)){
                    toReturn.insert(elem);
                }
            }
            for(let elem of otherSet.data){
                if(!this.has(elem)){
                    toReturn.insert(elem);
                }
            }
        return toReturn.data;
    }
}

const set = new Set
set.insert(4)
set.insert(41)
set.insert(211)
set.insert(5)
const set2 = new Set
set2.insert(423)
set2.insert(5)
set2.insert(211)
set2.insert(777)

set.differences(set2)

//

