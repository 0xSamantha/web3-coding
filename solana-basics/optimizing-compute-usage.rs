// max compute per block: 48 million CU
// max compute per account per block: 12 million CU
// max compute per transaction: 1.4 million CU


// how to measure compute usage:
compute_fn!("My message" => {
    msg!("Hello, World!");
});

// compute_fn! macro is used to measure compute units (CU) usage of different snippets of code.
// helpful for finding which part of code is consuming the most compute units.

// msg! is used to log messages to the console.
// Ok(()) is used to indicate that the function completed successfully.

// LOGGING

// helpful for debugging but is also costly in terms of compute units.
// should avoid logging unnecessary information.
// base58 coding and concatenating strings are also expensive in terms of compute units.

// logging pubkeys:
// you can use the .key() and .log() to efficiently log pubkeys with lower compute cost.
// example: 262 cu
compute_fn! { "Log a pubkey" => 
    ctx.accounts.counter.to_account_info().key().log();
}

