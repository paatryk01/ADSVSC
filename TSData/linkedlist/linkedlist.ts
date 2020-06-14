import { DS } from './node';

export class LinkedList<T> { // List with sentinels. 
    private head: DS.Node<T>;
    private tail: DS.Node<T>;

    constructor() {
        this.head = new DS.Node<T>();
        this.tail = new DS.Node<T>();
        this.head.next = this.tail;
    }

    public isEmpty(): boolean {
        return this.head === null;
    }

    public insertFirst(item: T): void {
        const newNode = new DS.Node<T>(item);

        newNode.next = this.head.next;
        this.head.next = newNode;
    }

    public getFirst(): T | null {
        if(this.isEmpty()) {
            throw new Error('List is empty');
        }

        return this.head.next ? this.head.next.item : null;
    }

    public insertLast(item: T): void {
        const newNode = new DS.Node<T>(item);

        let current: DS.Node<T> | null = this.head;

        while(current && current.next !== this.tail) {
            current = current.next;
        }

        if(current) {
            newNode.next = this.tail;
            current.next = newNode;
        }
    }

    public removeFirst(): T | null {
        if(this.isEmpty()) {
            throw new Error('List is empty');
        }

        let retval: DS.Node<T> | null = this.head.next;

        if(retval) {
            this.head.next = retval.next;
            retval.next = null;
        }    

        return retval ? retval.item : null;
    }

    public remove(searchKey: T): T | null {
        if(this.isEmpty()) {
            throw new Error('List is empty');
        }

        let retval: DS.Node<T> | null = null;

        let current: DS.Node<T> = this.head;

        while(current.next && current.next.item !== searchKey) {
            current = current.next;
        }

        if(current.next) {
            retval = current.next;
            current.next = current.next.next;
            retval.next = null;
        }

        return retval && retval.item ? retval.item : null;
    }

    public contains(searchKey: T): boolean {
        if(this.isEmpty()) {
            throw new Error('List is empty');
        }

        let retval: boolean = false;
        let current: DS.Node<T> | null = this.head;

        while (current && current.next !== this.tail) {
            if(current.next && current.next.item === searchKey) {
                retval = true;
                break;
            }
            current = current.next;
        }

        return retval;
    }
}