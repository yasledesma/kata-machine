// I should get back to this soon
// It was kind of a blind trial, and it's a piece of shit implementation of a linked-list
export default class SinglyLinkedList<T> {
    public length: number;
    private node: { curr: T | null, next: any | null }

    constructor() {
        this.node = { curr: null, next: null }
        this.length = 0
    }

    prepend(item: T): void {
        // create new node
        // make its next props point to out first node
        const newNode = { curr: item, next: this.node };
        this.node = newNode
        this.length++
    }

    insertAt(item: T, idx: number): void {
        // why do tests pass without this method lol
        let i = 0
        let prev = this.node
        let node = { curr: item, next: null }

        while (prev.next) {
            if (i === idx - 1) {
                const next = prev.next
                prev.next = node
                node.next = next
                this.length++
                return
            }
            i++
        }
    }

    append(item: T): void {
        // create new node with item as curr and undef a next
        // lookup last existing node
        // append your new node to prev node.next
        const newNode = { curr: item, next: null }
        if (!this.node.curr) {
            this.node = newNode
            this.length++
            return;
        }

        let prev = this.node
        while (prev.next) {
            prev = prev.next
        }

        prev.next = newNode
        this.length++
        return;
    }

    remove(item: T): T | undefined {
        // lookup by node curr prop
        // point prev node to next node
        // i guess this is supposed to remove nodes from the start of the list only???

        if (this.node.curr === item) {
            const remove = this.node.curr
            this.node = this.node.next
            this.length--
            return remove as T
        }

        return;
    }

    get(idx: number): T | undefined {
        let node = this.node
        let i = 0

        if (idx === 0) {
            return this.node.curr as T
        }

        do {
            i++
            node = node.next
            if (i === idx) return node.curr as T
        } while (node.next)

        return;
    }

    removeAt(idx: number): T | undefined {
        // find previous node
        // find next node
        // point prev.next to the next node
        let prev
        let remove
        let node = this.node
        let i = 0

        do {
            if (idx === 0) {
                const curr = this.node.curr
                this.node = this.node.next
                this.length--
                return curr as T
            }

            if (i === idx - 1) {
                prev = node
            }

            i++
            node = node.next


            if (i === idx) {
                remove = node
                break
            }
        } while (node.next)

        if (prev && remove) {
            prev.next = remove.next
            this.length--
            return remove.curr as T
        }

        return
    }
}
