export default function oldQuickSort(array: number[]): number[] {
  if (array.length <= 1) {
    return array;
  }

  const pivot = array.pop();

  if (pivot === undefined) return array;

  const lessThanArray = [];
  const greaterThanArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      lessThanArray.push(array[i]);
    } else {
      greaterThanArray.push(array[i]);
    }
  }

  const sortedLessThanArray = oldQuickSort(lessThanArray);
  const sortedGreatorThanArray = oldQuickSort(greaterThanArray);

  return sortedLessThanArray.concat(pivot, sortedGreatorThanArray);
}
