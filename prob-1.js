function calculateTax(income, expenses) {
    if(income < 0 || expenses < 0){
        return "Invalid Input";
    }

    let savings = (income - expenses);
    let tax = savings * 0.2;
    if(savings === 0) {
        return 0;
    } else if(savings > 0) {
        return tax;
    } else {
        return "Invalid Input";
    }
}

const income = 6000;
const expenses = -1753;
const tax = calculateTax(income, expenses);
console.log(`For income:${income} and expenses:${expenses} tax is:${tax}`);

