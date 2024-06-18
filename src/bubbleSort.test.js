import { expect, test } from "vitest";
import bubbleSort from "./bubbleSort";

test("sorts 1, 5, 4, 2, 3 to be 1, 2, 3, 4, 5", () => {
  expect(bubbleSort([1, 5, 4, 2, 3])).toEqual([1, 2, 3, 4, 5]);
});

test("sorts 1, 2, 3 should be 1, 2, 3", () => {
  expect(bubbleSort([1, 2, 3])).toEqual([1, 2, 3]);
});
