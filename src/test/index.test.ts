import { describe, expect, it } from "bun:test";

describe("Price by cart", () => {
  it("test 1 product", () => {
    expect(getCartPrice(1, 2.5)).toBe(2.5);
  });
  it("test 1 product", () => {
    expect(getCartPrice(0, 2.5)).toBe(0);
  });
  it("test 1 product", () => {
    expect(getCartPrice(-1, 2.5)).toThrowError();
  });
  it("test 1 product", () => {
    expect(getCartPrice(4, 2.5)).toBe(10);
  });
  it("test 1 product", () => {
    expect(getCartPrice(4, 3.5)).toBe(14);
  });
});
