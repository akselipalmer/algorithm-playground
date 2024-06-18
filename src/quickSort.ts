export default function quickSort(
  array: number[],
  averagePivot: number | undefined = undefined
): number[] {
  // base case. Array is of length 0 or 1
  if (array.length < 2) {
    // returns the array
    return array;
  }

  // defines the pivot as the last item in the array
  const pivot = averagePivot ? averagePivot : array.pop();

  if (pivot === undefined) {
    return array;
  }
  // create 2 arrays
  const lessThanArray = [];
  let lessThanTotal = 0;
  const greaterThanArray = [];
  let greaterThanTotal = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      // less than array (anything less than the pivot)
      lessThanArray.push(array[i]);
      lessThanTotal += array[i];
    } else {
      // greater than array (anything greater than or equal to the pivot)
      greaterThanArray.push(array[i]);
    }
  }
  // concatenates the arrays with the pivot between
  const lessThanAverage = lessThanTotal / lessThanArray.length;
  const greaterThanAverage = greaterThanTotal / greaterThanArray.length;
  return quickSort(lessThanArray, lessThanAverage).concat(
    ...(averagePivot ? [] : [pivot]),
    quickSort(greaterThanArray, greaterThanAverage)
  );
}
