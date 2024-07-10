let upi = {
    bal: 0,
    dep: 0,
    width: 0,

    balance: function() {
        alert(`Balance in your account: ${this.bal}`);
    },

    deposit: function() {
        this.dep = Number(prompt(`Enter the amount you want to deposit:`));
        alert(`${this.dep} amount has been deposited into your account.`);
        this.bal += this.dep;
    },

    withdraw: function() {
        this.width = Number(prompt(`Enter the amount you want to withdraw:`));
        if (this.width > this.bal) {
            alert(`Insufficient funds.`);
        } else {
            alert(`${this.width} amount has been withdrawn from your account.`);
            this.bal -= this.width;
        }
    }
};

let creditCard = {
    limit: 100000,
    currentBalance: 0,
    purchaseAmount: 0,
    billAmount: 0,
    transactions: [],

    purchase: function() {
        this.purchaseAmount = Number(prompt(`Enter amount for purchase:`));
        if (this.purchaseAmount > this.limit) {
            alert(`Purchase amount exceeds your credit limit.`);
        } else {
            alert(`${this.purchaseAmount} amount has been deducted for your purchase.`);
            this.limit -= this.purchaseAmount;
            this.currentBalance += this.purchaseAmount;
            this.transactions.push(`${this.purchaseAmount} spent on a purchase.`);
        }
    },

    payBill: function() {
        this.billAmount = Number(prompt(`Enter the bill amount to pay:`));
        if (this.billAmount > this.currentBalance) {
            alert(`Insufficient balance to pay the bill.`);
        } else {
            alert(`${this.billAmount} amount has been paid towards your bill.`);
            this.currentBalance -= this.billAmount;
            this.transactions.push(`${this.billAmount} paid towards a bill.`);
        }
    },

    checkLimit: function() {
        alert(`Your credit card limit is ${this.limit}`);
    },

    viewTransactions: function() {
        console.log("Recent Transactions:");
        this.transactions.forEach(transaction => {
            console.log(transaction);
        });
    }
};

function deposit() {
    upi.deposit();
}

function withdraw() {
    upi.withdraw();
}

function checkBalance() {
    upi.balance();
}

function purchase() {
    creditCard.purchase();
}

function payBill() {
    creditCard.payBill();
}

function checkLimit() {
    creditCard.checkLimit();
}

function viewTransactions() {
    creditCard.viewTransactions();
}
