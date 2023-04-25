function childArray(array, length) {
    if (length === 1) {
        return array.map((item) => [item]);
    }
    const data = [];
    array.forEach((item, index) => {
        const smallArray = childArray(array.slice(index + 1), length - 1);
        smallArray.forEach((smallItem) => {
            data.push([item].concat(smallItem));
        });
    });
    return data;
}
const result = childArray([1, 2, 3], 2);
console.log(result);
console.log(result.length);

const result2 = childArray([1, 2, 3], 3);
console.log(result2);
console.log(result2.length);
