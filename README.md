# Degenesis Subgraph

This subgraph is built as a mustache template. You should modify the appropriate config under the `/config` folder and then
ensure there is a corresponding `prepare:` npm script to run. This should be run after any changes to the template file
and before any other deployment or build is attempted.

***Note: On the included goerli.json config, the network is set to mainnet. This is for local testing only and should switch
when actually deploying***


To get up and running locally 
```
npm install

# Startup the graph node, database, eth, and ipfs nodes
docker-compose up

# Build and deploy subgraph
npm run full-local
```

