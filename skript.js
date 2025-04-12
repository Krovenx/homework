function filterByPrefix(array, prefix) {
    const lowerCasePrefix = prefix.toLowerCase();
    return array.filter(item => item.toLowerCase().startsWith(lowerCasePrefix));
}
const strings = ["banana", "Apple", "apricot", "Avocado"];
const prefix = "a";
const result = filterByPrefix(strings, prefix);
console.log(result);