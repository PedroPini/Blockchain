const crypto = require("crypto");

function hashData(data) {
    return crypto.createHash('sha256').update(data).digest('hex');
}

function createMerkleTree(transactions) {
    if (transactions.length === 0) {
      return null;
    }
  
    if (transactions.length === 1) {
      return hashData(transactions[0]);
    }
  
    const newLevel = [];
    for (let i = 0; i < transactions.length; i += 2) {
      if (i + 1 < transactions.length) {
        newLevel.push(hashData(transactions[i], transactions[i + 1]));
      } else {
        newLevel.push(transactions[i]);
      }
    }
  
    return createMerkleTree(newLevel);
  }

const transactions = ['1', '2', '3', '4', '5'];
const merkleRoot = createMerkleTree(transactions);
console.log(merkleRoot);

// const message = "Hello Equinim";
// const hashResult = calculateHash(message);
// console.log('Hash: ', hashResult);

class Block {
    constructor(index, transactions, previousHash) {
        this.index = index;
        this.timestamp = Date.now();
        this.transactions = transactions;
        this.previousHash = previousHash;
        this.nonce = 0;
        this.hash = this.calculateHashBlock();
    }

    calculateHashBlock() {
        const data = this.index + this.timestamp + JSON.stringify(this.transactions) + this.previousHash + this.nonce;
        console.log(typeof crypto);
console.log(crypto.createHash('sha256'));
        return crypto.createHash('sha256').update(data).digest('hex');
        
    }

    mineBLock(difficulty) {
        const target = "0".repeat(difficulty);
        while(this.hash.substring(0, difficulty) !== target) {
            this.nonce++;
            this.hash = this.calculateHash();
        }
        console.log(`Mined: ${this.hash}`);
    }
}

// Example
// const genesisBlock = new Block(0, [], "0");
// console.log(`Genesis Block Hash: ${genesisBlock.hash}`);

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }

    minePendingTransactions() { 
        const newBlock = new Block(this.chain.length, ['Reward Transactions'], this.getLatestBlock().hash);
    }

    createGenesisBlock() {
        return new Block(0, [], "0");
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(transactions) {
        const previousBlock = this.getLatestBlock();
        const newBlock = new Block(this.chain.length, transactions, previousBlock.hash);
        this.chain.push(newBlock);
    }
}

// const blockchain = new Blockchain();
// console.log(blockchain.addBlock(['Transaction 1', 'Transaction 2']));
// console.log(blockchain.getLatestBlock().hash);

//MINING
const blockchain = new Blockchain();
blockchain.minePendingTransactions(4);

function generateKeyPair() {
    return crypto.generateKeyPairSync('rsa', {
        modulusLength: 2048,
        publicKeyEncoding: {
            type: 'spki',
            format: 'pem'
        },
        privateKeyEncoding: {
            type: 'pkcs8',
            format: 'pem'
        }
    });
}

function signMessage(privateKey, message) {
    const signer = crypto.createSign('SHA256');
    signer.update(message);
    return signer.sign(privateKey, 'hex');
}

function verifySignature(publicKey, signature, message) {
    const verifier = crypto.createVerify('SHA256');
    verifier.update(message);
    return verifier.verify(publicKey, signature, 'hex');
}

// const { privateKey, publicKey } = generateKeyPair();
// const message = "Hello World!";
// const signature = signMessage(privateKey, message);
// const isValid = verifySignature(publicKey, signature, message);
// console.log(`Signature valid: ${isValid}`);