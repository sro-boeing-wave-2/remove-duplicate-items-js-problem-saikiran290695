/**
 * Removes all the duplicate items from the collection
 * @param {Array} items
 * @returns {Array}
 */
const removeDuplicateItems = i => (Array.from(new Set(i))); //  send response in array format

module.exports = removeDuplicateItems;
