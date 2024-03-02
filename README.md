# Gas Stats Calculator

Script for evaluating gas usage of the ymos junostake outpost.

To run it yourself you would execute the `store_compoundings.sh` script which will store the logs of the compoundings that have occured so far. at time of writing the shell script generates 229 json files.

The last step is to `npm i && npm start` to run the ts script which will calculate the stats and output them to the console.

at time of writing the results look as such

```json
{
  "mean": "0.0764 JUNO (1,018,828 gas)",
  "median": "0.0653 JUNO (870,018 gas)",
  "lowest": "0.0105 JUNO (140,302 gas)",
  "highest": "0.3845 JUNO (5,126,844 gas)",
  "totalCount": 11400,
  "totalGasWanted": "871.0986 JUNO (11,614,647,418 gas)",
  "totalGasUsed": "857.4926 JUNO (11,433,234,409 gas)"
}
```
