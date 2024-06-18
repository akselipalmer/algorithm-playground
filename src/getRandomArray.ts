export default function getRandomArray(value: number): number[] {
  const newArray = [];
  for (let i = 0; i < value; i++) {
    newArray.push(Math.floor(Math.random() * 10000 + 1));
  }
  return newArray;
}
