const Hashtable = require('../hashTable/hashTable');

/**
 * 
 * @param {string} string 
 * @returns string
 */

function repeatedWord(string) {
    /**
     * create a new hashtable to hold the data
     */
    const words = new Hashtable(1024);
    /**
     * create an array that using regex to return just the string from the string we recived
     */
    const arr = string.match(/\w+/g);
    /**
     * loop over the array until the inital value less than the array length
     */
    for (let i = 0; i < arr.length; i++) {
        /**
         * make every string in array in lowerCase to easy check and follow the edage case
         */
        let wordIndx = arr[i].toLowerCase();
        /**
         * check if the hash table have the repeated words 
         */
        if (words.contains(wordIndx)) {
            return words.get(wordIndx);
        }
        words.add(wordIndx, wordIndx);
        /**
         * add the value to the hashtable
         */

    }



}
console.log(repeatedWord('it was a great is in it'));

module.exports = repeatedWord;
