import { ethers } from "ethers";
import fs from "fs-extra";

async function main() {
    const provider = new ethers.JsonRpcProvider('http://0.0.0.0:8545');
    const wallet = new ethers.Wallet(
        "0x229687287d64e382296546946f2b5054ca463d752558d4ff562d71570b457c8d",
        provider
    );
    const abi = fs.readFileSync('./SimpleStorage_sol_SimpleStorage.abi', 'utf8');
    const binary = fs.readFileSync('./SimpleStorage_sol_SimpleStorage.bin', 'utf8');
    const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
    console.log('Deploying . . .');
    const contract = await contractFactory.deploy();
    console.log(contract)

}

main().then(() => process.exit(0)).catch((error) => {
    console.error(error);
    process.exit(1);
});