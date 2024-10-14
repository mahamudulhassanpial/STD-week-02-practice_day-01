function monthly_savings(All_payments, living_cost) {
    if (!Array.isArray(All_payments) || typeof living_cost !== 'number') {
        return "invalid input";
    }

    let total_income = 0;
    let Tax = 0;

    for (let payment of All_payments) {
        if (payment >= 3000) {
            Tax += payment * 0.20;
        }
        total_income += payment;
    }
    const saving = total_income - Tax - living_cost;

    if (saving < 0) {
        return "earn more";
    }

    return saving;
}
console.log(monthly_savings([1000, 2000, 3000], 5400));
console.log(monthly_savings([1000, 2000, 2500], 5000));
console.log(monthly_savings([900, 2700, 3400], 10000));
console.log(monthly_savings("It can be anything", 1000));
