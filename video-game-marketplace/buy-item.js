import {
    getAddressBalance,
    getTransactions,
    getItemPrice,
    writeTransactions
  } from './blockchain-helpers.js';
  
  import EC from 'elliptic';
  const ec = new EC.ec('p192');
  
  const buyerPrivateKey = process.argv[2];
  const itemBought = process.argv[3];
  // Add your code below

  const buyer = ec.keyFromPrivate(buyerPrivateKey, 'hex');
  const buyerAddress = buyer.getPublic().encode('hex');
  const balance = getAddressBalance(buyerAddress);
  const price = getItemPrice(itemBought);

  if (balance < price) {
    console.log('Insufficient balance to buy item');
