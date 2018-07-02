const totalSplitter = (total) => {
  // divide the total by 3 and round to the nearest 0.01
  let splitValue = (total / 3).toFixed(2);
  // fill new array to three elements with the split total
  let values = new Array(3).fill(parseFloat(splitValue));
  // return total
  return values;
}

const verifySplit = (splitValues, total) => {
  // sum up the splitValues array and assign it to splitTotal
  let splitTotal = splitValues.reduce((total, value) => total += value);
  // if the splitTotal is equal to the total, then return the splitValues array
  if (splitTotal === total) return splitValues;
  // create counter, assigning i to 0
  let i = 0;
  // create loop to run until splitTotal equals the total
  while (splitTotal !== total) {
    // if the total is less than splitTotal, add subtract 0.01 from splitValues at
    // 'i' index
    if (splitTotal > total) splitValues[i] -= 0.01;
    // if the total is more than splitTotal, add add 0.01 from splitValues at
    // 'i' index
    if (splitTotal < total) splitValues[i] += 0.01;
    // sum up new splitValues and reassign splitTotal
    splitTotal = splitValues.reduce((total, value) => total += value);
    // increment counter
    i++
  }
  return splitValues;
}

const moneySplitter = (total) => {
  // call totalSplitter() and assign returned array to splitValues
  let splitValues = totalSplitter(total)
  // pass splitValues to verifySplit() and return the output of the method
  return verifySplit(splitValues, total)
}

// export all functions for testing purposes
module.exports = {
  totalSplitter,
  verifySplit,
  moneySplitter
}
