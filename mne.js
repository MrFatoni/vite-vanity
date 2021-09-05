// npm install @vite/vitejs readline-sync cluster os
// node mne.js


const {
    abi, error, keystore, utils, constant,
    accountBlock, ViteAPI, wallet
} = require('@vite/vitejs');
const readlineSync = require("readline-sync");
//const cluster = require('cluster') //todo




let pre = ['Start with', 'End with'];
let index = readlineSync.keyInSelect(pre, 'Your choice?');

let myword = readlineSync.question('Your word (ex: dad): ');
console.log(`Finding address ${pre[index]} ${myword}...`);

do {

const myMnemonics = wallet.createMnemonics();
const addressObj = wallet.deriveAddress({ 
    mnemonics: myMnemonics, 
    index: 0 
});
    const address_without_vite = addressObj.address.substring(5);
    

  if (pre[index] == "Start with" && address_without_vite.startsWith(myword)) {
    console.log('\nAddress: ', addressObj.address);
    console.log('Private Key: ', addressObj.privateKey);
    console.log('Mnemonics: ', myMnemonics);
    break;
  }else{

  if (pre[index] == "End with" && address_without_vite.endsWith(myword)) {
    console.log('\nAddress: ', addressObj.address);
    console.log('Private Key: ', addressObj.privateKey);
    console.log('Mnemonics: ', myMnemonics);
    break;
  }
  }
} while (true);

