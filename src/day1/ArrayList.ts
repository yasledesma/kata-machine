type Array<T> = {
    [k: number]: T | undefined;
}

export default class ArrayList<T> {
    public length: number
    private cap: number
    private array?: Array<T>


    constructor(cap: number) {
        this.cap = cap
        this.length = 0
        this.array = undefined
    }

    prepend(item: T): void {
        if (!this.array) {
            this.array = {}
            for (let i = 0; i < this.cap; i++) {
                this.array[i] = undefined
            }
        }

        let i = this.length
        this.length++

        while (this.array[i - 1] && i > 0) {
            this.array[i] = this.array[i - 1]
            i--
        }

        this.array[0] = item
    }

    insertAt(item: T, idx: number): void {
        this.length++

        if (!this.array) {
            this.array = {}
            for (let i = 0; i < this.cap; i++) {
                this.array[i] = i === idx ? item : undefined
                break
            }
            return
        }

        const swap: { curr?: T, next?: T } = { curr: undefined, next: undefined };

        for (let i = idx; i < this.cap; i++) {
            if (i === idx) {
                swap.next = this.array[i]
                this.array[i] = item
                i++
                continue
            }

            swap.curr = this.array[i]
            this.array[i] = swap.next
            i++
        }
    }

    append(item: T): void {
        if (!this.array) {
            this.array = {}
            for (let i = 0; i < this.cap; i++) {
                this.array[i] = undefined
            }
        }

        if (this.length === this.cap) {
            this.cap *= 2
            for (let i = this.length + 1; i < this.cap; i++) {
                this.array[i] = undefined
            }
        }

        this.array[this.length] = item
        this.length++
    }

    remove(item: T): T | undefined {
        if (!this.array) return

        let idx;

        for (let i = 0; i < this.length; i++) {
            if (this.array[i] === item) {
                idx = i
                break
            }
        }

        return idx !== undefined ? this.removeAt(idx) : undefined;
    }

    get(idx: number): T | undefined {
        return this.array ? this.array[idx] : undefined
    }

    removeAt(idx: number): T | undefined {
        if (!this.array) return

        const value = this.array[idx]

        for (let i = idx; i < this.length; i++) {
            if (this.array[i + 1]) {
                this.array[i] = this.array[i + 1]
            } else {
                this.array[i] = undefined
            }
        }

        this.length--

        return value
    }
}
