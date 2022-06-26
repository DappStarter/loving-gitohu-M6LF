require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife olympic system index recipe place mistake half praise army giant'; 
let testAccounts = [
"0x0fc377a350a7183e9aa49922f07822bc96489e815739e0baa655493cb6b0067c",
"0x4e07035af3d6d72345b29fdb5dd167e3215b650f8e929839ffea92f5b3da4ebb",
"0xac3198acb6bd74b0dbbefa97d5b60f6777b7083d8a79800a6bab7b3a9bee4c44",
"0x4a22b8a1d6b79ccadd364604eef1dcfd47c4fef0a438743c500d5a84803cf58e",
"0x95e97b50b0f214258cc8c6a9a8c03f6260b0d5c6ee7ce11b1cb5e60984e248ce",
"0x29e52bbd897487248dd85d888d0be2c99152c266ac355987ae4990e3aeb59c60",
"0xa7d0ff7ae67aeaae92c2a6c6826b32677e601de2568c5a423f96a5ba386943f6",
"0x2b149a77a6b44221b1409e37e27e53706a6b481e2e1d1114c05e8edf7366c4ad",
"0xd129a54565c24afba46531f61cb7ccc20c4a6837aa5eb2176c26d6b6eafc1218",
"0x5f8b07a2ee8f2c39390db3cbdc32e13cd9494a577efc75741af2b3cb58b83ee8"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
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

