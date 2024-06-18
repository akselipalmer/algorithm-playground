function getDigit(number: number = 0, place: number, longestNumber: number) {
  const numberLength = number.toString().length;
  const zerosToPush = longestNumber - numberLength;
  let newNumber = number.toString();
  for (let i = 0; i < zerosToPush; i++) {
    newNumber = 0 + newNumber;
  }
  return Number(newNumber.charAt(longestNumber - place - 1));
}

function getLongestNumber(array: number[]): number {
  let longest = 0;
  for (let i = 0; i < array.length - 1; i++) {
    const currentLength = array[i].toString().length;

    if (currentLength > longest) {
      longest = currentLength;
    }
  }
  return longest;
}

function getBuckets(amount: number): number[][] {
  const buckets = [];
  for (let i = 0; i < amount; i++) {
    buckets.push([]);
  }
  return buckets;
}

export default function radixSort(array: number[]): number[] {
  const longestNumber = getLongestNumber(array);
  let buckets = getBuckets(10);
  const currentArray = [...array];

  for (let i = 0; i < longestNumber; i++) {
    while (currentArray.length) {
      const value = currentArray.shift();
      if (value !== undefined) {
        const place = getDigit(value, i, longestNumber);
        buckets[place].push(value);
      }
    }
    console.log(buckets);
    for (let i = 0; i < buckets.length; i++) {
      currentArray.push(...buckets[i]);
    }
    buckets = getBuckets(10);
  }
  return currentArray;
}
