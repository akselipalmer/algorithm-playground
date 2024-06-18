export default function bubbleSort(numbers: number[]) {
  let changed = true;
  do {
    changed = false;
    for (let i = 0; i < numbers.length; i++) {
      const currentNum = numbers[i];
      const perviousNum = numbers[i - 1];
      if (perviousNum > currentNum) {
        numbers[i] = perviousNum;
        numbers[i - 1] = currentNum;
        changed = true;
      }
    }
  } while (changed);
  return numbers;
}
