type Node<T> = {
    curr: T,
    next?: Node<T>
}
export default class Stack<T> {
    public length: number;
    private head?: Node<T>

    constructor() {
        this.head = undefined
        this.length = 0
    }

    push(item: T): void {
        const node: Node<T> = { curr: item, next: undefined }
        this.length++

        if (!this.head) {
            this.head = node
            return
        }

        node.next = this.head
        this.head = node
        return
    }

    pop(): T | undefined {
        const val = this.head?.curr
        this.head = this.head?.next

        if (this.length > 0) {
            this.length--
        }

        return val
    }

    peek(): T | undefined {
        return this.head?.curr
    }
}
