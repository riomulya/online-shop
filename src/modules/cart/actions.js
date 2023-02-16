export default {
  addProduct(context, payload) {
    const addItem = {
      productId: payload.productId,
      quantity: payload.quantity,
      amount: payload.amount,
    };
    context.commit('addToCart', addItem);
  },
};
