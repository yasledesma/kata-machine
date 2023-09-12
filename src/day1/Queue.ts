type Node<T> = {
    curr: T,
    next?: Node<T>
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
        const node: Node<T> = { curr: item, next: undefined }

        if (this.length === 0) {
            this.head = this.tail = node
            this.head.next = this.tail
            this.length++
            return
        }

        this.tail ? this.tail.next = node : null
        this.tail = node
        this.length++
        return
    }

    deque(): T | undefined {
        if (this.length === 0) return

        const head = this.head?.curr
        this.head = this.head?.next
        this.length--

        return head
    }

    peek(): T | undefined {
        return this.head?.curr
    }
}
