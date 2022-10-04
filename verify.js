// Setup: npm install alchemy-sdk
import { Alchemy, Network } from "alchemy-sdk";

//insert your alchemy API key below
//change network as required alchemy dashboard will show network naming
const config = {
  apiKey: "",
  network: Network.ETH_GOERLI,
};
const alchemy = new Alchemy(config);

//insert contract address and tokenId you want to check
const main = async () => {
  const address = "0xfA2e58eEEDAF1b8a76148ecE3C06261e36A38232";
  
  const tokenId = 0;

  const owner = await alchemy.nft.getOwnersForNft(address, tokenId);
  console.log(owner);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();