# Gas Stats Calculator

Script for evaluating gas usage of the ymos junostake outpost.

To run it yourself you would execute the `store_compoundings.sh` script which will store the logs of the compoundings that have occured so far. at time of writing the shell script generates 229 json files.

The last step is to `npm i && npm start` to run the ts script which will calculate the stats and output them to the console.

at time of writing the results look as such

```json
{
  "mean": "13372200.000 JUNO. (1,002,915 gas)",
  "median": "11421786.667 JUNO. (856,634 gas)",
  "lowest": "1609026.667 JUNO. (120,677 gas)",
  "highest": "67080440.000 JUNO. (5,031,033 gas)",
  "totalCount": 11400,
  "totalGasUsed": "152443125453.333 JUNO. (11,433,234,409 gas)"
}
```
