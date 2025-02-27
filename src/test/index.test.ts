import { describe, expect, it } from "bun:test";
import { getCartPrice } from "..";

describe("Price by cart", () => {
  it("test 1 product", () => {
    expect(getCartPrice(1, 2.5)).toBe(2.5);
  });
  it("test 0 product", () => {
    expect(getCartPrice(0, 2.5)).toBe(0);
  });
  it("test -1 product", () => {
    expect(() => getCartPrice(-1, 2.5)).toThrow("Invalid input");
  });
  it("test 4 products", () => {
    expect(getCartPrice(4, 2.5)).toBe(10);
  });
  it("test 4 products other price", () => {
    expect(getCartPrice(4, 3.5)).toBe(14);
  });
});
