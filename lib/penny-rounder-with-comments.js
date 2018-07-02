const totalSplitter = (total, count) => {
  // divide the total by count and round to the nearest 0.01
  let splitValue = (total / count).toFixed(2);
  // assign values new array with size of count, that is filled with splitValue
  let values = new Array(count).fill(parseFloat(splitValue));
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
    // if the total is less than splitTotal, subtract 0.01 from splitValues at
    // 'i' index
    if (splitTotal > total) splitValues[i] -= 0.01;
    // if the total is more than splitTotal, add 0.01 from splitValues at
    // 'i' index
    if (splitTotal < total) splitValues[i] += 0.01;
    // sum up new splitValues and reassign splitTotal
    splitTotal = splitValues.reduce((total, value) => total += value);
    // increment counter
    i++
  }
  return splitValues;
}

const moneySplitter = (total, count) => {
  // call totalSplitter() and assign returned array to splitValues, passing in total and count
  let splitValues = totalSplitter(total, count)
  // pass splitValues to verifySplit() and return the output of the function
  return verifySplit(splitValues, total)
}

// export all functions for testing purposes
module.exports = {
  totalSplitter,
  verifySplit,
  moneySplitter
}
