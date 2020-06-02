export const sortByKey = (array, key) => {
    return array.slice().sort(function(a, b)
    {
        const x = a[key]
        const y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}