/**
 * Removes all the duplicate items from the collection
 * @param {Array} items
 * @returns {Array}
 */
const removeDuplicateItems = (items) => {
  var distinct_set = new Set(items);
  var array = Array.from(distinct_set);
  return (array);
};

module.exports = removeDuplicateItems;
