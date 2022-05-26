//Do not modify this contents of characterNames.json - ./datasets/characterNames.json

function orderCharactersByPopularity(characterNames) {
  result = [];
  // Loop all the names
  characterNames.forEach((name, idx) => {
    // No need to search if first name
    if (idx > 0) {
      // See if we have already come across this name
      resIdx = result.findIndex(
        (x) => name.toUpperCase() === x.name.toUpperCase()
      );
      // If we have then increment count
      if (resIdx >= 0) {
        result[resIdx].count++;
        return;
      }
    }
    // Default to adding to end
    result.push({
      name: name,
      count: 1,
    });
  });
  // Simple sort
  result = result.sort(compareCountThenName);
  return result;
}

/**
 * Compare two objects by their count and then their name
 *
 * @param {Object} a First object to compare
 * @param {Object} b Second object to compare
 * @returns {number}
 */
function compareCountThenName(a, b) {
  // If count is the same
  if (a.count === b.count) {
    // Order by name alphabetically
    return a.name.localeCompare(b.name);
  }
  // Otherwise sort by count
  return b.count - a.count;
}
module.exports = orderCharactersByPopularity;
