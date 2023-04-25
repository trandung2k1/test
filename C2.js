function searchFibonacci(index) {
    if (index === 1 || index === 2) {
        return 1;
    }
    return searchFibonacci(index - 1) + searchFibonacci(index - 2);
}

console.log(searchFibonacci(6));
