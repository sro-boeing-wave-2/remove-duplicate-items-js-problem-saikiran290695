/**
 * Removes all the duplicate items from the collection
 * @param {Array} items
 * @returns {Array}
 */
const removeDuplicateItems = (items) => {
  const distinctSet = new Set(items); // pick unique elements of array
  return (Array.from(distinctSet)); //  send response in array format
};

module.exports = removeDuplicateItems;
