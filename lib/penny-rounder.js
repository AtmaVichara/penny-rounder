// function for splitting the total into 3 decimal values,
// and return in array
const totalSplitter = (total) => {
  let splitValue = (total / 3).toFixed(2);
  let values = new Array(3).fill(parseFloat(splitValue));
  return values;
}

// function for checking the returned total of totalSplitter(),
// if the splitTotal is more than total, subtract 0.01 from each element in the Array
// else add 0.01 to each element in array until splitTotal equals total
// then return array of splitValues
const verifySplit = (splitValues, total) => {
  let splitTotal = splitValues.reduce((total, value) => total += value);
  if (splitTotal === total) return splitValues;
  let i = 0;
  while (splitTotal !== total) {
    if (splitTotal > total) splitValues[i] -= 0.01;
    if (splitTotal < total) splitValues[i] += 0.01;
    splitTotal = splitValues.reduce((total, value) => total += value);
    i++
  }
  return splitValues;
}

// function that calls totalSplitter() then returns verifySplit()
const moneySplitter = (total) => {
  let splitValues = totalSplitter(total)
  return verifySplit(splitValues, total)
}

module.exports = {
  totalSplitter,
  verifySplit,
  moneySplitter
}
