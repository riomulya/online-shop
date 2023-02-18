export default {
  addProduct(context, payload) {
    let cart = context.getters.cart;
    let skip = false;

    for (let index = 0; index < cart.length; index++) {
      console.log(cart[index].quantity);
      if (cart[index].productId === payload.productId) {
        cart[index].quantity += payload.quantity;
        cart[index].amount += +payload.amount.toFixed(2);
        skip = true;
      }
    }
    if (!skip) {
      const addItem = {
        productId: payload.productId,
        quantity: payload.quantity,
        amount: payload.amount,
      };
      context.commit('addToCart', addItem);
    }
  },
};
