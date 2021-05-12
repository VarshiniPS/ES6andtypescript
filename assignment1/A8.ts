/*class Account {
    id: number;
    name:string;
    balance:number;
    constructor(){
        this.id = id;
    this.name = name;
    this.balance=this.;
    
    }
};

    let totbalance=function(){
       return Account.balance+SavingAccount.interest+
    }
    

class SavingAccount extends Account {
    constructor(interest){
        super(id,name,balance);
        this.interest=interest;
    }
};

class CurrentAccount extends Account{
    constructor(cash_credit){
        super(id,name,balance);
        this.cash_credit=cash_credit;
    }
};

let s=new SavingAccount(2.3);
let c=new CurrentAccount(12000);
let A=new Account(1,"PS",12000);

console.log()
*/
class account {
    id: number;
    name: string;
    balance: number;
    constructor(i: number, n: string, b: number) {
    this.id = i;
    this.name = n;
    this.balance = b;
    }
    
    checkBalance() {
    return this.balance;
    }
    }
    
    class savingAccount extends account {
    interest: number;
    constructor(i: number, n: string, b: number, si: number) {
    super(i, n, b);
    this.interest = si;
    }
    
    checkBalance() {
    return this.balance + this.interest;
    }
    }
    
    class currentAccount extends account {
    cashcredit: number;
    constructor(i: number, n: string, b: number, cc: number) {
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
    console.log(
    "Total Balance : " +
    a1.checkBalance() +
    a2.checkBalance() +
    a3.checkBalance() +
    a4.checkBalance() +
    a5.checkBalance()
    );
    

