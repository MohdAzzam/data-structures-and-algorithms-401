const Hash = require('../hashTable/hashTable');

function leftJoin(hash1, hash2) {
    const arr1 = hash1.table;
    const results = [];
    for (let element of arr1) {
        if (element) {
            let current = element.root;
            while (current) {
                let peers = Object.entries(current.value);
                let item = hash2.getOne(peers[0][0])
                item ? peers[0].push(item) : peers[0].push('NULL');
                results.push(peers[0]);
                current = current.next;
            }
        }
    }
    return results;
}

module.exports= leftJoin;
