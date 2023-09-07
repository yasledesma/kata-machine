export default function bs_list(haystack: number[], needle: number): boolean {
    let iFirst = 0;
    let iMiddle = Math.trunc(haystack.length/2);
    let iLast = haystack.length - 1;

    if (haystack[middle] === needle) return true;

    if (needle > haystack[middle] && haystack.length > 1) return bs_list(haystack.splice(middle, last + 1), needle)
    
    if (needle < haystack[middle] && haystack.length > 1) return bs_list(haystack.splice(first, middle), needle)

    return false
}

