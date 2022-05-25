//Do not modify this contents of characterNames.json - ./datasets/characterNames.json

function orderCharactersByPopularity(characterNames) {
  result = [];
  // Loop all the names
  characterNames.forEach((name) => {
    // See if we have already come across this name
    resIdx = result.findIndex(
      (x) => name.toUpperCase() === x.name.toUpperCase()
    );
    // If we have then increment count
    if (resIdx >= 0) {
      result[resIdx].count++;
    } else {
      // Otherwise add a new result object
      result.push({
        name: name,
        count: 1,
      });
    }
  });
  // Simple sort, could improve this
  result = result.sort((a, b) => {
    // If count is the same
    if (a.count === b.count) {
      // Order by name alphabetically
      return a.name > b.name ? 1 : -1;
    }
    // Otherwise sort by count
    return a.count > b.count ? -1 : 1;
  });

  return result;
}

module.exports = orderCharactersByPopularity;
