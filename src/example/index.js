// Module package Core

// ===================== 1 ========================


// let number = 0;
// setInterval(function() {
// console.log("hisob", number);
// number++;
// }, 100);

// const fs = require('fs');
// const data = fs.readFileSync('./input.txt', 'utf8');
// console.log(data);

// console.log('*******************');

// fs.writeFileSync("./input.txt", `${data} \n\t\t by Mukhammad`);
// const new_data = fs.readFileSync('./input.txt', 'utf8');
// console.log(new_data);

// Module package External

//======================= 1 =================

// const moment = require('moment');
// const time = moment().format("YYYY-MM-DD");
// // console.log(time);

//======================= 2 ======================

// setInterval(()=> {
//            console.log(`hozirgi vaqt: ${time}`);
// }, 5000);

//=================== 3 =========================

// const inquirer = require("inquirer");
// inquirer
//   .prompt([{ type: "input", name: "raqam", message: "raqamni kiriting?" }])
//   .then((answer) => {
//     console.log("man kiritgan raqam qiymati:", answer.raqam);
//   })
//   .catch((err) => console.log(err));

// ==================== 4 =========================

// const validator = require("validator");
// const test = validator.isEmail("foo@bar.com");    // @ tushirib qoldirsak false beradi
// const test = validator.isInt("100");     // agar son bolsa true, harf bolsa false
// const test = validator.isIP("219.248.101.245");    // ip faqat sonlardan iborat. va 4 ta 3talik raqamdan iborat
// console.log("test:", test);


//====================== 5 =======================


// const { v4: uuidv4 } = require('uuid');
// const random = uuidv4();
// console.log("random:", random);


// const chalk = require('chalk');
// const log = console.log;

// // log(chalk.blue('hello') + random + chalk.red("!"))
// log(chalk.red(`uuid creates ${random}`));






// Module package external

// const moment = require('moment');




// Module package File


//================================== 1 =================================


// const calculate = require('./hisob.js');

// const natija = calculate.kopaytirish(80, 20);
// console.log("Natija", natija);
// console.log("***************");

// const natija2 = calculate.qoshish(70, 20);
// console.log("Natija", natija2);
// console.log("***************");

// const natija3 = calculate.ayirish(70, 20);
// console.log("Natija", natija3);

// console.log(arguments);




// console.log(require("module").wrapper);



// ======================= 2 =====================

const Account = require("./account");
Account.tellMeAboutClass();
Account.tellMeTime();

console.log("==========================");

const myAccount = new Account('Paulo', 20000, 978372870278);
myAccount.giveMeDetails();

myAccount.makeDeposit(100000);


// ferrari 40000 usd
myAccount.withdrawMoney(40000);

myAccount.makeDeposit(200000);

