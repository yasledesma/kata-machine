type Node<T> = {
    curr: T,
    prev?: Node<T>
}

export default class Queue<T> {
    public length: number;
    private head?: Node<T>
    private tail?: Node<T>


    constructor() {
        this.head = this.tail = undefined
        this.length = 0

    }

    enqueue(item: T): void {
        const node: Node<T> = { curr: item, prev: undefined }

        if (this.length === 0) {
            this.head = this.tail = node
            this.tail.prev = node
            this.length++
            return
        }

        this.head ? this.head.prev = node : null
        this.head = node
        this.length++
        return
    }

    deque(): T | undefined {
        if (this.length === 0) return

        const tail = this.tail?.curr
        this.tail = this.tail?.prev
        this.length--

        return tail
    }

    peek(): T | undefined {
        return this.tail?.curr
    }
}
