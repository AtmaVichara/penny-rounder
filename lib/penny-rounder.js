const totalSplitter = (total, count) => {
  let splitValue = (total / count).toFixed(2);
  let values = new Array(count).fill(parseFloat(splitValue));
  return values;
}

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

const moneySplitter = (total, count) => {
  let splitValues = totalSplitter(total, count)
  return verifySplit(splitValues, total)
}

module.exports = {
  totalSplitter,
  verifySplit,
  moneySplitter
}
