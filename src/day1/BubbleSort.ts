export default function bubble_sort(arr: number[]): void {
    let lastIdx = arr.length;

    while (lastIdx > 0) {
        for (let i = 0; i < lastIdx; i++) {
            if (arr[i] > arr[i + 1]) {
                const tmp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = tmp
            }
        }
        lastIdx -= 1
    }
}
