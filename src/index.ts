type GetCartPrice = (quantity: number, unitPrice: number) => number;

export const getCartPrice: GetCartPrice = (quantity, unitPrice) => {
  if (quantity < 0 || unitPrice < 0) {
    throw new Error("Invalid input");
  }

  return quantity * unitPrice;
};

type State = "UT" | "NV" | "TX" | "AL" | "CA";

export const getPricePlusTVA = (state: State, price: number): number => {
  if (price < 0) {
    throw new Error("Invalid input");
  }

  let reduction = 0;
  if (state === "UT") {
    reduction = 0.0685;
  } else if (state === "NV") {
    reduction = 0.08;
  } else if (state === "TX") {
    reduction = 0.0625;
  } else if (state === "AL") {
    reduction = 0.04;
  } else if (state === "CA") {
    reduction = 0.0825;
  }

  return price + price * reduction;
};

export const getPriceMinusReduction = (price: number): number => {
  if (price < 0) {
    throw new Error("Invalid input");
  }

  let reduction = 0;
  if (price >= 1000) {
    reduction = 0.03;
  } else if (price >= 5000) {
    reduction = 0.05;
  } else if (price >= 7000) {
    reduction = 0.07;
  } else if (price >= 10000) {
    reduction = 0.1;
  } else if (price === 50000) {
    reduction = 0.15;
  }

  return price - price * reduction;
};

export const getFinalCartPrice = (
  quantity: number,
  unitPrice: number,
  state: State
): number => {
  const price = getCartPrice(quantity, unitPrice);
  const priceMinnusReduction = getPriceMinusReduction(price);

  return getPricePlusTVA(state, priceMinnusReduction);
};
