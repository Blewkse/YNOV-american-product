import { describe, expect, it } from "bun:test";
import { getCartPrice, getPriceMinusReduction, getPricePlusTVA } from "..";

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

describe("Price by reduction", () => {
  it("should apply 3% reduction", () => {
    expect(getPriceMinusReduction(1000)).toBe(970);
  });
  it("should apply 5% reduction", () => {
    expect(getPriceMinusReduction(5000)).toBe(4750);
  });
  it("should apply 7% reduction", () => {
    expect(getPriceMinusReduction(7000)).toBe(6510);
  });
  it("should apply 10% reduction", () => {
    expect(getPriceMinusReduction(10000)).toBe(9000);
  });
  it("should apply 15% reduction", () => {
    expect(getPriceMinusReduction(50000)).toBe(42500);
  });
  it("should throw error", () => {
    expect(() => getPriceMinusReduction(-1)).toThrow("Invalid input");
  });
});

describe("Price by state", () => {
  it("should apply 6.85% reduction", () => {
    expect(getPricePlusTVA("UT", 100)).toBe(106.85);
  });
  it("should apply 8% reduction", () => {
    expect(getPricePlusTVA("NV", 100)).toBe(108);
  });
  it("should apply 6.25% reduction", () => {
    expect(getPricePlusTVA("TX", 100)).toBe(106.25);
  });
  it("should apply 4% reduction", () => {
    expect(getPricePlusTVA("AL", 100)).toBe(104);
  });
  it("should apply 8.25% reduction", () => {
    expect(getPricePlusTVA("CA", 100)).toBe(108.25);
  });
  it("should throw error", () => {
    expect(() => getPricePlusTVA("FR", 100)).toThrow("Invalid input");
  });
  it("should throw error", () => {
    expect(() => getPricePlusTVA("UT", -1)).toThrow("Invalid input");
  });
});
