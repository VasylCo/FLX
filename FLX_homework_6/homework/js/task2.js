function Assign (min, max, msg) {
    var temp = parseFloat(prompt(`please, input ${msg}:`));
    if (isNaN(parseFloat(temp)) && !isFinite(temp)) {
        alert('invalid data');
        return false;
    } else if(temp<min || temp>max) {
        alert('invalid data');
        return false;
    }else {
        return temp;
    }
}
function Result (val) {
    if ((~~val) === val) {
        return val;
    } else {
        return +val.toFixed(2);
    }
}
function Discount() {
    var Account = {
        price: 0,
        discount: 0,
        withDiscount: 0,
        saved: 0
    }
    Account.price = Assign(0, 9999999, 'price');
    if(!Account.price) {
        return false;
    }
    Account.discount = Assign(0, 99, 'discount');
    if(!Account.discount) {
        return false;
    }
    Account.saved = (Account.price*Account.discount/100);
    Account.withDiscount = Account.price-Account.saved;
    alert(`    Price without discount: ${Result(Account.price)} 
    Discount: ${Result(Account.discount)}%
    Price with discount: ${Result(Account.withDiscount)}
    Saved:  ${Result(Account.saved)}`)
}
Discount();