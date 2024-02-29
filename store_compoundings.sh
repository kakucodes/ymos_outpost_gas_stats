#!/bin/bash

for ((page=1; page<=250; page++)); do
    junod query txs --events execute._contract_address='juno1uaf673war8s0yg25saa07rps796r88dh3luar54d06ug8heqm5jq4ccqvv' wasm.action="outpost compound" --limit 50 --page "$page" -o json --chain-id juno-1 --node https://rpc-archive.junonetwork.io:443/ > "compounds_query_results/test_output.$page.json"
done