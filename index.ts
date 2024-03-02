import { CompoundResp, MessageType } from "./compounds";

const { StargateClient } = require("@cosmjs/stargate");
const fs = require("fs");

const GAS_FEE = 0.075;

const displayGas = (gas: bigint): string =>
  `${((Number(gas) * GAS_FEE) / 1_000_000).toFixed(4)} JUNO (${Number(
    gas
  ).toLocaleString()} gas)`;

(async () => {
  const allBurnEvents: Record<
    string,
    { sender: string; amount: bigint; txHash: string[]; burnCount: number }
  > = {};

  let allGasWanted = BigInt(0);
  let totalTxs = 0;
  let allGasPaid: bigint[] = [];
  let allGasUsed: bigint[] = [];

  for (let i = 1; i < 229; i++) {
    const compoundings: CompoundResp = JSON.parse(
      fs.readFileSync(`./compounds_query_results/test_output.${i}.json`, {
        encoding: "utf8",
        flag: "r",
      })
    );

    const allGasFeesUsed =
      compoundings?.txs?.map(({ gas_wanted }) => BigInt(gas_wanted)) || [];

    compoundings.txs.forEach(({ gas_used }) =>
      allGasUsed.push(BigInt(gas_used))
    );

    allGasPaid = allGasPaid.concat(allGasFeesUsed);

    allGasFeesUsed.forEach((used) => {
      totalTxs++;
      allGasWanted += used;
    });
  }

  const mean = displayGas(allGasWanted / BigInt(totalTxs));

  const sortedGassesPaid = allGasPaid.sort(
    (a, b) => Number(a.toString()) - Number(b.toString())
  );

  const median = displayGas(
    sortedGassesPaid[Math.floor(sortedGassesPaid.length / 2)]
  );
  const lowest = displayGas(sortedGassesPaid[0]);
  const highest = displayGas(sortedGassesPaid.at(-1) || BigInt(0));

  console.log({
    mean,
    median,
    lowest,
    highest,
    totalCount: totalTxs,
    totalGasWanted: displayGas(allGasWanted),
    totalGasUsed: displayGas(allGasUsed.reduce((a, b) => a + b)),
  });
})();
