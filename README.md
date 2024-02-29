# Gas Stats Calculator

Script for evaluating gas usage of the ymos junostake outpost.

To run it yourself you would execute the `store_compoundings.sh` script which will store the logs of the compoundings that have occured so far. at time of writing the shell script generates 229 json files.

The last step is to `npm i && npm start` to run the ts script which will calculate the stats and output them to the console.

at time of writing the results look as such

```json
{
  "mean": "0.0752 JUNO (1,002,915 gas)",
  "median": "0.0642 JUNO (856,634 gas)",
  "lowest": "0.0091 JUNO (120,677 gas)",
  "highest": "0.3773 JUNO (5,031,033 gas)",
  "totalCount": 11400,
  "totalGasUsed": "857.4926 JUNO (11,433,234,409 gas)"
}
```
