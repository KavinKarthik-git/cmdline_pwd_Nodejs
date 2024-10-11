if(process.argv[2] == "kavin")
{
    console.log("Hi kavin")
}


import { Command } from 'commander';
const prog = new Command();
import chalk from 'chalk';
import createPassword from './utild/createPassword.js';
import clipboard from 'clipboardy';

prog
  .version("1.0.0")
  .description("PWD Generator")
  .option("-l, --length <number>","length of the password")
  .option("-s, --save ","save password to pwd.txt")
  .option("-nn, --no-numbers","remove numbers")  
  .option("-ns, --no-symbols","remove symbols")

  .parse(process.argv);
const {length,numbers, save,symbols} =prog.opts();
const generatePassword = createPassword(length,numbers,symbols)
console.log(chalk.red("Generated Password: ")+chalk.bold(generatePassword)); 
clipboard.writeSync(generatePassword)
console.log(chalk.greenBright("Copied to clipboard")) 
