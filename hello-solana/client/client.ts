// client code...huge thx to solpg for solana dev guide!!
// create transaction
const blockhashInfo = await pg.connection.getLatestBlockhash();
const tx = new web3.Transaction({
  ...blockhashInfo,
});

// add Hello World instruction 
tx.add(
  new web3.TransactionInstruction({
    programId: pg.PROGRAM_ID,
    keys: [],
    data: Buffer.from([]),
  })
);

// sign transaction
tx.sign(pg.wallet.keypair);

// send transaction to solana cluster
const txHash = await pg.connection.sendRawTransaction(tx.serialize());
console.log(txHash);