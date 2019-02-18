function userCard(index) {
    function UserCard(index) {
    const TAX = 0.5;
    const CHECK = 100;
    let self = this;
    function writeLog(operation, value, date) {
        let log = {};
        let set = {
            year: 'numeric', month: 'numeric', day: 'numeric',
            hour: 'numeric', minute: 'numeric', second: 'numeric',
            hour12: false
        };
        log.operationType = operation;
        log.credits = value;
        log.operationTime = date.toLocaleString('en-US', set);
        self.options.historyLog.push(log);
    }
    this.options = {
        'key': index,
        'balance': 100,
        'transactionLimit': 100,
        'historyLog': []
    }
    this.getCardOptions = function () {
        return this.options;
    }
    this.putCredits = function (put) {
        this.options.balance += put;
        writeLog('Recived credits', put, new Date());
    }
    this.takeCredits = function (take) {
        if (this.options.balance > take && this.options.transactionLimit > take) {
            this.options.balance -= take;
        } else {
            console.error('no much founds!');
        }
        writeLog('Withdrawal of credits', take, new Date());

    }
    this.setTransactionLimit = function (lim) {
        this.options.transactionLimit = lim;
        writeLog('Transaction lmit change', lim, new Date());
    }
    this.transferCredits = function (transf, card) {
        if (this.options.balance > transf && this.options.transactionLimit > transf) {
            this.takeCredits(transf+transf*TAX/CHECK);
            card.putCredits(transf);
        } else {
            console.error('no much founds!');
        }
    }
}
return new UserCard(index);
}

class UserAccount {
    constructor (name) {
        this.name = name;
        this.cards = [];
        this.cardsLimit = 3;
    }
    addCard() {
        if (this.cards.length < this.cardsLimit) {
            this.cards.push(userCard(this.cards.length+1));
        }else {
            console.error('You can not have more than 3 cards!');
        }
    }
    getCardByKey(key) {
        if (key >=1 && key <= this.cardsLimit) {
            return this.cards[key-1];
        } else {
            console.error('no more than 3 cards!');
        }
    }

}
