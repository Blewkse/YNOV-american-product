type GetCartPrice = (quantity: number, unitPrice: number) => number;

export const getCartPrice: GetCartPrice = (quantity, unitPrice) => {
  if (quantity < 0 || unitPrice < 0) {
    throw new Error("Invalid input");
  }

  return quantity * unitPrice;
};
