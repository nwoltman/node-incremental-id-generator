'use strict';

function incrementalIDGenerator(characters, options) {
  const chars = characters.split('');
  const prefix = options && options.prefix || '';

  if (new Set(chars).size < chars.length) {
    throw new Error('The `characters` argument must not contain duplicate characters.');
  }

  const charsIndexes = [0];
  const maxIndex = chars.length - 1;

  return function() {
    var nextID = prefix;
    var i;

    // Build the next ID
    for (i = 0; i < charsIndexes.length; i++) {
      nextID += chars[charsIndexes[i]];
    }

    // Crawl back in the charsIndexes array and increment the first index possible.
    // If all indexes are maxed out, add a new index.
    for (;;) {
      if (charsIndexes[--i] < maxIndex) {
        ++charsIndexes[i];
        break;
      }

      charsIndexes[i] = 0;

      if (i > 0) {
        continue;
      }

      charsIndexes.push(0);
      break;
    }

    return nextID;
  };
}

module.exports = incrementalIDGenerator;
