/**
 * Removes all the duplicate items from the collection
 * @param {Array} items
 * @returns {Array}
 */
const removeDuplicateItems = (items) => {
  const distinctSet = new Set(items);
  const array = Array.from(distinctSet);
  return (array);
};

module.exports = removeDuplicateItems;
