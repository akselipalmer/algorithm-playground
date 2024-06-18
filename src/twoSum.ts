export default function twoSum(
  nums: number[],
  target: number
): number[] | undefined {
  const addends: { [key: number]: { value: number; index: number } } = {};

  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];
    if (currentNumber < target) {
      // is an addend
      const neededNumber = target - currentNumber;
      if (addends[currentNumber]?.value === neededNumber) {
        // complete
        return [i, addends[currentNumber].index];
      }
      addends[neededNumber] = { value: currentNumber, index: i };
    }
    // not an addend
  }
}
