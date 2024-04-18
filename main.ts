import inquirer from "inquirer";
import Choices from "inquirer/lib/objects/choices.js";

let myBalance = 20000;
let myPin = 2492;

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "enter your pin number",
    type: "number",
  },
]);

if (pinAnswer.pin === myPin) {
  console.log("correct pin code");

  let oprationAns = await inquirer.prompt([
    {
      name: "oprator",
      message: "please select option",
      type: "list",
      choices: ["cash withdraw", "balance check"],
    },
  ]);

  if (oprationAns.oprator === "cash withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "please enter amount",
        type: "number",
      },
    ]);

    myBalance -= amountAns.amount;
    console.log(`your remaining balance is ${myBalance}`);
  } else if (oprationAns.oprator === "balance check") {
    console.log(`your current balance is ${myBalance}`);
  }
} else {
  console.log("please enter your valid pin ");
}
