const DecentralBank = artifacts.require("DecentralBank");

module.export = async function issueRewards(callback) {
    let decentralBank = await DecentralBank.deployed()
    await decentralBank.issueTokens()
    console.log("Successfull")
    callback()
}