"use strict";
class account {
    constructor(i, n, b) {
        this.id = i;
        this.name = n;
        this.balance = b;
    }
    checkBalance() {
        return this.balance;
    }
}
class savingAccount extends account {
    constructor(i, n, b, si) {
        super(i, n, b);
        this.interest = si;
    }
    checkBalance() {
        return this.balance + this.interest;
    }
}
class currentAccount extends account {
    constructor(i, n, b, cc) {
        super(i, n, b);
        this.cashcredit = cc;
    }
    checkBalance() {
        return this.balance - this.cashcredit;
    }
}
let a1 = new account(100, "mayu", 200);
let a2 = new savingAccount(101, "piu", 500, 20);
let a3 = new currentAccount(201, "Anu", 200, 50);
let a4 = new savingAccount(102, "Adu", 150, 100);
let a5 = new currentAccount(202, "Anushka", 350, 50);
console.log("Account Balance 1 : " + a1.checkBalance());
console.log("Account Balance 2 : " + a2.checkBalance());
console.log("Account Balance 3 : " + a3.checkBalance());
console.log("Account Balance 4 : " + a4.checkBalance());
console.log("Account Balance 5 : " + a5.checkBalance());
// You can also console.log for each user i have done in single console.log
console.log("Total Balance : " +
    a1.checkBalance() +
    a2.checkBalance() +
    a3.checkBalance() +
    a4.checkBalance() +
    a5.checkBalance());
//# sourceMappingURL=A2.js.map