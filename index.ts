#! /usr/bin/env node

import inquirer from "inquirer";

let accountBalance = 50000;

let pinNumber = 3333;

console.log(`My Total Balance is ${accountBalance}`);


let enterPinNumber = await inquirer.prompt([

  {
    name: "pin",
    type: "number",
    message: "Enter Your Pin Number ? "
  }

]);

if (enterPinNumber.pin === pinNumber) {

    console.log("Correct Pin Code Number.");

    let selectOne = await inquirer.prompt([

        {
            name: "selectoption",
            message: "Select One Of The Option ?",
            type: "list",
            choices: ["withdraw","check balance","fast cash"]
        }
    ]);

if (selectOne.selectoption === "withdraw"){

    let cashans = await inquirer.prompt([
      
        {
            name: "cash",
            message: "How Much Amount You Want To Withdraw ?",
            type: "number"
        }
    ]);

    if (cashans.cash < accountBalance){
        accountBalance -= cashans.cash;
        console.log(`Your Remaining Amount Is : ${accountBalance}.`);
        
    } 
    else if (cashans.cash > accountBalance){
        console.log(`Insufficiet Balance`);
        
    }
} 

if (selectOne.selectoption === "check balance"){

    console.log(`Your Current Amount Is  ${accountBalance}`);
    
}

if ( selectOne.selectoption === "fast cash") {
    
    let fastAmount = await inquirer.prompt([

        {
            name: "fast",
            message: "How Much Amount You Want To Withdraw Through Fast Cash ? ",
            type: "list",
            choices: ["10000","20000","30000"]
        }
    ]);

if (fastAmount.fast === "10000") {
  accountBalance -= fastAmount.fast;
  console.log(`Your Remaining Balance Is ${accountBalance}`);
  
} 
else if (fastAmount.fast === "20000") {
    accountBalance -= fastAmount.fast;
    console.log(`Your Remaining Balance Is ${accountBalance}`);  
}
else if (fastAmount.fast === "30000"){
    accountBalance -= fastAmount.fast;
    console.log(`Your Remaining Balance Is ${accountBalance}`);
    
}
}
    
}

    else {
        console.log(`You Enter Wrong Pin Code.`);
        
    }