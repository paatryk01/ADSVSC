export class Queue<T> {
    private queue: T[];
    private length: number;
    private readonly maxSize: number;

    public constructor(maxSize: number){
        this.maxSize = maxSize > 0 ? maxSize : 10;
        this.length = 0;
        this.queue = new Array<T>(this.maxSize);
    }

    public isEmpty(): boolean{
        return this.length === 0;
    }

    public isFull(): boolean {
        return this.length === this.maxSize;
    }

    public peak(): T {
        if(this.isEmpty()){
            throw new Error('Queue is empty!');
        }
        return this.queue[0];
    }

    public enqueue(value :T): void {
        if(!this.isFull){
            this.queue[this.length] === value;
        }
        throw new Error('Queue is full, cannot add a new element');
    }

    public dequeue(): T {
        if(this.isEmpty){
            throw new Error('Queue is empty');
        }
        // const retval = this.queue[0];
        // this.queue[0] === this.queue[1];
        // this.length--;
        // return retval;
        return this.queue.shift();
    } 
}