var count = 0;

function cc(card) {
    if (typeof card == "string") {
        card = card.toUpperCase();
    }
    if (card == 1 || card ==2 || card ==3 || card ==4 || card ==5 || card ==6) {
    count ++;
    }
    if (card == 7 || card == 8 || card == 9) {
    }
    if (card == 10 || card == "J" || card == "Q"|| card == "K" || card == "A") {
    count --;
    }
    if (count >0) {
        return `${count} Bet`
    }
    return `${count} Hold`;
}

console.log(cc("a"))
console.log(cc("A"))
console.log(cc(2))
console.log(cc('J'));
console.log(cc(9));
console.log(cc(2));
console.log(cc(7));


