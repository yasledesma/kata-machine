export default function bs_list(haystack: number[], needle: number): boolean {
    let first = 0;
    let middle = Math.trunc(haystack.length/2);
    let last = haystack.length - 1;

    if (haystack[middle] === needle) return true;

    if (needle > haystack[middle] && haystack.length > 1) return bs_list(haystack.splice(middle, last + 1), needle)
    
    if (needle < haystack[middle] && haystack.length > 1) return bs_list(haystack.splice(first, middle), needle)

    return false
}

