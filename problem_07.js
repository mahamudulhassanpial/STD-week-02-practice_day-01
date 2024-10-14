const num = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

function remove_duplicate(ar) {
    return [...new Set(ar)];
}

console.log(remove_duplicate(num));
