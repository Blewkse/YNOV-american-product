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
  it("should apply 3% reduction", () => {
    expect(getCartPrice(2, 1000)).toBe(1940);
  });
  it("should apply 5% reduction", () => {
    expect(getCartPrice(6, 1000)).toBe(5700);
  });
  it("should apply 7% reduction", () => {
    expect(getCartPrice(8, 1000)).toBe(7440);
  });
  it("should apply 10% reduction", () => {
    expect(getCartPrice(11, 1000)).toBe(9900);
  });
  it("should apply 15% reduction", () => {
    expect(getCartPrice(51, 1000)).toBe(43350);
  });
});
