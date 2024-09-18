import EC from 'elliptic';
import { readFileSync, writeFileSync } from 'fs';

const ec = new EC.ec('p192');
const keyPair = ec.genKeyPair();
const publicKey = keyPair.getPublic('hex');


const newWalletName = process.argv[2];
const walletsFile = readFileSync('./wallets.json');
let wallets = JSON.parse(walletsFile);
// only add new wallet if name doesn't already exist
if (!wallets.hasOwnProperty(newWalletName)) {
    wallets[newWalletName] = publicKey;
    wallets = JSON.stringify(wallets, null, 2);
    writeFileSync('./wallets.json', wallets);
}

