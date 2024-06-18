export default function getArray(value: number): number[] {
  const newArray = [];
  for (let i = 1; i < value; i++) {
    newArray.push(i);
  }
  return newArray;
}
