function find_divide_able_number() {
    const divide_able_number = [];
    for (let i = 1; i <= 50; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            divide_able_number.push(i);
        }
    }
    return divide_able_number;
}


console.log(find_divide_able_number());
