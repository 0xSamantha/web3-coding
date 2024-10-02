tx.add(
    new web3.TransactionInstruction({
        programId: pg.PROGRAM_ID,
        keys: [],
        data: Buffer.from([]),
    })
);

tx.sign(pg.wallet.keypair);

const txHash = await pg.connection.sendRawTransaction(tx.serialize());
console.log(txHash);