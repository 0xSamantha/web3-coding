import { getWalletAddressFromName } from './blockchain-helpers.js';

const addressName = process.argv[2];
const address = getWalletAddressFromName(addressName);

console.log(`The public address for ${addressName} is ${address}`);