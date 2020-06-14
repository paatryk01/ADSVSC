export class Stack<T> {
  private stack: T[];
  private length: number;
  private readonly maxSize: number;

  public constructor(maxSize: number) {
    this.length = 0;
    this.maxSize = maxSize;
    this.stack = new Array<T>(this.maxSize);
  }

  public isEmpty(): boolean {
    return this.length === 0;
  }

  public isFull(): boolean {
    return this.length === this.maxSize;
  }

  public addValue(newItem: T): void {
    if (this.isFull()) {
      throw new Error("stack overflow");
    }
  this.stack[this.length++] = newItem;
  }

  public pop(): T {
    if (this.isEmpty()) {
      throw new Error("empty stack");
    }
  //  this.stack[this.length];
    const retval = this.stack[--this.length];
    return retval;
  }

  public top(): T {
    if (this.isEmpty()) {
      throw new Error("empty stack");
    }
    return this.stack[this.length - 1];
  }
}