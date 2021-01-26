require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give close brown slab carpet rate saddle hub include prize bone giant'; 
let testAccounts = [
"0xa4fa11dfa5b0df5115a6f2d65dba2cc5982ce54f5dfa917cc63c4f7d5b1d09be",
"0x78ca1e1897a43b2b3e3071eec6a6589ee8711200843ff928253de2c1f23c4994",
"0x707493bfb3af368d05860728c261215ff14808afa69f12ee5ea71c9947c4fa12",
"0xdbd408a8826803530e3b72939c86d05f4fc398e5c6c730c59f6f274892293572",
"0x0e534d3b3bb47d579c69ac40eed4645c38ad6d71f8bcdbe14b0b4e825c1022b9",
"0x6e8b07b0009471dc6c102dabfab399bdc5e139cb662380cff258625752dca21f",
"0x5b7f80c039d08a8f3f0cd23dcc58df682f62223ea6b70efcbc29a57b35d26f70",
"0x0cc064403e58b9a3bee75aea38ba60d39d73fca09dc99d6819570d08ac3d3916",
"0x0b145f9d7bdaeac414376f18f20b520cb3227deb45feb2a9601dade08bcb8903",
"0xab0219a87c367333f183dfb2fc38a9294f0589ca77e115257b93d4a70571ee57"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
