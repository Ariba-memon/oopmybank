#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";









const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 3000)
    })
}
async function welcome() {
    let rainbowTitle = chalkAnimation.pulse(" Welcome to My Bank");
    await sleep();
    rainbowTitle.stop();
}

await welcome()

interface BankAccount {
    AccNo: number;
    AccHolderName: string;
    Balance: number;
    BalanceCheck: () => void;
    Deposit: (amount: number) => void;
    Withdraw: (amount: number) => void;

}

class Transaction implements BankAccount {
    AccNo: number;
    AccHolderName: string;
    Balance: number;
    constructor(accno: number, name: string, bal: number) {
        this.AccNo = accno;
        this.AccHolderName = name;
        this.Balance = bal;
    }
    BalanceCheck(): void {
        if (this.Balance < 0) {
            console.log('Insufficient Balance Please Deposit')
        }
        else {
            console.log('The Balance is :' + this.Balance)
        }
    }
    Deposit(amount: number): void {
        this.Balance += amount;
        console.log('Amount of ' + amount + ' Deposited Successfully');
        console.log(chalk.green('The Balance is :' + this.Balance))

    }
    Withdraw(amount: number): void {
        if (amount > this.Balance) {
            console.log(chalk.blue('Not Enough Balance'))
        }
        else {
            this.Balance -= amount;
            console.log('Amount of ' + amount + ' withdrawn Successfully');
            console.log(chalk.yellow('The Balance is :' + this.Balance))
        }

    }
}
let new1 = new Transaction(3000, 'Aribamemon', 0);
new1.BalanceCheck();
new1.Deposit(5000);
new1.Withdraw(3000);
new1.Withdraw(2500);