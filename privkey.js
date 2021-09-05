// npm install @vite/vitejs readline-sync

const {
    abi, error, keystore, utils, constant,
    accountBlock, ViteAPI, wallet
} = require('@vite/vitejs');


const readlineSync = require("readline-sync");

let pre = ['Start with', 'End with'];

let index = readlineSync.keyInSelect(pre, 'Your choice?');

let myword = readlineSync.question('Your word (ex: dad): ');
console.log(`Finding address ${pre[index]} ${myword}...`);

do {
const myWallet = wallet.createWallet();
    const addressObj = myWallet.deriveAddress(0);
    const address_without_vite = addressObj.address.substring(5);
    

  if (pre[index] == "Start with" && address_without_vite.startsWith(myword)) {
    console.log('\nAddress: ', addressObj.address);
    console.log('Private Key: ', addressObj.privateKey);
    break;
  }else{

  if (pre[index] == "End with" && address_without_vite.endsWith(myword)) {
    console.log('\nAddress: ', addressObj.address);
    console.log('Private Key: ', addressObj.privateKey);
    break;
  }
  }
} while (true);

